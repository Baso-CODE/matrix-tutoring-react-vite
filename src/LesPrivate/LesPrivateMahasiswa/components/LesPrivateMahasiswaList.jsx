// LesPrivateMahasiswaList.js
import { FaCheckCircle } from "react-icons/fa";
import "./LesPrivateMahasiswaList.css";

const LesPrivateMahasiswaList = () => {
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
    "Dan mata kuliah lainnya yang belum terdaftar.",
  ];

  return (
    <section className="container-list-les-mahasiswa">
      <div className="les-private-mahasiswa-list-container">
        <h2>
          Pilihan Mata Kuliah Lengkap - Program Les Privat Mahasiswa Matrix
          Tutoring
        </h2>
        <p>
          Di Matrix Tutoring, mahasiswa dapat memilih pendampingan belajar untuk
          berbagai mata kulia mulai dari mata kuliah dasar umum hingga mata
          kuliah jurusan yang lebih spesifik. Berikut daftar mata kuliah untuk
          Program Les Privat Mahasiswa:
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
