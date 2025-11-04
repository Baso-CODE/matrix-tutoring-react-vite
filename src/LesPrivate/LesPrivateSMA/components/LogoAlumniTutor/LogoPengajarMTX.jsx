import "./LogoPengajarMTX.css";

const LogoPengajarMTX = ({ title }) => {
  const universities = [
    { logo: "/images/logo-univ/universitas-indonesia.webp" },
    { logo: "/images/logo-univ/institut_teknologi_bandung.webp" },
    { logo: "/images/logo-univ/UNIVERSITAS_GADJAH_MADA,_YOGYAKARTA.webp" },
    { logo: "/images/logo-univ/institut-pertanian-bogor.webp" },
    { logo: "/images/logo-univ/universitas-airlangga.webp" },
    { logo: "/images/logo-univ/universitas-diponegoro.webp" },
    { logo: "/images/logo-univ/brawijaya-logo.webp" },
    { logo: "/images/logo-univ/universitas-hasanuddin.webp" },
    { logo: "/images/logo-univ/institut_teknologi_sepuluh_nopember.webp" },
    { logo: "/images/logo-univ/universitas-padjajaran.webp" },
    { logo: "/images/logo-univ/universitas-jendral-soedirman.webp" },
    { logo: "/images/logo-univ/universitas-negri-jakarta.webp" },
    { logo: "/images/logo-univ/universitas-sebelas-maret-surakarta.webp" },
    { logo: "/images/logo-univ/universitas-islam-negri-jakarta.webp" },
    { logo: "/images/logo-univ/al-azhar-cairo.webp" },
    { logo: "/images/logo-univ/logo-telkom-university.webp" },
    { logo: "/images/logo-univ/logo-bina-nusantara-university.webp" },
    { logo: "/images/logo-univ/logo-universitas-islam-indonesia.webp" },
  ];
  return (
    <>
      <section className="container__logo-pengajar">
        <h3>{title}</h3>
        <p>
          Matrix percaya bahwa guru yang baik bukan hanya sekadar pintar, tetapi
          juga paham bagaimana membimbing siswa agar lebih fokus, percaya diri,
          dan siap menghadapi berbagai ujian penting.
        </p>
        <p>
          Pengajar Matrix Tutoring berasal dari alumni dan mahasiswa dari UI,
          UGM, ITB, IPB, STAN, STIS, UNJ, dan Perguruan Tinggi lainnya. Selain
          itu, terdapat beberapa dosen, guru sekolah, dan asisten dosen
          berpengalaman yang menjadi bagian dari guru privat Matrix Tutoring.
          Para pengajar kami telah diseleksi secara ketat, dilatih, dan
          ditugaskan sesuai dengan bidang keahliannya. Guru Privat Matrix bukan
          hanya pintar, tetapi juga paham bagaimana membuat anak merasa nyaman
          belajar.
        </p>
        <p>
          Selain itu, jika siswa atau orangtua merasa kurang cocok dengan tutor,
          cukup infokan kepada admin untuk segera dicarikan pengganti yang lebih
          sesuai.
        </p>
      </section>
      <div className="container__logo-pengajar-icon">
        <div className="university-logo-pengajar">
          {universities.map((univ, index) => (
            <div key={index} className="university-logo-pengajar">
              <img
                src={univ.logo}
                alt={`Universitas ${index + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoPengajarMTX;
