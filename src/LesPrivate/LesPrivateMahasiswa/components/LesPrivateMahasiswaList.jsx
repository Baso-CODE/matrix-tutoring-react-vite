// LesPrivateMahasiswaList.js
import React from "react";
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
    <div className="les-private-mahasiswa-list-container">
      <h2>
        Kami melayani les privat datang ke rumah dan les privat online untuk
        mahasiswa seluruh Indonesia. Berikut beberapa mata kuliah yang dapat
        kami upayakan tutornya:
      </h2>
      <ul className="subject-list-les-private-mahasiswa">
        {subjects.map((subject, index) => (
          <li key={index} className="subject-list-les-private-mahasiswa-item">
            <FaCheckCircle className="subject-list-les-private-mahasiswa-icon" />
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesPrivateMahasiswaList;
