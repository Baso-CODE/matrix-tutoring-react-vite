import { useState } from "react"; // Tambahkan useState
import "./WhyChooseSBMPTN.css";

const whyChooseItems = [
  {
    icon: "/images/les-private/sbmptn/why-choose/target.webp",
    title: "Strategi Lulus Komprehensif",
    description:
      "Fokus pada taktik dan strategi pengerjaan soal SBMPTN yang efektif, bukan hanya menghafal materi.",
  },
  {
    icon: "/images/les-private/sbmptn/why-choose/user-check.webp",
    title: "Bimbingan Personal & Intensif",
    description:
      "Pendekatan privat yang disesuaikan dengan gaya belajar dan kecepatan pemahaman Anda untuk hasil maksimal.",
  },
  {
    icon: "/images/les-private/sbmptn/why-choose/analisis.webp",
    title: "Analisis Progres Akurat",
    description:
      "Pengukuran kemajuan berkala melalui simulasi dan evaluasi untuk memetakan kekuatan dan area yang perlu ditingkatkan.",
  },
  {
    icon: "/images/les-private/sbmptn/why-choose/mental-juara.webp",
    title: "Motivasi & Mental Juara",
    description:
      "Membangun kepercayaan diri, mengatasi kecemasan, dan menjaga semangat belajar hingga hari H ujian.",
  },
];

const WhyChooseSBMPTN = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <section id="why-choose-sbmptn" className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="why-choose-title">
          Mengapa Memilih Les Privat SBMPTN Matrix ?
        </h2>
        <p className="why-choose-subtitle">
          Kami menawarkan lebih dari sekadar les; kami adalah partner Anda
          menuju kesuksesan SBMPTN dengan pendekatan yang terbukti.
        </p>

        <div className="why-choose-cards-grid">
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              className={`why-choose-card ${
                hoveredCardIndex !== null && hoveredCardIndex !== index
                  ? "blurred-card"
                  : ""
              }`}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}>
              <div className="why-choose-icon-wrapper">
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className="why-choose-icon"
                />
              </div>
              <h3 className="why-choose-card-title">{item.title}</h3>
              <p className="why-choose-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSBMPTN;
