import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./MasterTeacherV2.css";

// Data Dummy Master Teacher
const dummyMasterTeacher = [
  {
    id: "5731d31c-7454-45a5-ad68-be72cbe24133",
    nama: "Amilatun Nasika",
    universitas: "ITB",
    jurusan: "Manajemen",
    url_image:
      "/images/tutor/IMG07-03-2025_10-59-43-Kak-Amilatun-Nasika-S1-Manajemen-ITB.webp",
    MapelList: [{ title: "Manajemen" }, { title: "Ekonomi" }],
    Grades: [{ title: "SMA" }, { title: "UTBK" }],
  },
  {
    id: "6fcaf3e1-9efe-45f2-b8a3-1053ec1ae2cf",
    nama: "Dariatul Jannah",
    universitas: "IPB",
    jurusan: "Biologi",
    url_image:
      "/images/tutor/IMG12-03-2025_11-05-02-Kak-Dariatul-Janah-S1-Biologi-IPB.webp",
    MapelList: [{ title: "Biologi" }, { title: "IPA" }],
    Grades: [{ title: "SMP" }, { title: "SMA" }],
  },
  {
    id: "7447fb47-c123-45fd-bb13-f4520b11d212",
    nama: "Aura Fathia",
    universitas: "IPB",
    jurusan: "KIMIA",
    url_image:
      "/images/tutor/IMG12-03-2025_11-07-20-Kak-Aura-Fathia-S1-Kimia-IPB.webp",
    MapelList: [{ title: "Kimia" }, { title: "IPA" }],
    Grades: [{ title: "SMA" }, { title: "UTBK" }],
  },
  {
    id: "7a6a6ff7-0ec7-4733-8f03-c4093cff6579",
    nama: "Melinda Nur Pratiwi",
    universitas: "UI",
    jurusan: "Matematika",
    url_image:
      "/images/tutor/IMG13-03-2025_13-25-13-Kak-Melinda-Nur-Pratiwi-S1-Matematika-UI.webp",
    MapelList: [{ title: "Matematika" }],
    Grades: [{ title: "SD" }, { title: "SMP" }, { title: "SMA" }],
  },
  {
    id: "b43954c7-23c2-418f-a5fd-1e7d3555f860",
    nama: "Andri Lesmana",
    universitas: "IPB",
    jurusan: "Kimia",
    url_image:
      "/images/tutor/IMG12-03-2025_11-09-13-Kak-Andri-Lesmana-S1-Kimia-IPB-S2-Tek-Pendidikan-UIKA.webp",
    MapelList: [{ title: "Kimia" }, { title: "IPA" }],
    Grades: [{ title: "SMA" }, { title: "UTBK" }],
  },
  {
    id: "b61afb35-25c8-46a4-9742-bb0ea68f7d87",
    nama: "Sri Juwarsih",
    universitas: "IPB",
    jurusan: "Matematika",
    url_image:
      "/images/tutor/IMG13-03-2025_13-49-09-Kak-Sri-Juwarsih-S1-Matematika-IPB.webp",
    MapelList: [{ title: "Matematika" }],
    Grades: [{ title: "SMP" }, { title: "SMA" }],
  },
  {
    id: "d9402618-54d5-4145-979e-5e943d66f16e",
    nama: "Jung Nurshabah Natsir MB",
    universitas: "UIN Jakarta",
    jurusan: "S2 Ilmu Quran Tafsir",
    url_image:
      "/images/tutor/IMG13-03-2025_13-40-53-Kak-Jung-Nurshabah-Natsir-S1-UIN-Makassar-S2-Ilmu-Quran-Tafsir-UIN-Syarif-Hidayatullah-Jakarta.webp",
    MapelList: [{ title: "Agama Islam" }, { title: "Bahasa Arab" }],
    Grades: [{ title: "SD" }, { title: "SMP" }, { title: "SMA" }],
  },
  {
    id: "e98f72f9-a92e-4608-b1d0-ad410163eec2",
    nama: "Mohammad Misbakhusshudur",
    universitas: "S2 IPB",
    jurusan: "Fisika",
    url_image:
      "/images/tutor/IMG13-03-2025_13-45-45-Kak-Moh-Misbakhusshudur-S2-Fisika-IPB.webp",
    MapelList: [{ title: "Fisika" }],
    Grades: [{ title: "SMA" }, { title: "UTBK" }],
  },
  {
    id: "f652fb33-d771-4a0e-983e-b1d476b11c44",
    nama: "Kresno Dwi Poyono Atmojo Latifi",
    universitas: "UNJ",
    jurusan: "Pendidikan",
    url_image:
      "/images/tutor/IMG13-03-2025_13-32-25-Kak-Kresno-Dwi-Poyono-Atmojo-Latifi-Tek-Pendidikan-UNJ.webp",
    MapelList: [{ title: "Tematik" }, { title: "Bahasa Indonesia" }],
    Grades: [{ title: "SD" }, { title: "SMP" }],
  },
  {
    id: "f71ae992-a0fc-443a-8fb3-bc3f31d29409",
    nama: "Asih Partiwi",
    universitas: "IPB",
    jurusan: "Statistika",
    url_image:
      "/images/tutor/IMG12-03-2025_11-09-27-Kak-Asih-Pertiwi-S1-Jurusan-Statistika-IPB.webp",
    MapelList: [{ title: "Matematika" }, { title: "Statistika" }],
    Grades: [{ title: "SMA" }, { title: "UTBK" }],
  },
  {
    id: "f7c1f234-858e-46fb-ade8-5ba99ab08e9c",
    nama: "Ulfa Fauziah",
    universitas: "UI",
    jurusan: "Matematika",
    url_image:
      "/images/tutor/IMG13-03-2025_13-26-10-Kak-Ulfah-Fauziah-S1-Matematika-UI.webp",
    MapelList: [{ title: "Matematika" }],
    Grades: [{ title: "SMP" }, { title: "SMA" }, { title: "UTBK" }],
  },
];

const MasterTeacherV2 = ({ location }) => {
  const swiperRef = useRef(null);

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
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                640: { slidesPerView: 2, spaceBetween: 15 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
                1200: { slidesPerView: 4, spaceBetween: 20 },
              }}>
              {dummyMasterTeacher.map((tutor) => (
                <SwiperSlide key={tutor.id}>
                  <div className="card-master-teacher-v2">
                    <div className="img-wrapper-master-teacher-v2">
                      <img
                        loading="lazy"
                        src={tutor.url_image}
                        alt={`Foto ${tutor.nama}, tutor ${tutor.jurusan} ${
                          location ? `di ${location}` : "Indonesia"
                        }`}
                        className="img-card-master-teacher-v2"
                      />
                    </div>

                    <h3 className="nama-master-teacher-v2">{tutor.nama}</h3>

                    <p className="mapel-master-teacher-v2">
                      <strong>Tutor:</strong>{" "}
                      {tutor.MapelList && tutor.MapelList.length > 0
                        ? tutor.MapelList.map((mapel) => mapel.title).join(", ")
                        : "Tidak ada data mata pelajaran"}
                    </p>

                    <p className="program-master-teacher-v2">
                      <strong>Program:</strong>{" "}
                      {tutor.Grades && tutor.Grades.length > 0
                        ? tutor.Grades.map((grade) => grade.title).join(", ")
                        : "Tidak ada data program"}
                    </p>

                    <div className="rating-container-v2">{renderStars(5)}</div>

                    <p className="univ-jurusan-text">
                      {tutor.jurusan} - {tutor.universitas}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterTeacherV2;
