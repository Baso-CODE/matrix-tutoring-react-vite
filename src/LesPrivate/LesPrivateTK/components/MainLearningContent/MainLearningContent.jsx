import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./MainLearningContent.css";

const learningItems = [
  {
    images: "/images/les-private/tk/materi-pembelajaran/kreatifitas.webp",
    title: "Pengembangan Motorik & Kreativitas",
    text: "Melalui aktivitas menggambar, mewarnai, dan permainan edukatif untuk melatih koordinasi dan imajinasi.",
  },
  {
    images: "/images/les-private/tk/materi-pembelajaran/sosial.webp",
    title: "Keterampilan Sosial & Emosional",
    text: "Belajar berinteraksi, berbagi, dan mengenali emosi melalui cerita dan bermain peran.",
  },
  {
    images: "/images/les-private/tk/materi-pembelajaran/dasar-logika.webp",
    title: "Dasar Logika & Pemecahan Masalah",
    text: "Pengenalan konsep sederhana seperti pola, urutan, dan sebab-akibat melalui teka-teki dan permainan.",
  },
  {
    images:
      "/images/les-private/tk/materi-pembelajaran/pengembangan_bahasa.webp",
    title: "Pengembangan Bahasa & Komunikasi",
    text: "Meningkatkan kemampuan berbicara dan memahami instruksi melalui interaksi aktif dan kosa kata baru.",
  },
  {
    images: "/images/les-private/tk/materi-pembelajaran/musik.webp",
    title: "Pengenalan Musik & Gerak Badan",
    text: "Aktivitas yang melibatkan musik dan gerak untuk stimulasi sensorik dan ekspresi diri dari anak.",
  },
];

const MainLearningContent = ({ location }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="materi-pembelajaran-tk" className="main-learning-section">
      <div className="main-learning-container">
        <h2 className="main-learning-title">
          Materi Pembelajaran Utama Les Privat TK
        </h2>
        <p className="main-learning-description">
          Kami fokus pada fondasi kuat untuk masa depan cerah anak Anda, melalui
          kurikulum yang menyenangkan dan interaktif.
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="main-learning-swiper">
          {learningItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`learning-item ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blurred"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="learning-icon-wrapper">
                  <img
                    src={item.images}
                    alt={`${item.title} Icon - Les Privat TK di ${
                      location ? location : "Indonesia"
                    } - Matrix Tutoring`}
                    className="subject-icon-learning-tk"
                    loading="lazy"
                  />
                </div>
                <h3 className="learning-item-title">{item.title}</h3>
                <p className="learning-item-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainLearningContent;
