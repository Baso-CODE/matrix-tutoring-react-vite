const stats = [
  {
    image: "/images/les-private/sma/statistic/lolos-ptn.webp", // Gambar bisa tetap sama jika relevan secara visual
    title: "Lolos PTN Impian Siswa",
    description:
      "Persentase siswa yang berhasil mengamankan kursi di Perguruan Tinggi Negeri dan jurusan favorit melalui jalur TKA/UTBK.",
  },
  {
    image: "/images/les-private/ksm/statistic/kenaikan-skor.webp",
    title: "Rata-rata Kenaikan Skor",
    description:
      "Peningkatan signifikan pada skor Literasi, Numerasi, dan Penalaran siswa setelah bimbingan intensif TKA kami.",
  },
  {
    image: "/images/les-private/ksm/statistic/target-nilai.webp", // Gambar bisa tetap sama jika relevan secara visual
    title: "Pencapaian Target Nilai",
    description:
      "Jumlah siswa yang berhasil mencapai atau melampaui target nilai TKA/UTBK yang ditetapkan untuk jurusan pilihan mereka.",
  },
  {
    image: "/images/les-private/ksm/statistic/penguasaan-materi.webp",
    title: "Penguasaan Materi TKA",
    description:
      "Tingkat pemahaman mendalam siswa terhadap subtes Literasi, Numerasi, dan Penalaran dalam Tes Kompetensi Akademik.",
  },
];

const StatistikImageTKA = () => {
  return (
    <section id="tka-success-statistics" className="statistik-image-section">
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat TKA Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak Nyata Bimbingan Les Privat TKA untuk Lolos PTN Impian Anda.
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

export default StatistikImageTKA;
