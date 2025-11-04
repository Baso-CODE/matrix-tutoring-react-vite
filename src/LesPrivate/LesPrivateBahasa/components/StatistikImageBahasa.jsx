import { Link } from "react-router-dom";
import { useAppSelector } from "../../../lib/hooks";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";

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
  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;
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

export default StatistikImageBahasa;
