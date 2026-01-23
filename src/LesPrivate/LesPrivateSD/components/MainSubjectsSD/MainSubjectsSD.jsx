import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./MainSubjectsSD.css";

const MainSubjectsSD = ({ location }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Materi Pelajaran Utama Les Privat SD ${locSuffix}`,
    // Variasi 2 (Focus on Completeness)
    `Pilihan Mapel Les Privat SD Terlengkap area ${locName}`,
    // Variasi 3 (Focus on Curriculum)
    `Bimbingan Belajar Semua Mata Pelajaran SD ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Subject Dinamis (Injeksi Lokasi ke Deskripsi)
  const subjectItems = [
    {
      images: "/images/les-private/sd/mata-pelajaran/calistung.png",
      title: "Calistung (Baca, Tulis, Hitung)",
      text: `Fokus pada kemampuan dasar membaca, menulis huruf dengan benar, dan berhitung sederhana. Cocok untuk siswa kelas awal SD ${locSuffix} agar lebih siap mengikuti pelajaran.`,
    },
    {
      images: "/images/les-private/sd/mata-pelajaran/matematika.webp",
      title: "Matematika",
      text: `Penguasaan konsep dasar hitung, aljabar sederhana, geometri, dan pemecahan masalah lewat latihan soal yang disesuaikan dengan standar sekolah di ${locName}.`,
    },
    {
      images: "/images/les-private/sd/mata-pelajaran/bahasa-indonesia.webp",
      title: "Bahasa Indonesia",
      text: "Meningkatkan kemampuan membaca cepat, menulis karangan, tata bahasa, dan pemahaman wacana teks.",
    },
    {
      images:
        "/images/les-private/sd/mata-pelajaran/ilmu-pengetahuan-alam.webp",
      title: "Ilmu Pengetahuan Alam",
      text: "Memahami fenomena alam, biologi dasar, fisika sederhana, dan eksperimen yang menyenangkan bagi anak.",
    },
    {
      images:
        "/images/les-private/sd/mata-pelajaran/ilmu-pengetahuan-sosial.webp",
      title: "Ilmu Pengetahuan Sosial",
      text: `Mengenal sejarah Indonesia, geografi dasar, keberagaman budaya, dan norma sosial masyarakat ${locName}.`,
    },
    {
      images: "/images/les-private/sd/mata-pelajaran/bahasa-inggris.webp",
      title: "Bahasa Inggris",
      text: "Pengenalan kosakata, tata bahasa dasar, percakapan sehari-hari, dan pemahaman teks singkat (Reading Comprehension).",
    },
    {
      images: "/images/les-private/sd/mata-pelajaran/semua-mata-pelajaran.webp",
      title: "Semua Mata Pelajaran & Tematik",
      text: `Bantuan untuk semua mata pelajaran sekolah dasar, termasuk kurikulum tematik dan persiapan ujian sekolah ${locSuffix}.`,
    },
  ];

  return (
    <section id="materi-pelajaran-sd-utama" className="main-subjects-section">
      <div className="main-subjects-container">
        {/* DYNAMIC TITLE */}
        <h2 className="main-subjects-title">{selectedTitle}</h2>

        {/* DYNAMIC DESCRIPTION */}
        <p className="main-subjects-description">
          Kami menyediakan bimbingan komprehensif untuk semua mata pelajaran
          sekolah dasar, disesuaikan dengan kurikulum sekolah{" "}
          <strong>{locName}</strong> dan kebutuhan unik setiap siswa.
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
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
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blurred"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="subject-icon-wrapper">
                  <img
                    src={item.images}
                    // Alt text dinamis untuk SEO Gambar
                    alt={`${item.title} - Les Privat SD ${locName}`}
                    className="subject-icon"
                    loading="lazy"
                    width="80"
                    height="80"
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
