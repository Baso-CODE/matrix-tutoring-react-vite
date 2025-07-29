/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook untuk animasi penghitung angka.
 * Angka akan bertambah dari startValue hingga targetValue dalam durasi tertentu.
 *
 * @param {number} targetValue - Nilai akhir yang ingin dicapai.
 * @param {number} duration - Durasi animasi dalam milidetik (default: 2000ms).
 * @param {number} startValue - Nilai awal animasi (default: 0).
 * @param {boolean} isDecimal - Apakah nilai target adalah desimal (untuk format).
 * @param {boolean} isEnabled - Kontrol apakah animasi harus berjalan.
 * @returns {string} Nilai yang sedang dianimasikan, diformat sebagai string.
 */
const useCountingAnimation = (
  targetValue,
  duration = 2000,
  startValue = 0,
  isDecimal = false,
  isEnabled = false
) => {
  const [count, setCount] = useState(startValue);
  const requestRef = useRef(); // Untuk menyimpan ID requestAnimationFrame
  const startTimeRef = useRef(); // Untuk menyimpan waktu mulai animasi

  useEffect(() => {
    // Hentikan animasi jika isEnabled false atau jika sudah mencapai target
    if (
      !isEnabled ||
      (count === targetValue && !isDecimal) ||
      (isDecimal && count.toFixed(1) === targetValue.toFixed(1))
    ) {
      cancelAnimationFrame(requestRef.current);
      // Jika isEnabled menjadi false, reset count ke startValue
      if (!isEnabled) {
        setCount(startValue);
      }
      return;
    }

    // Reset waktu mulai setiap kali targetValue atau isEnabled berubah
    startTimeRef.current = null;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime; // Set waktu mulai jika belum diset
      }

      const elapsed = currentTime - startTimeRef.current; // Waktu yang telah berlalu
      // Hitung progress animasi (0.0 hingga 1.0)
      const progress = Math.min(elapsed / duration, 1);

      // Hitung nilai yang dianimasikan berdasarkan progress
      const animatedValue = startValue + (targetValue - startValue) * progress;

      setCount(animatedValue); // Update state dengan nilai baru

      // Lanjutkan animasi jika progress belum 100%
      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      } else {
        // Pastikan nilai akhir tepat targetValue
        setCount(targetValue);
      }
    };

    // Mulai animasi
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup function: batalkan animasi jika komponen di-unmount atau isEnabled berubah
    return () => cancelAnimationFrame(requestRef.current);
  }, [targetValue, duration, startValue, isDecimal, isEnabled]); // Re-run effect jika dependencies berubah

  // Format nilai yang dihitung
  if (isDecimal) {
    return count.toFixed(1); // Untuk nilai desimal seperti "0.5"
  } else if (targetValue === 95) {
    return `${Math.round(count)}`; // Untuk persentase, bulatkan dan tambahkan '%'
  } else if (targetValue === 1000) {
    return `${Math.floor(count)}`; // Untuk "1000+", bulatkan dan tambahkan '+'
  } else if (targetValue === 5000) {
    return `${Math.floor(count)}`; // Untuk "5000+", bulatkan dan tambahkan '+'
  }
  return Math.floor(count).toString(); // Default untuk angka bulat lainnya
};

export default useCountingAnimation;
