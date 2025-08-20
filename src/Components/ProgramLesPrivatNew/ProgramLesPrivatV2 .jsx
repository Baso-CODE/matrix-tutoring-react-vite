import "./ProgramLesPrivatV2.css";

const ProgramLesPrivatV2 = () => {
  return (
    <div className="container-all">
      <div className="program-container-v2">
        <div className="program-header-v2">
          <h2 className="program-title-v2">Program Les Privat</h2>
          <p className="program-description-v2">
            Matrix Tutoring memberikan layanan pendidikan terbaik bagi siswa
            dari Sekolah Nasional dan Internasional, dengan pendekatan
            pembelajaran yang interaktif, personal, dan berbasis kurikulum
            global. Kami mendukung prestasi akademik dan pengembangan potensi
            siswa melalui program bimbingan yang fleksibel, tutor berpengalaman,
            serta metode belajar yang disesuaikan dengan kebutuhan individu.
            Berikut adalah Program Berdasarkan Bahasa Pengantar yang digunakan
            dalam Kegiatan Belajar Mengajar
          </p>
        </div>

        <div className="program-cards-v2">
          {/* Kartu REGULAR */}
          <div className="card-v2">
            <img
              src="/images/program/reguler.webp"
              alt="Regular Icon"
              className="card-icon-v2"
            />
            <h3 className="card-title-v2">REGULAR</h3>
            <p className="card-description-v2">
              Paket Regular yaitu program les privat untuk siswa dengan
              Kurikulum Nasional
            </p>
          </div>

          {/* Kartu BILINGUAL */}
          <div className="card-v2">
            <img
              src="/images/program/toga.webp"
              alt="Bilingual Icon"
              className="card-icon-v2"
            />
            <h3 className="card-title-v2">BILINGUAL</h3>
            <p className="card-description-v2">
              Paket Bilingual yaitu program les privat untuk siswa dengan
              Kurikulum Nasional Plus
            </p>
          </div>

          {/* Kartu PLATINUM */}
          <div className="card-v2">
            <img
              src="/images/program/diamond.webp"
              alt="Platinum Icon"
              className="card-icon-v2"
            />
            <h3 className="card-title-v2">PLATINUM</h3>
            <p className="card-description-v2">
              Paket Platinum yaitu program les privat untuk siswa dari
              International School dan Expatriates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramLesPrivatV2;
