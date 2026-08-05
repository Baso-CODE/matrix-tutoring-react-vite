import { Link } from "react-router-dom";
import { handleCsWhatsAppClick } from "../../../helper/csRotationHelper";

const stats = [
  {
    image: "/images/les-private/simak-ui/statistic/penguasaan-konsep.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Penguasaan Konsep Esensial", // Diubah dari "Rata-rata Kenaikan Skor"
    description:
      "Siswa kami mencapai pemahaman mendalam terhadap materi-materi kunci yang diujikan dalam SIMAK UI.", // Deskripsi disesuaikan
  },
  {
    image: "/images/les-private/simak-ui/statistic/latihan-soal.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Latihan Soal Komprehensif", // Diubah dari "Ribuan Soal Terlatih"
    description:
      "Siswa kami dibekali dengan berbagai jenis soal latihan dan pembahasan mendalam dari setiap subtes SIMAK UI.", // Deskripsi disesuaikan
  },
  {
    image: "/images/les-private/simak-ui/statistic/jalur-menuju.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Jalur Menuju Universitas Indonesia", // Diubah dari "Persentase Lolos UI"
    description:
      "Banyak siswa kami berhasil meraih impian mereka untuk diterima di berbagai fakultas dan jurusan favorit Universitas Indonesia.", // Deskripsi disesuaikan
  },
  {
    image: "/images/les-private/simak-ui/statistic/kesiapan-ujian.webp", // Ganti dengan gambar yang lebih relevan jika ada
    title: "Kesiapan Ujian Optimal", // Diubah dari "Simulasi Try Out Berkala"
    description:
      "Melalui simulasi ujian yang akurat, siswa kami terlatih untuk menghadapi tekanan dan strategi pengerjaan SIMAK UI.", // Deskripsi disesuaikan
  },
];

const StatistikImageSimakUI = () => {
  return (
    <section
      id="simak-ui-success-statistics"
      className="statistik-image-section">
      {" "}
      {/* ID Section diubah */}
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat SIMAK UI Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak positif dan pencapaian siswa kami dalam meraih impian masuk
          Universitas Indonesia.
        </p>

        <div className="statistik-cards-grid">
          {stats.map((item, index) => (
            <div key={index} className="card">
              <img
                src={item.image}
                alt={item.title}
                className="card__image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/300x200/cccccc/333333?text=No+Image";
                }}
              />
              <div className="card__content">
                <p className="card__title">{item.title}</p>
                <p className="card__description">{item.description}</p>
                <Link onClick={() => handleCsWhatsAppClick()}>
                  <button className="card__button">Detail</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatistikImageSimakUI;
