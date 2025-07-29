/* eslint-disable react-hooks/exhaustive-deps */
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

// Data testimonial untuk les privat bahasa
const testimonialsData = [
  {
    id: 1,
    quote:
      "Belajar bahasa Inggris di Matrix Tutoring sangat membantu! Guru sangat sabar dan materinya disesuaikan dengan kebutuhan saya. Sekarang saya lebih percaya diri saat berbicara.",
    author: "Amelia Putri",
    language: "Bahasa Inggris", // Menambahkan detail bahasa
    image: "/images/students/amelia_putri.webp", // Ganti dengan path gambar siswa
  },
  {
    id: 2,
    quote:
      "Saya awalnya ragu bisa belajar bahasa Mandarin, tapi metode pengajaran di sini sangat interaktif dan menyenangkan. Progres saya jauh melebihi ekspektasi!",
    author: "Bima Wijaya",
    language: "Bahasa Mandarin",
    image: "/images/students/bima_wijaya.webp", // Ganti dengan path gambar siswa
  },
  {
    id: 3,
    quote:
      "Persiapan IELTS jadi lebih terarah berkat bimbingan intensif dari Matrix. Tips dan triknya sangat berguna, dan alhamdulillah skor saya memuaskan!",
    author: "Citra Dewi",
    language: "Persiapan IELTS",
    image: "/images/students/citra_dewi.webp", // Ganti dengan path gambar siswa
  },
  {
    id: 4,
    quote:
      "Guru bahasa Jepang saya sangat kompeten. Mereka tidak hanya mengajar bahasa, tapi juga memperkenalkan budaya yang menarik. Belajar jadi tidak membosankan.",
    author: "Dani Saputra",
    language: "Bahasa Jepang",
    image: "/images/students/dani_saputra.webp", // Ganti dengan path gambar siswa
  },
  {
    id: 5,
    quote:
      "Les privat bahasa Jerman di sini top! Sangat membantu saya dalam persiapan studi ke luar negeri. Latihan percakapan sangat intensif.",
    author: "Elisa Suryani",
    language: "Bahasa Jerman",
    image: "/images/students/elisa_suryani.webp", // Ganti dengan path gambar siswa
  },
];

const TestimonialBahasa = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    // Mempertahankan classname yang diberikan dari template Anda
    <section id="student-testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Apa Kata Siswa Bahasa Kami?</h2>
        <p className="testimonials-subtitle">
          Dengarkan langsung pengalaman mereka yang telah menguasai bahasa baru
          bersama Matrix Tutoring Indonesia.
        </p>

        <div className="slider-wrapper">
          <button
            className="slider-arrow prev-arrow"
            onClick={goToPrev}
            aria-label="Previous testimonial">
            &#10094; {/* Left arrow */}
          </button>
          <div className="testimonial-card-container">
            {testimonialsData.map((testimonial, index) => (
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
          {testimonialsData.map((_, index) => (
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

export default TestimonialBahasa;
