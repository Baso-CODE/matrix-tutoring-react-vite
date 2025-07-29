import React from "react";
import "./PengajarLestPrivate.css";

const PengajarLestPrivate = () => {
  return (
    <div className="text-with-image-container">
      {/* <p className="centered-text">
        Pengajar Les Privat MATRIX adalah dosen, asisten dosen, guru, mahasiswa
        berprestasi dan alumni UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan
        berbagai Perguruan Tinggi terbaik lainnya yang telah memiliki
        pengalaman, diseleksi, dilatih dan diarahkan mengajar sesuai dengan
        spesialisasi dalam bidang ilmu yang dikuasai.
      </p> */}
      <div className="centered-image">
        <img
          loading="lazy"
          src="/images/pengajar.webp"
          alt="Perguruan Tinggi Loles privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          width="1859"
          height="842"
        />
      </div>
    </div>
  );
};

export default PengajarLestPrivate;
