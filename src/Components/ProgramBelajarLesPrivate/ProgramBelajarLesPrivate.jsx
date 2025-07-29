import React from "react";
import "./ProgramBelajarLesPrivate.css";

const programs = [
  { image: "/images/program-belajar/TK.webp" },
  { image: "/images/program-belajar/SD.webp" },
  { image: "/images/program-belajar/SMP.webp" },
  { image: "/images/program-belajar/SMA.webp" },
  { image: "/images/program-belajar/AK.webp" },
  { image: "/images/program-belajar/SNBT.webp" },
  { image: "/images/program-belajar/SIMAK-UI.webp" },
  { image: "/images/program-belajar/MAHASISWA.webp" },
  { image: "/images/program-belajar/BAHASA.webp" },
  { image: "/images/program-belajar/MENGAJI.webp" },
  { image: "/images/program-belajar/KOMPUTER.webp" },
  { image: "/images/program-belajar/TOEFL.webp" },
];

const ProgramBelajarLesPrivat = () => {
  return (
    <div className="programBelajar-section">
      <h2 className="programBelajar-title">
        Les Privat Online (Indonesia) & Les Privat Offline (Jabodetabek)
      </h2>
      <p className="programBelajar-description">
        Program Les Privat terdiri dari <strong>Les Privat Online</strong> dan{" "}
        <strong>Les Privat Offline</strong>. Untuk siswa dari berbagai kota di
        seluruh Indonesia yang memiliki akses jaringan internet yang baik, bisa
        memilih les privat online. Bagi siswa yang berdomisili di Jabodetabek
        dapat memilih les privat offline atau guru ke rumah. Berikut adalah
        Program Online dan Offline dari Matrix:
      </p>
      <div className="programBelajar-les-privat">
        {programs.map((program, index) => (
          <div className="programBelajar-card" key={index}>
            <img
              loading="lazy"
              src={program.image}
              alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramBelajarLesPrivat;
