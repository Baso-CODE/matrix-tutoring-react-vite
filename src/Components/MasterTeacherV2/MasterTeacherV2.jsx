import { Swiper, SwiperSlide } from "swiper/react";
import "./MasterTeacherV2.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { getAllMasterTeacherAlfa } from "../../helper/request/getAllMasterTeacherAlfa";

const MasterTeacherV2 = ({ location }) => {
  const [dataTutor, setDataTutor] = useState([]);
  const swiperRef = useRef(null);

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

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const renderStars = (count) => {
    return (
      <div className="rating-stars">
        {[...Array(count)].map((_, i) => (
          <FaStar key={i} className="star-icon-master-teacher" />
        ))}
      </div>
    );
  };
  // const generateRandomRating = () => {
  //   const min = 4.8;

  //   const max = 5.0;

  //   return (Math.random() * (max - min) + min).toFixed(1);
  // };

  return (
    <div className="container-full-master-teacher-v2">
      <div className="container-all">
        <div className="superparent-container-master-teacher-v2">
          <h2 className="title-master-teacher-v2">MASTER TEACHER</h2>
          <p className="child-title-master-teacher-v2">BERPENGALAMAN</p>

          <div
            className="container-master-teacher-v2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Swiper
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
                320: { slidesPerView: 1, spaceBetween: 4 },
                768: { slidesPerView: 2, spaceBetween: 12 },
                1024: { slidesPerView: 3, spaceBetween: 6 },
                1200: { slidesPerView: 4, spaceBetween: 10 },
              }}>
              {dataTutor?.map((tutor, index) => (
                <SwiperSlide key={index}>
                  <div className="card-master-teacher-v2">
                    <img
                      loading="lazy"
                      src={tutor?.url_image}
                      alt={`Foto ${
                        tutor?.nama
                      }, seorang tutor berpengalaman di bidang ${
                        tutor?.jurusan
                      } ${
                        location ? `di ${location}` : "Indonesia"
                      } - Matrix Tutoring`}
                      className="img-card-master-teacher-v2"
                    />
                    <h3 className="nama-master-teacher-v2">{tutor.nama}</h3>
                    <p className="mapel-master-teacher-v2">
                      Tutor:{" "}
                      {tutor?.MapelList && tutor.MapelList.length > 0
                        ? tutor?.MapelList.map((mapel, i) => (
                            <span key={i}>
                              {mapel?.title}

                              {i < tutor.MapelList.length - 1 ? ", " : ""}
                            </span>
                          ))
                        : "Tidak ada data mata pelajaran"}
                    </p>
                    <p className="program-master-teacher-v2">
                      Program:{" "}
                      {tutor?.Grades && tutor.Grades.length > 0
                        ? tutor?.Grades.map((grade, i) => (
                            <span key={i}>
                              {grade?.title}

                              {i < tutor.Grades.length - 1 ? ", " : ""}
                            </span>
                          ))
                        : "Tidak ada data program"}
                    </p>
                    <div className="rating-container-v2">{renderStars(5)}</div>{" "}
                    <p className="univ-jurusan-text">
                      {tutor?.jurusan} - {tutor?.universitas}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MasterTeacherV2;
