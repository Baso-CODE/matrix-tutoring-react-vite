import { FaCheckCircle } from "react-icons/fa";
import "./FokusLesPrivateTKA.css";

const FokusLesPrivateTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Fokus Les Privat Mata Pelajaran TKA SD SMP SMA ${locSuffix}`,
    // Variasi 2 (Service Focused)
    `Bimbingan Belajar TKA & Mapel Pilihan ${locName}`,
    // Variasi 3 (Expertise Focused)
    `Guru Les Privat Spesialis TKA & UTBK ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  const subjects = [
    "Matematika Lanjutan",
    "Bahasa Indonesia Lanjutan",
    "Bahasa Inggris Lanjutan",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sosiologi",
    "Geografi",
    "Sejarah",
    "Antropologi",
    "PPKn / Pendidikan Pancasila",
    "Bahasa Arab",
    "Bahasa Jerman",
    "Bahasa Prancis",
    "Bahasa Jepang",
    "Bahasa Korea",
    "Bahasa Mandarin",
    "Produk/Projek Kreatif dan Kewirausahaan",
  ];

  return (
    <section className="container-fokus-tka">
      <div className="centered-content__fokus-tka">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        {/* Injeksi Lokasi di Paragraf Pembuka */}
        <p>
          <b>Matrix Tutoring</b> hadir bagi siswa <strong>{locName}</strong>{" "}
          melalui Program Les Privat TKA yang menyediakan layanan bimbingan
          intensif untuk mata pelajaran inti sebagai berikut:
        </p>

        <ol className="numbered-list-tka">
          <li>
            <strong>SD/MI/SMP/MTs:</strong> Fokus pada Literasi (Bahasa
            Indonesia) dan Numerasi (Matematika).
          </li>
          <li>
            <strong>SMA/MA/SMK:</strong> Bahasa Indonesia, Matematika, Bahasa
            Inggris, dan 2 (dua) mata pelajaran pilihan sesuai jurusan siswa{" "}
            <strong>{locSuffix}</strong>.
          </li>
        </ol>

        <p>
          Selain mata pelajaran wajib TKA, Matrix Tutoring juga menyediakan{" "}
          <strong>Les Privat Mapel Pilihan {locSuffix}</strong> untuk mendukung
          minat dan jurusan siswa, di antaranya:
        </p>

        {/* Daftar Mapel yang di-styling dengan Grid */}
        <ul className="subject-list-tka">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-list-tka__item">
              <FaCheckCircle className="subject-list-tka__icon" />
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FokusLesPrivateTKA;
