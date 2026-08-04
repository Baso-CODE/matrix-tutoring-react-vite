import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import background from "../../assets/bg-gallery.jpg"; // Ganti dengan path file background Anda
import "./GaleriKegiatanBelajar.css";

const dummyData = [
  {
    id: 1,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-siti-dengan-arjuna.webp",
        caption: "Kak Siti dengan Siswa Arjuna",
        tag: "Mengaji",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-rofiah-dengan-siswa.webp",
        caption: "Kak Rofiah dengan Siswa Kayyisa",
        tag: "Bahasa Inggris",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-qosiratun-dengan-siswa-gibran.webp",
        caption: "Kak Qosiratun dengan siswa Gibran",
        tag: "Matematika",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-nurshabah-dengan-siswa-firdausi.webp",
        caption: "Kak Nurshabah dengan siswa Firdausi",
        tag: "Online",
      },
    ],
  },
  {
    id: 2,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-nofiasih-dengan-siswa-rania.webp",
        caption: "Kak Nofiasih dengan siswa Rania",
        tag: "Mengaji",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-restu-dengan-siswa-raidewa.webp",
        caption: "Kak Restu dengan siswa Raidewa",
        tag: "Bahasa",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-elly-dengan-siswa-aby.webp",
        caption: "Kak Elly dengan siswa Aby",
        tag: "Calistung",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-siti-dengan-siswa-abdillah.webp",
        caption: "Kak Siti dengan siswa Abdillah",
        tag: "Calistung",
      },
    ],
  },
  {
    id: 3,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-laela-dengan-siswa-rasen.webp",
        caption: "Kak Laela dengan Siswa Rasen",
        tag: "Calistung",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-baiquni-dengan-siswa-christian-richardo.webp",
        caption: "Kak Baiquni dengan siswa Christian Richardo",
        tag: "Bahasa Inggris",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-melinda-dengan-siswa-josephine.webp",
        caption: "Kak Melindah dengan Siswa Josephine",
        tag: "SMA",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-agustina-dengan-siswa-zahwa.webp",
        caption: "Kak Agustina dengan Siswa Zahwa",
        tag: "SMP",
      },
    ],
  },
  {
    id: 4,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-yola-dengan-siswa-abif.webp",
        caption: "Kak Yola dengan Siswa Abif",
        tag: "SD",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-prafita-dengan-siswa-kimora.webp",
        caption: "Kak Prafita dengan Siswa Kimora",
        tag: "SD",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-yusuf-dengan-siswa-kicky.webp",
        caption: "Kak Yusuf dengan Siswa Kicky",
        tag: "SD",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-baiquni-dengan-siswa-nabil.webp",
        caption: "Kak Baiquni dengan Siswa Nabil",
        tag: "SD",
      },
    ],
  },
  {
    id: 5,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-wyda-dengan-siswa-mandala.webp",
        caption: "Kak Wyda dengan Siswa Mandala",
        tag: "SMP",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-putri-dengan-siswa-ignasia.webp",
        caption: "Kak Putri dengan Siswa Ignasia",
        tag: "SMP",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-malihah-dengan-siswa-daevin.webp",
        caption: "Kak Malihah dengan Siswa Daevin",
        tag: "SMP",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-dilviva-dengan-siswa-nabila.webp",
        caption: "Kak Dilviva dengan Siswa Nabila",
        tag: "SMA",
      },
    ],
  },
  {
    id: 6,
    title: "Gallery",
    images: [
      {
        id: 1,
        src: "/images/gallery-belajar/kak-kurniawan-dengan-siswa-bryan.webp",
        caption: "Kak Kurniawan dengan Siswa Bryan",
        tag: "SMA",
      },
      {
        id: 2,
        src: "/images/gallery-belajar/kak-annahal-dengan-siswa-zahra.webp",
        caption: "Kak Annahal dengan Siswa Zahra",
        tag: "SMA",
      },
      {
        id: 3,
        src: "/images/gallery-belajar/kak-andri-dengan-siswa-faqih.webp",
        caption: "Kak Andri dengan Siswa Faqih",
        tag: "Kedinasan",
      },
      {
        id: 4,
        src: "/images/gallery-belajar/kak-fenny-dengan-siswa-zia.webp",
        caption: "Kak Fenny dengan Siswa Zia",
        tag: "Komputer",
      },
    ],
  },
];

const GaleriKegiatanBelajar = ({ location }) => {
  return (
    <section className="container-all">
      <div className="galeri-container">
        <h2 className="main-title-galeri-belajar">Galeri Kegiatan Belajar</h2>
        <Swiper
          modules={[Pagination, Navigation, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoHeight={false}
          // navigation={true}
          scrollbar={{ draggable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper">
          {dummyData.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="galeri-card"
                style={{ backgroundImage: `url(${background})` }}>
                <img
                  src={"/images/shooting-star.webp"}
                  alt="Star Icon"
                  loading="lazy"
                  className="star-icon"
                />
                <div className="card-title-container">
                  <h3 className="card-title-galeri-kegiatan">{card.title}</h3>
                </div>
                <div className="card-grid">
                  {card.images.map((image) => (
                    <div key={image.id} className="image-item">
                      <div className="image-box">
                        <img
                          src={image.src}
                          alt={`${image.caption} - Matrix Tutoring ${
                            location ? `di ${location}` : "Indonesia"
                          }`}
                          className="image-galeri-kegiatan"
                          loading="lazy"
                        />
                        {image.tag && (
                          <span className="image-tag">{image.tag}</span>
                        )}
                      </div>
                      <p className="image-caption-galeri-kegiatan">
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GaleriKegiatanBelajar;
