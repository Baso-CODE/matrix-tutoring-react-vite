const stats = [
  {
    image: "/images/les-private/sd/statistic/rapor.webp",
    title: "Peningkatan Rapor",
    description:
      "Rata-rata kenaikan nilai rapor siswa di mata pelajaran utama.",
  },
  {
    image: "/images/les-private/sd/statistic/minat-belajar.webp",
    title: "Peningkatan Minat Belajar",
    description:
      "Persentase siswa yang menunjukkan peningkatan minat dan kemandirian dalam belajar.",
  },
  {
    image: "/images/les-private/sd/statistic/berprestasi.webp",
    title: "Siswa Berprestasi",
    description:
      "Jumlah siswa SD yang telah kami bimbing mencapai target akademik mereka.",
  },
  {
    image: "/images/les-private/sd/statistic/pemahaman-konsep.webp",
    title: "Pemahaman Konsep",
    description:
      "Siswa mampu memahami konsep dasar pelajaran dengan lebih baik.",
  },
];

const StatistikImageSD = () => {
  return (
    <section id="sd-statistic" className="statistik-image-section">
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat SD Kami
        </h2>
        <p className="statistik-image-subtitle">
          Melihat dampak positif yang kami ciptakan pada perkembangan anak usia
          dini.
        </p>

        <div className="statistik-cards-grid">
          {stats.map((item, index) => (
            <div key={index} className="statistik-card">
              <img
                src={item.image}
                alt={item.title}
                className="statistik-card-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/80x80/cccccc/333333?text=Icon";
                }}
                loading="lazy"
              />
              <h3 className="statistik-card-title">{item.title}</h3>
              <p className="statistik-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikImageSD;
