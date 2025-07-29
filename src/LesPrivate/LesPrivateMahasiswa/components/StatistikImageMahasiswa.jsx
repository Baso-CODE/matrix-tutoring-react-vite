const stats = [
  {
    image: "/images/les-private/sma/statistic/lolos-ptn.webp", // Ganti dengan gambar yang lebih relevan jika ada, atau gunakan placeholder generik
    title: "Peningkatan IPK Signifikan",
    description:
      "Rata-rata peningkatan Indeks Prestasi Kumulatif (IPK) mahasiswa setelah mengikuti bimbingan kami di mata kuliah sulit.",
  },
  {
    image:
      "/images/les-private/mahasiswa/statistic/penguasaan-mata-kuliah.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Penguasaan Mata Kuliah Sulit",
    description:
      "Persentase mahasiswa yang berhasil menguasai konsep-konsep kompleks di mata kuliah yang sebelumnya menantang.",
  },
  {
    image:
      "/images/les-private/mahasiswa/statistic/keberhasilan-tugas-proyek.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Keberhasilan Tugas & Proyek",
    description:
      "Jumlah mahasiswa yang sukses menyelesaikan tugas besar, proyek akhir, atau skripsi dengan nilai memuaskan.",
  },
  {
    image: "/images/les-private/mahasiswa/statistic/lulus-tepat-waktu.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Siswa Lulus Tepat Waktu",
    description:
      "Dukungan kami membantu mahasiswa menjaga performa akademik agar dapat menyelesaikan studi dan lulus sesuai target waktu.",
  },
];

const StatistikImageMahasiswa = () => {
  return (
    <section
      id="mahasiswa-success-statistics"
      className="statistik-image-section">
      {" "}
      {/* ID Section diubah */}
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat Mahasiswa Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak Nyata Bimbingan Les Privat Mahasiswa untuk Raih IPK Impian dan
          Lulus Gemilang.
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

export default StatistikImageMahasiswa;
