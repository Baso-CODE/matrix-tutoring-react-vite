// Data 4 CS Lokal
export const CS_LIST = [
  { name: "Ms. Dita", phone: "6285817279118" },
  { name: "Ms. Eka", phone: "6287783999349" },
  { name: "Ms. Linda", phone: "6285747281466" },
  { name: "Ms. Syifa", phone: "628131971916" },
];

const STORAGE_KEY = "matrix_cs_rotation_index";

/**
 * Mendapatkan indeks CS yang aktif saat ini dari localStorage.
 * Jika belum ada, diinisialisasi ke 0.
 */
export const getCurrentCsIndex = () => {
  const savedIndex = localStorage.getItem(STORAGE_KEY);
  if (savedIndex !== null) {
    return parseInt(savedIndex, 10) % CS_LIST.length;
  }
  localStorage.setItem(STORAGE_KEY, "0");
  return 0;
};

/**
 * Memperbarui indeks ke CS berikutnya untuk rotasi mendatang.
 */
export const rotateToNextCs = () => {
  const currentIndex = getCurrentCsIndex();
  const nextIndex = (currentIndex + 1) % CS_LIST.length;
  localStorage.setItem(STORAGE_KEY, nextIndex.toString());
  return nextIndex;
};

/**
 * Fungsi serbaguna untuk menangani klik tombol WhatsApp CS.
 * - Mengambil CS aktif saat ini
 * - Memutar giliran CS ke berikutnya di localStorage
 * - Membuka link WhatsApp di tab baru
 */
export const handleCsWhatsAppClick = (customMessage) => {
  const currentIndex = getCurrentCsIndex();
  const activeCs = CS_LIST[currentIndex];

  const defaultMessage = `Halo ${activeCs.name} https://apps.bimbelmatrix.com/, saya ingin tanya program belajar untuk\n\nKelas : \nMapel : \nKurikulum : \nWilayah : `;
  const messageText = customMessage || defaultMessage;

  const finalUrl = `https://api.whatsapp.com/send?phone=${activeCs.phone}&text=${encodeURIComponent(
    messageText,
  )}`;

  // Geser rotasi ke CS berikutnya
  rotateToNextCs();

  // Buka WhatsApp di tab baru
  window.open(finalUrl, "_blank", "noopener,noreferrer");
};
