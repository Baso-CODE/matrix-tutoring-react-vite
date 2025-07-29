// KeunggulanLesPrivateSimakUIList.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./KeunggulanLesPrivateSimakUIList.css";

const KeunggulanLesPrivateSimakUIList = () => {
  const subjects = [
    "Menggunakan sistem belajar Matrix terpola dan terstruktur disesuaikan dengan kurikulum sekolah dan kebutuhan belajar siswa.",
    "Jadwal yang fleksibel disesuaikan dengan kebutuhan Anda. Rekomendasi prioritas mapel les privat dan rekomendasi pertemuan agar efektif dalam belajar.",
    "Pemahaman konsep, pendalaman materi dan peningkatan keterampilan penyelesaian soal",
    "Sistem evaluasi secara berkala untuk mengetahui perkembangan siswa",
    "Tutor Mahasiswa dan Alumni UI dan PTN lain yang berpengalaman & ahli di bidangnya.",
    "Matrix selalu berorientasi pada target dan peningkatan prestasi siswa",
    "Kemudahan Pembayaran via transfer",
  ];

  return (
    <div className="keunggulan-les-private-UI-list-container">
      <h2>Keunggulan Les Privat Matrix</h2>
      <ul className="keunggulan-subject-list-les-private-UI">
        {subjects.map((subject, index) => (
          <li
            key={index}
            className="keunggulan-subject-list-les-private-UI-item">
            <FaCheckCircle className="keunggulan-subject-list-les-private-UI-icon" />
            <span className="subject-text">{subject}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeunggulanLesPrivateSimakUIList;
