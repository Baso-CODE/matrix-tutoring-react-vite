const stats = [
  {
    image:
      "/images/les-private/bahasa-asing/statistic/kefasihan-berbahasa.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Peningkatan Kefasihan Berbicara",
    description:
      "Rata-rata peningkatan skor dalam kemampuan berbicara (speaking) dan kelancaran komunikasi siswa kami.",
  },
  {
    image: "/images/les-private/bahasa-asing/statistic/sertifikasi.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Keberhasilan Ujian Sertifikasi",
    description:
      "Persentase siswa yang berhasil mencapai skor target di ujian seperti TOEFL, IELTS, HSK, JLPT, DELF, dll.",
  },
  {
    image: "/images/les-private/bahasa-asing/statistic/percaya-diri.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Peningkatan Percaya Diri",
    description:
      "Tingkat kepercayaan diri siswa dalam berkomunikasi dan berinteraksi menggunakan bahasa asing.",
  },
  {
    image: "/images/les-private/bahasa-asing/statistic/kosa-kata.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Penguasaan Kosakata & Tata Bahasa",
    description:
      "Tingkat pemahaman mendalam siswa terhadap struktur bahasa, tata bahasa, dan perluasan kosakata.",
  },
];

const StatistikImageBahasa = () => {
  return (
    <section id="bahasa-success-statistics" className="statistik-image-section">
      {" "}
      {/* ID Section diubah */}
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat Bahasa Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak Nyata Bimbingan Les Privat Bahasa untuk Menguasai Bahasa Baru
          dan Raih Impian Global.
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

export default StatistikImageBahasa;
