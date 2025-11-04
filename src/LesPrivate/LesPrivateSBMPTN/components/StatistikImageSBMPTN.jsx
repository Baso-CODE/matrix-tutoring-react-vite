import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";

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
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <section id="sbmptn-success-statistics" className="statistik-image-section">
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

export default StatistikImageSBMPTN;
