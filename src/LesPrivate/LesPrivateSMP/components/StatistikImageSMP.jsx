import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";

const stats = [
  {
    image: "/images/les-private/smp/statistic/rapor.webp",
    title: "Peningkatan Nilai Ujian",
    description:
      "Rata-rata peningkatan persentase nilai ujian mata pelajaran inti (Matematika, IPA, Bahasa).",
  },
  {
    image: "/images/les-private/smp/statistic/konsep.webp",
    title: "Penguasaan Konsep",
    description:
      "Persentase siswa yang berhasil menguasai konsep-konsep sulit dalam pelajaran.",
  },
  {
    image: "/images/les-private/smp/statistic/berprestasi.webp",
    title: "Siswa Berprestasi",
    description:
      "Jumlah siswa SMP yang telah kami bimbing meraih prestasi akademik dan non-akademik.",
  },
  {
    image: "/images/les-private/smp/statistic/kesiapan.webp",
    title: "Kesiapan SMA",
    description:
      "Persentase siswa yang merasa siap dan percaya diri menghadapi jenjang SMA.",
  },
];

const StatistikImageSMP = () => {
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <section id="tk-learning-materials" className="statistik-image-section">
      <div className="statistik-image-container">
        <h2 className="statistik-image-title">
          Indikator Keberhasilan Les Privat SMP Kami
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

export default StatistikImageSMP;
