import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";

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
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
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

export default StatistikImageSD;
