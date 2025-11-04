import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./MainSubjectsSD.css";

const subjectItems = [
  {
    images: "/images/les-private/sd/mata-pelajaran/calistung.png", // Calistung
    title: "Calistung (Baca, Tulis, Hitung)",
    text: "Fokus pada kemampuan dasar membaca, menulis huruf dengan benar, dan berhitung sederhana. Cocok untuk siswa kelas awal SD agar lebih siap mengikuti pelajaran.",
  },
  {
    images: "/images/les-private/sd/mata-pelajaran/matematika.webp", // Matematika
    title: "Matematika",
    text: "Penguasaan konsep dasar hitung mulai dari penjumlahan, pengurangan, pembagian, perkalian, aljabar sederhana, geometri, dan pemecahan masalah lewat latihan soal.",
  },
  {
    images: "/images/les-private/sd/mata-pelajaran/bahasa-indonesia.webp", // Bahasa Indonesia
    title: "Bahasa Indonesia",
    text: "Meningkatkan kemampuan membaca cepat, menulis karangan, tata bahasa, dan pemahaman wacana.",
  },
  {
    images: "/images/les-private/sd/mata-pelajaran/ilmu-pengetahuan-alam.webp", // Ilmu Pengetahuan Alam (IPA)
    title: "Ilmu Pengetahuan Alam",
    text: "Memahami fenomena alam, biologi dasar, fisika sederhana, dan eksperimen yang menyenangkan.",
  },
  {
    images:
      "/images/les-private/sd/mata-pelajaran/ilmu-pengetahuan-sosial.webp", // Ilmu Pengetahuan Sosial (IPS)
    title: "Ilmu Pengetahuan Sosial",
    text: "Mengenal sejarah Indonesia, geografi dasar, keberagaman budaya, dan norma sosial.",
  },
  {
    images: "/images/les-private/sd/mata-pelajaran/bahasa-inggris.webp", // Bahasa Inggris
    title: "Bahasa Inggris",
    text: "Pengenalan kosakata, tata bahasa dasar, percakapan sehari-hari, dan pemahaman teks singkat.",
  },
  {
    images: "/images/les-private/sd/mata-pelajaran/semua-mata-pelajaran.webp", // Umum/Tematik
    title: "Semua Mata Pelajaran & Tematik",
    text: "Bantuan untuk semua mata pelajaran sekolah dasar, termasuk kurikulum tematik dan persiapan ujian.",
  },
];

const MainSubjectsSD = ({ location }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="materi-pelajaran-sd-utama" className="main-subjects-section">
      <div className="main-subjects-container">
        <h2 className="main-subjects-title">
          Materi Pelajaran Utama Les Privat SD
        </h2>
        <p className="main-subjects-description">
          Kami menyediakan bimbingan komprehensif untuk semua mata pelajaran
          sekolah dasar, disesuaikan dengan kurikulum dan kebutuhan unik setiap
          siswa.
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500, // Sedikit lebih lama dari TK, sesuaikan jika perlu
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="main-subjects-swiper">
          {subjectItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`subject-item ${
                  // Tambahkan class 'blurred' jika ada kartu lain yang sedang di-hover
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blurred"
                    : ""
                }`}
                // Atur state saat kursor masuk ke kartu
                onMouseEnter={() => setHoveredIndex(index)}
                // Reset state saat kursor keluar dari kartu
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="subject-icon-wrapper">
                  <img
                    src={item.images}
                    alt={`${item.title} Icon Les Privat SD ${
                      location ? `di ${location}` : ""
                    }`}
                    className="subject-icon"
                  />
                </div>
                <h3 className="subject-item-title">{item.title}</h3>
                <p className="subject-item-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSubjectsSD;
