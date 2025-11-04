import "./TutorLesprivatMatrix.css";
const TutorLesprivatMatrix = ({ location }) => {
  const universities = [
    {
      name: "Universitas Indonesia",
      logo: "/images/logo-univ/universitas-indonesia.webp",
    },
    {
      name: "Institut Teknologi Bandung",
      logo: "/images/logo-univ/institut_teknologi_bandung.webp",
    },
    {
      name: "Universitas Gadjah Mada",
      logo: "/images/logo-univ/UNIVERSITAS_GADJAH_MADA,_YOGYAKARTA.webp",
    },
    {
      name: "Institut Pertanian Bogor",
      logo: "/images/logo-univ/institut-pertanian-bogor.webp",
    },
    {
      name: "Universitas Airlangga",
      logo: "/images/logo-univ/universitas-airlangga.webp",
    },
    {
      name: "Universitas Diponegoro",
      logo: "/images/logo-univ/universitas-diponegoro.webp",
    },
    {
      name: "Universitas Brawijaya",
      logo: "/images/logo-univ/universitas_brawijaya.webp",
    },
    {
      name: "Universitas Hasanuddin",
      logo: "/images/logo-univ/universitas-hasanuddin.webp",
    },
    {
      name: "Institut Teknologi Sepuluh Nopember",
      logo: "/images/logo-univ/institut_teknologi_sepuluh_nopember.webp",
    },
    {
      name: "Universitas Padjajaran",
      logo: "/images/logo-univ/universitas-padjajaran.webp",
    },
    {
      name: "Universitas Jenderal Soedirman",
      logo: "/images/logo-univ/universitas-jendral-soedirman.webp",
    },
    {
      name: "Universitas Negeri Jakarta",
      logo: "/images/logo-univ/universitas-negri-jakarta.webp",
    },
    {
      name: "Universitas Sebelas Maret Surakarta",
      logo: "/images/logo-univ/universitas-sebelas-maret-surakarta.webp",
    },
    {
      name: "Universitas Islam Negeri Jakarta",
      logo: "/images/logo-univ/universitas-islam-negri-jakarta.webp",
    },
    {
      name: "AL Azhar University, Cairo",
      logo: "/images/logo-univ/al-azhar-cairo.webp",
    },
  ];
  return (
    <div className="tutor__section">
      <h2 className="tutor__title">
        Guru Les Privat Matrix dari Perguruan Tinggi Terbaik di Indonesia
      </h2>
      <div className="container__tutor-description">
        <p className="tutor__description">
          Pengajar Matrix Tutoring adalah dosen, asisten dosen, guru, mahasiswa
          ,dan alumni dari UI, UGM, ITB, IPB, STAN, STIS, UNJ, dan berbagai
          Perguruan Tinggi lainnya yang telah memiliki pengalaman, diseleksi
          secara ketat, dilatih dan diarahkan mengajar sesuai dengan
          spesialisasi dalam bidang ilmu yang dikuasai.
        </p>
      </div>
      <div className="tutor__grid">
        {universities.map((univ, idx) => (
          <div className="tutor__card" key={idx}>
            <img
              src={univ.logo}
              alt={`Pengajar Les Privat Offline & Online dari ${univ.name} di ${
                location ? `${location}` : "Indonesia"
              }`}
              className="tutor__logo"
            />
            <p className="tutor__card-title">{univ.name}</p>
            <div className="tutor__go-corner">
              <div className="tutor__go-arrow">→</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorLesprivatMatrix;
