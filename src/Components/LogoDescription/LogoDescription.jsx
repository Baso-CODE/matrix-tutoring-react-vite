import React from "react";
import "./LogoDescription.css";

const LogoDescriptionComponent = () => {
  return (
    <div className="logo-description-container">
      <img
        src={"/images/logo.webp"}
        loading="lazy"
        alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
        className="logo-image"
        width="700"
        height="324"
      />
      <div className="description-text">
        <p>
          <strong>Matrix Tutoring</strong> adalah lembaga penyedia layanan jasa
          les privat untuk TK, SD, SMP, SMA, UN/AKM, OSN, Simak UI, SNBT, Akpol,
          Mahasiswa dan Karyawan.
        </p>
        <p>
          Matrix menyediakan Program <strong>Les Privat Offline</strong> (guru
          les datang ke rumah) dan <strong>Les Privat Online</strong> dengan
          spesialisasi pengajaran berdasarkan keahlian tutor. Konsep
          pembelajaran sesuai dengan kurikulum yang diterapkan sekolah siswa.
        </p>

        <p>
          <strong>Pengajar Les Privat MATRIX</strong> adalah dosen, asisten
          dosen, guru, mahasiswa berprestasi dan alumni UI, UGM, ITB, IPB, STAN,
          STIS, UNJ, SSE, UIN dan berbagai Perguruan Tinggi terbaik lainnya yang
          telah memiliki pengalaman, diseleksi, dilatih dan diarahkan mengajar
          sesuai dengan spesialisasi dalam bidang ilmu yang dikuasai.
        </p>
      </div>
    </div>
  );
};

export default LogoDescriptionComponent;
