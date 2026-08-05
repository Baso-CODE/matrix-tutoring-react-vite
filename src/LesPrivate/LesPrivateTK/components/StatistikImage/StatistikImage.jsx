import { Link } from "react-router-dom";
import { handleCsWhatsAppClick } from "../../../../helper/csRotationHelper";
import "./StatistikImage.css"; // Import file CSS terpisah

const stats = [
  {
    image: "/images/les-private/tk/statistic/keterampilan.webp",
    title: "Peningkatan Keterampilan",
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

export default StatistikImage;
