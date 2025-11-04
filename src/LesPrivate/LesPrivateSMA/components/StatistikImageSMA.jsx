import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";

const stats = [
  {
    image: "/images/les-private/sma/statistic/lolos-ptn.webp",
    title: "Lolos PTN Favorit",
    description:
      "Persentase siswa yang berhasil diterima di Perguruan Tinggi Negeri dan jurusan impian.",
  },
  {
    image: "/images/les-private/sma/statistic/kenaikan-skor.webp",
    title: "Kenaikan Skor UTBK",
    description:
      "Rata-rata peningkatan skor UTBK/SNBT siswa setelah bimbingan intensif kami.",
  },
  {
    image: "/images/les-private/sma/statistic/siswa-sukses.webp",
    title: "Siswa Sukses",
    description:
      "Jumlah siswa SMA yang telah kami antarkan menuju kesuksesan akademik dan masa depan cerah.",
  },
  {
    image: "/images/les-private/sma/statistic/penguasaan-materi.webp",
    title: "Penguasaan Materi",
    description:
      "Tingkat penguasaan materi pelajaran yang kompleks dan strategi hadapi ujian akhir.",
  },
];

const StatistikImageSMA = () => {
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <section id="tk-learning-materials" className="statistik-image-section">
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat SMA Kami
        </h2>
        <p className="statistik-image-subtitle">
          Dampak positif dan pencapaian siswa kami dalam meraih keunggulan
          akademik di jenjang SMA.
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
                <Link to={finalUrl}>
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

export default StatistikImageSMA;
