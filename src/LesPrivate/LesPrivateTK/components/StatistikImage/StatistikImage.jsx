import "./StatistikImage.css"; // Import file CSS terpisah

const stats = [
  {
    image: "/images/les-private/tk/statistic/keterampilan.webp",
    title: "Peningkatan Keterampilan", // Menggunakan 'title' untuk judul kartu
    description:
      "Persentase siswa yang menunjukkan peningkatan signifikan dalam membaca, menulis, dan berhitung.",
  },
  {
    image: "/images/les-private/tk/statistic/percaya-diri.webp",
    title: "Peningkatan Percaya Diri",
    description:
      "Tingkat kepercayaan diri dan antusiasme belajar siswa setelah mengikuti program kami.",
  },
  {
    image: "/images/les-private/tk/statistic/kesiapan.webp",
    title: "Kesiapan Menuju SD",
    description:
      "Persentase siswa yang siap sepenuhnya untuk melanjutkan pendidikan ke jenjang Sekolah Dasar.",
  },
  {
    image: "/images/les-private/tk/statistic/berprestasi.webp",
    title: "Anak Berprestasi",
    description:
      "Jumlah anak-anak usia TK yang telah kami bantu mencapai potensi terbaiknya.",
  },
];

const StatistikImage = () => {
  return (
    <section id="tk-learning-materials" className="statistik-image-section">
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Statistik Keberhasilan Les Privat TK Kami
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

export default StatistikImage;
