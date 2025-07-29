import "./MasterTeacherV2.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState, useRef } from "react"; // Impor useRef
import { getAllMasterTeacherAlfa } from "../../helper/request/getAllMasterTeacherAlfa";

const MasterTeacherV2 = () => {
  const [dataTutor, setDataTutor] = useState([]);
  const swiperRef = useRef(null); // Buat ref untuk Swiper instance

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllMasterTeacherAlfa();
        setDataTutor(result.data);
      } catch (error) {
        console.error("Error Fetching master teacher data:", error);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk menghentikan autoplay saat mouse masuk
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  // Fungsi untuk melanjutkan autoplay saat mouse keluar
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const generateRandomRating = () => {
    const min = 4.7;
    const max = 5.0;
    return (Math.random() * (max - min) + min).toFixed(1);
  };
  return (
    <div>
      <div className="superparent-container-master-teacher-v2">
        <h2 className="title-master-teacher-v2">MASTER TEACHER</h2>
        <p className="child-title-master-teacher-v2">BERPENGALAMAN</p>
        <div
          className="container-master-teacher-v2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <Swiper
            // Tetapkan ref ke Swiper component
            ref={swiperRef}
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 4,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}>
            <>
              {dataTutor?.map((tutor, index) => (
                <SwiperSlide key={index}>
                  <div className="card-master-teacher-v2">
                    <img
                      loading="lazy"
                      src={tutor?.url_image}
                      alt={`Foto ${tutor?.nama}, seorang tutor berpengalaman di bidang ${tutor?.jurusan}`}
                      className="img-card-master-teacher-v2"
                    />
                    <h3 className="nama-master-teacher-v2">{tutor.nama}</h3>
                    <p className="mapel-master-teacher-v2">
                      Tutor untuk:{" "}
                      {tutor?.Grades && tutor.Grades.length > 0
                        ? tutor?.Grades.map((grade, i) => (
                            <span key={i}>
                              {grade?.title}
                              {i < tutor.Grades.length - 1 ? ", " : ""}
                            </span>
                          ))
                        : "Tidak ada data grade"}
                    </p>
                    <p className="ratting-master-teacher-v2">
                      <strong>{generateRandomRating()}</strong>
                      <br />
                      Rating
                    </p>
                    <div className="parent-jurusan-master-teacher-v2">
                      <button className="jurusan-master-teacher-v2">
                        {tutor?.jurusan}
                      </button>
                      <button className="univ-master-teacher-v2">
                        {tutor?.universitas}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MasterTeacherV2;
