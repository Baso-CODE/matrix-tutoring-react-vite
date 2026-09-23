import { useEffect, useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";
import "./TestimoniOrtuSiswaV2.css";

const testimonialDummyData = [
  {
    id: 1,
    studentName: "Maria Christabel DS",
    parentName: "Ibu Angelina",
    grade: "8 SMP",
    image: "/images/testimoni-ortu-siswa/Ibu-Angelina.webp",
    alt: "Testimoni orang tua dan siswa Matrix Tutoring",
  },
  {
    id: 2,
    studentName: "Faheema Shafiqa N",
    parentName: "Ibu Fayyaza",
    grade: "SMP",
    image: "/images/testimoni-ortu-siswa/Ibu-Fayyaza.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Faheema Shafiqa N",
  },
  {
    id: 3,
    studentName: "Amahyra Khayra H",
    parentName: "Ibu Fidri",
    grade: "Fokus Les Privat SD",
    image: "/images/testimoni-ortu-siswa/Ibu-Fidri.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Amahyra Khayra H",
  },
  {
    id: 4,
    studentName: "Qiandra Putri G",
    parentName: "Ibu Indah",
    grade: "SD",
    image: "/images/testimoni-ortu-siswa/Ibu-Indah.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Qiandra Putri G",
  },
  {
    id: 5,
    studentName: "Umaar Faatih",
    parentName: "Ibu Indira Hapsari",
    grade: "11 SMA",
    image: "/images/testimoni-ortu-siswa/Ibu-Indira-Hapsari.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Umaar Faatih",
  },
  {
    id: 6,
    studentName: "Theon Lukmanjaya",
    parentName: "Ibu Mei",
    grade: "TK",
    image: "/images/testimoni-ortu-siswa/Ibu-Mei.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Theon Lukmanjaya",
  },
  {
    id: 7,
    studentName: "Clarissa Putri P",
    parentName: "Ibu Rima",
    grade: "Fokus Les Privat SD",
    image: "/images/testimoni-ortu-siswa/Ibu-Rima.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Clarissa Putri P",
  },
  {
    id: 8,
    studentName: "Karindyra Hanna Shezuka",
    parentName: "Ibu Titah",
    grade: "SMP",
    image: "/images/testimoni-ortu-siswa/Ibu-Titah.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Karindyra Hanna Shezuka",
  },
  {
    id: 9,
    studentName: "Raindra Alkazio Y",
    parentName: "Ibu Wahyuningrum",
    grade: "SMP",
    image: "/images/testimoni-ortu-siswa/Ibu-Wahyuningrum.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Raindra Alkazio Y",
  },
  {
    id: 10,
    studentName: "Hilarius Pieter",
    parentName: "Pak Slamet",
    grade: "SMP",
    image: "/images/testimoni-ortu-siswa/Pak-Selamet.webp",
    alt: "Testimoni orang tua siswa Matrix Tutoring Hilarius Pieter",
  },
];

export default function TestimoniOrtuSiswaV2() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  return (
    <>
      <section id="testimoni-ortu-siswa" className="ortu-testimoni-v2-section">
        <div className="ortu-testimoni-v2-container">
          <div className="ortu-testimoni-v2-header">
            <span className="ortu-testimoni-v2-badge">Cerita Mereka</span>

            <h2 className="ortu-testimoni-v2-title">
              Testimoni Ortu & Siswa
              <span> Matrix Tutoring</span>
            </h2>

            <p className="ortu-testimoni-v2-description">
              Lihat cerita dan pengalaman orang tua serta siswa selama mengikuti
              pembelajaran bersama tutor Matrix Tutoring.
            </p>
          </div>

          <div className="ortu-testimoni-v2-grid">
            {testimonialDummyData.map((item) => (
              <button
                key={item.id}
                type="button"
                className="ortu-testimoni-v2-card"
                onClick={() => setSelectedItem(item)}
                aria-label={`Lihat testimoni ${item.studentName}`}>
                <div className="ortu-testimoni-v2-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="ortu-testimoni-v2-image"
                  />

                  <div className="ortu-testimoni-v2-overlay">
                    <span className="ortu-testimoni-v2-zoom">
                      <FiZoomIn />
                    </span>
                  </div>
                </div>

                <div className="ortu-testimoni-v2-info">
                  <p className="ortu-testimoni-v2-student">
                    {item.studentName}
                  </p>

                  <div className="ortu-testimoni-v2-meta">
                    <span className="ortu-testimoni-v2-parent">
                      {item.parentName}
                    </span>

                    <span className="ortu-testimoni-v2-grade">
                      {item.grade}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="ortu-testimoni-v2-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimoni ${selectedItem.studentName}`}
          onClick={() => setSelectedItem(null)}>
          <button
            type="button"
            className="ortu-testimoni-v2-close"
            aria-label="Tutup testimoni"
            onClick={() => setSelectedItem(null)}>
            <FiX />
          </button>

          <div
            className="ortu-testimoni-v2-lightbox-content"
            onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              className="ortu-testimoni-v2-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
