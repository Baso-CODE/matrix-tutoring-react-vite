import React from "react";
import "./ProgramLesPrivate.css";

const ProgramLesPrivat = () => {
  return (
    <div className="program-les-privat-container">
      <h2 className="program-title">Program Les Privat</h2>
      <div className="programs-les-private">
        <div className="program-les-private">
          <div className="feature-header-les-private">
            <img
              loading="lazy"
              className="icon-program__mtx"
              src="/images/program/reguler.webp"
              alt="Ikon Buku"
            />
            <h3>Regular</h3>
          </div>
          <p>
            Paket Regular yaitu program les privat untuk siswa dengan Kurikulum
            Nasional.Program ini memberikan bimbingan yang komprehensif dalam
            berbagai mata pelajaran inti seperti Matematika, Bahasa Indonesia,
            dan Ilmu Pengetahuan. Dengan metode pengajaran yang sesuai dengan
            kebutuhan siswa, paket ini cocok untuk siswa yang ingin memperdalam
            pemahaman dan meningkatkan nilai akademik mereka di sekolah.
          </p>
        </div>
        <div className="program-les-private">
          <div className="feature-header-les-private">
            <img
              loading="lazy"
              className="icon-program__mtx"
              src="/images/program/toga.webp"
              alt="Ikon Buku"
            />
            <h3>Bilingual</h3>
          </div>
          <p>
            Paket Bilingual yaitu program les privat untuk siswa dengan
            Kurikulum Nasional Plus. Program ini bertujuan untuk membantu siswa
            meningkatkan keterampilan akademik dan memperkuat kemampuan
            berbahasa Inggris, baik pemahaman konsep maupun percakapan
            sehari-hari. Paket ini cocok bagi siswa yang ingin berprestasi di
            lingkungan pendidikan bilingual.
          </p>
        </div>
        <div className="program-les-private">
          <div className="feature-header-les-private">
            <img
              loading="lazy"
              className="icon-program__mtx"
              src="/images/program/diamond.webp"
              alt="Ikon Buku"
            />
            <h3>Platinum</h3>
          </div>
          <p>
            Paket Platinum yaitu program les privat untuk siswa dari
            International School dan Expatriates. Program ini memberikan
            bimbingan akademik yang mendalam dalam berbagai mata pelajaran
            dengan menggunakan kurikulum internasional, seperti Cambridge atau
            IB. Dengan fokus pada pemahaman global dan kemampuan berpikir
            kritis, paket ini menawarkan pendekatan yang dipersonalisasi untuk
            memenuhi kebutuhan belajar siswa di tingkat internasional.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramLesPrivat;
