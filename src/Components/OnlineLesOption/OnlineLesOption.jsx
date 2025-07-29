import React from "react";
import "./OnlineLesOption.css";

const OnlineLesOptions = () => {
  return (
    <div className="online-les-options">
      <div className="title-description-online-les-option">
        <h2>Saat Ini, Matrix Juga Melayani Les Privat Online</h2>
        <p>
          Les Privat Online - Belajar dimana saja, kapan saja dengan kualitas
          dan layanan yang sama
        </p>
      </div>
      <div className="options">
        <div className="online-les-option">
          <img
            loading="lazy"
            src="/images/learnhing-methode/zoom.webp"
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            width="600"
            height="600"
          />
        </div>
        <div className="online-les-option">
          <img
            loading="lazy"
            src="/images/learnhing-methode/google-meet.webp"
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            width="600"
            height="600"
          />
        </div>
        <div className="online-les-option">
          <img
            loading="lazy"
            src="/images/learnhing-methode/whatsapp.webp"
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            width="600"
            height="600"
          />
        </div>
      </div>
    </div>
  );
};

export default OnlineLesOptions;
