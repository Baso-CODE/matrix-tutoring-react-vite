import "./FiturProgramNew.css";

const FiturProgramNew = () => {
  const featuresData = [
    {
      id: 1,
      title: "Program Lengkap",
      description:
        "MATRIX siap melayani program les privat TK, SD, SMP, SMA, TKA, OSN, UTBK SNBT, Simak UI, Ujian Mandiri, TOEFL/IELTS, CPNS, Kedinasan, Privat Mahasiswa (Kurikulum Nasional & Internasional), Privat Komputer, Mengaji, dan Program Bahasa untuk semua jenjang.",
      image: "/images/fitur-program-home/program-lengkap.webp",
      alt: "Icon Program Lengkap",
    },
    {
      id: 2,
      title: "Pengajar Berkualitas",
      description:
        "MATRIX menggirimkan pengajar yang ahli di bidangnya. Pengajar kami adalah dosen, asisten dosen, guru, mahasiswa berprestasi dan alumni dari UI, ITB, UGM, dan Perguruan Tinggi terbaik lainnya.",
      image: "/images/fitur-program-home/pengajar-berkualitas.webp",
      alt: "Icon Pengajar Berkualitas",
    },
    {
      id: 3,
      title: "Smart Methode",
      description:
        "MATRIX fokus pada tujuan akademik (academic goal), membangun konsep diri (self esteem), dan meningkatkan kemandirian siswa sebagai seorang pembelajar (independence as a learner) secara komprehensif.",
      image: "/images/fitur-program-home/smart-methode.webp",
      alt: "Icon Smart Methode",
    },
    {
      id: 4,
      title: "Kurikulum Personal",
      description:
        "Kurikulum disesuaikan dengan kebutuhan siswa. Kami siap melayani program Nasional(Kurikulum Merdeka, Kurikulum 2013), Nasional Plus, Internasional (IB, Cambridge, Singapore) dan Program Bahasa untuk semua jenjang.",
      image: "/images/fitur-program-home/kurikulum-personal.webp",
      alt: "Icon Kurikulum Personal",
    },
    {
      id: 5,
      title: "Intensive Quiz",
      description:
        "Setiap siswa akan mendapatkan Intensive Quiz dalam setiap program belajar. Tutor akan membantu Siswa menemukan cara belajar efektif, fun dan selalu bersemangat dalam belajar.",
      image: "/images/fitur-program-home/intensive-quiz.webp",
      alt: "Icon Intensive Quiz",
    },
    {
      id: 6,
      title: "Quality Control",
      description:
        "MATRIX berorientasi pada kualitas terbaik dalam setiap pekerjaan. Program, sistem belajar, dan tutor dikelola secara optimal untuk mencapai hasil maksimal. Selain itu, tim Customer Service (Admin) kami selalu responsif, solutif, dan cepat tanggap dalam membantu setiap kebutuhan klien, sehingga proses belajar berjalan lancar dan nyaman.",
      image: "/images/fitur-program-home/quality-control.webp",
      alt: "Icon Quality Control",
    },
  ];

  return (
    <section className="features-section-v2">
      <div className="container-all">
        <div className="features-container-v2">
          <div className="features-header-v2">
            <h2 className="features-title-v2">Keunggulan Matrix Tutoring</h2>
          </div>

          <div className="features-grid-v2">
            {featuresData.map((feature) => (
              <div key={feature.id} className="feature-card-v2">
                <div className="feature-content-v2">
                  <div className="feature-card-header-v2">
                    <div className="feature-number-v2">{feature.id}</div>
                    <h3 className="feature-title-v2">{feature.title}</h3>
                  </div>
                  <p className="feature-description-v2">
                    {feature.description}
                  </p>
                </div>
                <div className="feature-image-v2">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="feature-img-v2"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiturProgramNew;
