import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllTestimoniWa } from "../../../../helper/request/getAllTestimoniWa";
import "./TestimoniWaSNBT.css";

const TestimoniWaSNBT = ({ location }) => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);

  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Result Focused)
    `Testimoni Siswa Lolos SNBT & PTN ${locSuffix}`,
    // Variasi 2 (Trust Focused)
    `Bukti Sukses Les Privat UTBK ${locName} - Matrix Tutoring`,
    // Variasi 3 (Review Focused)
    `Review Kelulusan Siswa Matrix Tutoring ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllTestimoniWa();
        setDataTestimoniWa(result.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="testimoniwa__container">
      {/* DYNAMIC TITLE */}
      <h2 className="testimoniwa__title">{selectedTitle}</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1024: { slidesPerView: 3 }, // desktop
        }}>
        {dataTestimoniWa.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimoniwa__card">
              <img
                loading="lazy"
                src={item.link_image}
                // Alt Text Dioptimalkan untuk SEO Gambar
                alt={`Screenshot testimoni kelulusan siswa Les Privat SNBT ${locName} - ${
                  item.name || "Siswa Matrix Tutoring"
                }`}
                className="testimoniwa__image"
                width="300" // Estimasi width agar tidak layout shift
                height="500" // Estimasi height
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x500?text=Testimoni+Matrix";
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimoniWaSNBT;
