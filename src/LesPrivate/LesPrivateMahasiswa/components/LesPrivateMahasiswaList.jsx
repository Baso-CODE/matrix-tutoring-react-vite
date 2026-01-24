// LesPrivateMahasiswaList.js
import { FaCheckCircle } from "react-icons/fa";
import "./LesPrivateMahasiswaList.css";

const LesPrivateMahasiswaList = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Pilihan Mata Kuliah Lengkap - Program Les Privat Mahasiswa ${locSuffix}`,
    // Variasi 2 (Service Focused)
    `Daftar Mata Kuliah Bimbingan Belajar Mahasiswa ${locName}`,
    // Variasi 3 (Scope Focused)
    `Tutor Privat Mata Kuliah ${locName} Terlengkap`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  const subjects = [
    "Kalkulus",
    "Statistik",
    "Statistik Bisnis",
    "Matematika Dasar",
    "Fisika Dasar",
    "Kimia Dasar",
    "Kimia Organik",
    "Kimia Analitik",
    "Biologi Dasar",
    "Aljabar Linier",
    "Algoritma & Pemrograman",
    "Ilmu Biomedik Dasar",
    "Matematika Teknik",
    "Matematika Diskrit",
    "Matematika Ekonomi",
    "Matematika Akuntansi",
    "Intermediate Accounting",
    "Analisis Laporan Keuangan",
    "Financial Management",
    "Akuntansi Dasar",
    "Akuntansi Keuangan",
    "Akuntansi Jasa Dagang",
    "Ekonomi Makro Mikro",
    "Ekonomi Teknik",
    "Economy Managerial & Financial Corporate",
    "Managerial Accounting",
    "Manajemen Keuangan",
    "Kewirausahaan",
    "Mekanika Bahan",
    "Derivatif Market",
    "Keuangan dan Perbankan",
    "Audit dan Perpajakan",
    "Ekonometrika",
    "Anatomi & Histologi",
    "Bahasa Korea",
    "Bahasa Jepang",
    "Bahasa Jerman",
    "Bahasa Perancis",
    // Item terakhir dibuat dinamis
    `Dan mata kuliah lainnya sesuai kurikulum kampus ${locSuffix} (Request by Tutor).`,
  ];

  return (
    <section className="container-list-les-mahasiswa">
      <div className="les-private-mahasiswa-list-container">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        {/* Injeksi Lokasi di Paragraf Pembuka */}
        <p>
          Di Matrix Tutoring, mahasiswa <strong>{locName}</strong> dapat memilih
          pendampingan belajar untuk berbagai mata kuliah mulai dari mata kuliah
          dasar umum hingga mata kuliah jurusan yang lebih spesifik. Berikut
          daftar mata kuliah populer untuk Program Les Privat Mahasiswa:
        </p>

        <ul className="subject-list-les-private-mahasiswa">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-list-les-private-mahasiswa-item">
              <FaCheckCircle className="subject-list-les-private-mahasiswa-icon" />
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LesPrivateMahasiswaList;
