import { Award, GraduationCap, Laptop, Users } from "lucide-react"; // Ikon relevan

import "./MatrixDifferentiationSMA.css"; // Import file CSS untuk styling

const differentiators = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Tutor Ahli Lulusan PTN Favorit",
    description:
      "Belajar langsung dari para ahli yang telah merasakan ketatnya persaingan PTN. Mereka bukan hanya mengajar, tetapi juga berbagi strategi dan pengalaman nyata.",
    image: "/images/les-private/sma/matrix-different/tutor-ahli.webp", // Placeholder image
    alt: "Tutor ahli lulusan PTN favorit",
    reverse: false, // Teks di kiri, gambar di kanan
  },
  {
    id: 2,
    icon: Laptop,
    title: "Platform Belajar Adaptif Berbasis AI",
    description:
      "Nikmati pengalaman belajar yang dipersonalisasi dengan platform canggih kami. Analisis performa, rekomendasi materi, dan simulasi ujian yang disesuaikan untuk Anda.",
    image: "/images/les-private/sma/matrix-different/belajar-adaptif.webp", // Placeholder image
    alt: "Platform belajar adaptif berbasis AI",
    reverse: true, // Gambar di kiri, teks di kanan
  },
  {
    id: 3,
    icon: Users,
    title: "Pendekatan Mentoring Holistik",
    description:
      "Kami tidak hanya fokus pada akademik, tetapi juga kesiapan mental, motivasi, dan bimbingan karir. Anda akan didampingi secara menyeluruh hingga sukses.",
    image: "/images/les-private/sma/matrix-different/pendekatan-mentoring.webp", // Placeholder image
    alt: "Pendekatan mentoring holistik",
    reverse: false,
  },
  {
    id: 4,
    icon: Award,
    title: "Rekam Jejak Keberhasilan Terbukti",
    description:
      "Lihatlah daftar panjang alumni kami yang berhasil menembus PTN impian. Kami memiliki metode yang teruji dan telah mengantar ribuan siswa menuju kesuksesan.",
    image: "/images/les-private/sma/matrix-different/rekam-jejak.webp", // Placeholder image
    alt: "Rekam jejak keberhasilan terbukti",
    reverse: true,
  },
];

const MatrixDifferentiationSMA = () => {
  return (
    <section
      id="matrix-differentiation-sma"
      className="differentiation-section">
      <div className="differentiation-container">
        <h2 className="differentiation-title">
          Mengapa Matrix Tutoring Adalah Pilihan Tepat Anda?
        </h2>
        <p className="differentiation-subtitle">
          Temukan keunggulan yang membedakan kami dan memastikan kesuksesan Anda
          di SMA hingga PTN impian.
        </p>

        <div className="features-list-matrix-differentiation-sma">
          {differentiators.map((feature) => (
            <div
              key={feature.id}
              className={`feature-block-matrix-differention-sma ${
                feature.reverse
                  ? "feature-block-matrix-differention-sma-reverse"
                  : ""
              }`}>
              <div className="feature-content">
                <div className="feature-icon-differention-sma-wrapper">
                  <feature.icon
                    className="feature-icon-differention-sma"
                    size={40}
                  />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image-wrapper">
                <img
                  loading="lazy"
                  src={feature.image}
                  alt={feature.alt}
                  className="feature-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/600x400/CCCCCC/000000?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* <div className="differentiation-cta-wrapper">
          <p className="differentiation-cta-text">
            Siap meraih PTN impian dengan strategi terbaik?
          </p>
          <a
            href="#pilihan-program-les-private"
            className="differentiation-cta-button">
            Daftar & Konsultasi Gratis!
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default MatrixDifferentiationSMA;
