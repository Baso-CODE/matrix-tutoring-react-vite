const stats = [
  {
    image: "/images/les-private/sma/statistic/kenaikan-skor.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Jalur Menuju PTN Impian",
    description:
      "Bimbingan kami mengantar siswa berhasil diterima di Perguruan Tinggi Negeri dan jurusan pilihan melalui jalur SBMPTN.",
  },
  {
    image: "/images/les-private/sma/statistic/siswa-sukses.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Penguasaan Materi SBMPTN",
    description:
      "Pemahaman mendalam pada materi-materi kunci TPA, Saintek, dan Soshum yang krusial untuk SBMPTN.",
  },
  {
    image: "/images/les-private/sma/statistic/lolos-ptn.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Strategi & Taktik Jitu SBMPTN",
    description:
      "Siswa dibekali strategi pengerjaan soal yang efektif dan efisien untuk memaksimalkan skor di setiap sesi SBMPTN.",
  },
  {
    image: "/images/les-private/sma/statistic/penguasaan-materi.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Kesiapan Mental & Fisik",
    description:
      "Program kami tidak hanya fokus pada akademik, tetapi juga membangun kepercayaan diri dan ketahanan mental siswa menghadapi SBMPTN.",
  },
];

const StatistikImageSBMPTN = () => {
  return (
    <section id="sbmptn-success-statistics" className="statistik-image-section">
      {" "}
      {/* ID Section diubah */}
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat SBMPTN Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak nyata bimbingan kami dalam membantu siswa meraih kursi di
          Perguruan Tinggi Negeri impian melalui jalur SBMPTN.
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

export default StatistikImageSBMPTN;
