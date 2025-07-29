// LesPrivateSimakUIList.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./LesPrivateSimakUIList.css";

const LesPrivateSimakUIList = () => {
  const subjects = [
    "Rekomendasi Strategi Belajar Efektif Simak UI",
    "Rekomendasi Bahan Ajar: Buku Simak UI dan buku penunjang lain yang sesuai",
    "Sistem belajar sesuai Statistik Soal Simak UI tahun-tahun sebelumnya",
    "Tips dan Trik pengerjaan soal Simak UI",
    "Rekomendasi Strategi Pemilihan Jurusan Simak UI",
  ];

  return (
    <div className="les-private-UI-list-container">
      <h2>
        Hal-hal apa saja yang menjadikan Program Privat Simak UI dari Les Privat
        Matrix dapat dijadikan pertimbangan sebagai pilihan terbaik untuk
        Ananda:
      </h2>
      <ul className="subject-list-les-private-UI">
        {subjects.map((subject, index) => (
          <li key={index} className="subject-list-les-private-UI-item">
            <FaCheckCircle className="subject-list-les-private-UI-icon" />
            <span className="subject-text">{subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LesPrivateSimakUIList;
