import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react"; // Ikon kutipan

import "./StudentTestimonialsSlider.css"; // Import file CSS untuk styling

const testimonials = [
  {
    id: 1,
    quote:
      "Matrix Tutoring benar-benar mengubah cara saya memahami mata kuliah Statistika. Penjelasan tutornya sangat jelas dan sabar. IPK saya langsung naik drastis!",
    author: "Sarah Wijaya",
    university: "Mahasiswa Ilmu Komunikasi, Universitas Indonesia",
  },
  {
    id: 2,
    quote:
      "Bimbingan skripsi saya sangat terbantu. Tutor saya tidak hanya ahli di bidangnya, tapi juga memberikan motivasi dan arahan yang sangat detail. Akhirnya bisa lulus tepat waktu!",
    author: "Rizky Pratama",
    university: "Mahasiswa Teknik Sipil, ITB",
  },
  {
    id: 3,
    quote:
      "Dengan jadwal yang super fleksibel, saya bisa tetap fokus kuliah dan ikut les privat untuk mata kuliah Fisika Dasar yang sulit. Sangat direkomendasikan untuk mahasiswa sibuk!",
    author: "Alya Putri",
    university: "Mahasiswa Farmasi, UGM",
  },
  {
    id: 4,
    quote:
      "Saya butuh bantuan cepat untuk ujian kalkulus, dan Matrix Tutoring langsung sigap mencarikan tutor yang pas. Metode belajarnya efektif dan langsung kena poinnya.",
    author: "Bima Santoso",
    university: "Mahasiswa Matematika, Universitas Padjadjaran",
  },
  {
    id: 5,
    quote:
      "Les privat di Matrix Tutoring membantu saya memahami konsep-konsep pemrograman yang kompleks. Sekarang saya lebih percaya diri dalam mengerjakan proyek-proyek coding.",
    author: "Citra Dewi",
    university: "Mahasiswa Teknik Informatika, Telkom University",
  },
];

const StudentTestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Ganti testimonial setiap 7 detik

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="student-testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          Apa Kata{" "}
        Mahasiswa Kami?
        </h2>
        <p className="testimonials-subtitle">
          Dengarkan langsung pengalaman mereka yang telah meraih sukses akademik
          bersama Matrix Tutoring.
        </p>

        <div className="slider-wrapper">
          <button
            className="slider-arrow prev-arrow"
            onClick={goToPrev}
            aria-label="Previous testimonial">
            &#10094; {/* Left arrow */}
          </button>
          <div className="testimonial-card-container">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === currentIndex ? "active" : ""
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                <Quote className="quote-icon" size={60} />
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author-info">
                  <span className="author-name">{testimonial.author}</span>
                  <span className="author-university">
                    {testimonial.university}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="slider-arrow next-arrow"
            onClick={goToNext}
            aria-label="Next testimonial">
            &#10095; {/* Right arrow */}
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot_mahasiswa_slider ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSlider;
