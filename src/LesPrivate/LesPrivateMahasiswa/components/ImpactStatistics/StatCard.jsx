/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import useCountingAnimation from "../../../../helper/useCountingAnimation"; // Pastikan path ini benar

const StatCard = ({ stat }) => {
  const IconComponent = stat.icon;
  const [isVisible, setIsVisible] = useState(false); // State untuk melacak visibilitas
  const cardRef = useRef(null); // Ref untuk elemen kartu

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika kartu masuk ke viewport, set isVisible menjadi true
          // dan hentikan observasi agar animasi tidak berulang jika discroll keluar masuk
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
          }
        });
      },
      {
        threshold: 0.5, // Animasi akan berjalan ketika 50% dari komponen terlihat
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Mulai observasi pada elemen kartu
    }

    // Cleanup function: hentikan observasi saat komponen di-unmount
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []); // Hanya jalankan sekali saat mount

  // Panggil hook animasi, dan berikan isVisible sebagai parameter isEnabled
  const animatedCount = useCountingAnimation(
    stat.numericValue,
    2800, // Durasi
    0, // Mulai dari 0
    stat.isDecimal,
    isVisible // Animasi hanya berjalan jika isVisible true
  );

  return (
    <div className="stat-card" ref={cardRef}>
      {IconComponent && <IconComponent className="stat-icon" size={70} />}
      <p className="stat-value">
        {animatedCount}
        {stat.displaySuffix}
      </p>
      <p className="stat-unit">{stat.unit}</p>
      <p className="stat-description">{stat.description}</p>
    </div>
  );
};

export default StatCard;
