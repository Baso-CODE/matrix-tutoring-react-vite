import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimoniWaSNBT.css";
import { getAllTestimoniWa } from "../../../../helper/request/getAllTestimoniWa";

const TestimoniWaSNBT = ({ location }) => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);

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
      <h2 className="testimoniwa__title">Testimoni Siswa</h2>
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
                alt={`Testimoni Siswa Les Privat WaSNBT - Matrix Tutoring ${
                  location ? `di ${location}` : "Indonesia"
                } - ${item.name}`}
                className="testimoniwa__image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/400x500?text=No+Image";
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
