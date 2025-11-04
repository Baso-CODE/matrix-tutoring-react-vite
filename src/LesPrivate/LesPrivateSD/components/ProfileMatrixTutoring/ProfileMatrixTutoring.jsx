import "./ProfileMatrixTutoring.css";

const ProfileMatrixTutoring = ({ title, location }) => {
  return (
    <section className="profile-matrix__section">
      <div className="profile-matrix__container">
        {/* Left Side - Image */}
        <div className="profile-matrix__image-wrapper">
          <img
            src="/images/KECAMATAN.png"
            alt={`Matrix Tutoring Profile - Lembaga Profesional Penyedia Layanan Les Privat ${title} ${
              location ? `di ${location}` : "Indonesia"
            } - Matrix Tutoring`}
            className="profile-matrix__image"
            loading="lazy"
          />
        </div>

        {/* Right Side - Content */}
        <div className="profile-matrix__content">
          <h2 className="profile-matrix__title">
            Matrix Tutoring – Lembaga Profesional Penyedia Layanan Les Privat{" "}
            {title}
          </h2>

          <p className="profile-matrix__description">
            Matrix Tutoring adalah lembaga profesional penyedia layanan les
            privat berkualitas untuk Calistung/TK, SD, SMP, SMA, OSN, SNBT,
            Simak UI, CPNS, TNI-POLRI, LPDP, IELTS, TOEFL, Mahasiswa dan
            Karyawan.
          </p>

          <div className="profile-matrix__methods">
            <h3 className="profile-matrix__subtitle">Metode Pembelajaran:</h3>
            <ul className="checklist_profile_matrix">
              <li>
                <b>Les Privat Offline:</b> guru les privat datang langsung ke
                rumah Anda sesuai jadwal yang disepakati bersama.
              </li>
              <li>
                <b>Les Privat Online:</b> belajar jarak jauh secara interaktif
                dengan platform Zoom, Google Meet, dan lainnya.
              </li>
            </ul>
          </div>

          <p className="profile-matrix__note">
            Semua program didesain untuk menyesuaikan dengan kurikulum sekolah
            dan gaya belajar siswa, baik <b>nasional maupun internasional</b>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileMatrixTutoring;
