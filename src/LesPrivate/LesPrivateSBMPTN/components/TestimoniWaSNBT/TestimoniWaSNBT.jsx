import { X, ZoomIn } from "lucide-react";
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
  const [selectedTestimoni, setSelectedTestimoni] = useState(null);

  // =========================================================
  // LOCATION
  // =========================================================

  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // =========================================================
  // TITLE
  // =========================================================

  const titleVariations = [
    `Testimoni Siswa Lolos SNBT & PTN ${locSuffix}`,
    `Bukti Sukses Les Privat UTBK ${locName} - Matrix Tutoring`,
    `Review Kelulusan Siswa Matrix Tutoring ${locSuffix}`,
  ];

  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // =========================================================
  // FETCH DATA
  // =========================================================

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllTestimoniWa();

        setDataTestimoniWa(result.data || []);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // =========================================================
  // MODAL
  // =========================================================

  useEffect(() => {
    if (!selectedTestimoni) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedTestimoni(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTestimoni]);

  const handleOpenModal = (item) => {
    setSelectedTestimoni(item);
  };

  const handleCloseModal = () => {
    setSelectedTestimoni(null);
  };

  return (
    <>
      <section className="testimoniwa__container">
        <div className="testimoniwa__header">
          <h2 className="testimoniwa__title">{selectedTitle}</h2>

          <p className="testimoniwa__subtitle">
            Bukti nyata pengalaman dan pencapaian siswa Matrix Tutoring dalam
            mempersiapkan SNBT, UTBK, dan seleksi masuk perguruan tinggi.
          </p>
        </div>

        <div className="testimoniwa__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimoniwa__swiper">
            {dataTestimoniWa.map((item, index) => (
              <SwiperSlide key={index}>
                <button
                  type="button"
                  className="testimoniwa__card"
                  onClick={() => handleOpenModal(item)}
                  aria-label={`Lihat testimoni ${
                    item.name || "siswa Matrix Tutoring"
                  }`}>
                  <div className="testimoniwa__image-wrapper">
                    <img
                      loading="lazy"
                      src={item.link_image}
                      alt={`Screenshot testimoni kelulusan siswa Les Privat SNBT ${locName} - ${
                        item.name || "Siswa Matrix Tutoring"
                      }`}
                      className="testimoniwa__image"
                      width="300"
                      height="500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/400x500?text=Testimoni+Matrix";
                      }}
                    />

                    <div className="testimoniwa__zoom">
                      <ZoomIn />
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* =====================================================
          MODAL / LIGHTBOX
      ====================================================== */}

      {selectedTestimoni && (
        <div
          className="testimoniwa__modal"
          role="dialog"
          aria-modal="true"
          aria-label="Preview testimoni siswa"
          onClick={handleCloseModal}>
          <div
            className="testimoniwa__modal-content"
            onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="testimoniwa__modal-close"
              onClick={handleCloseModal}
              aria-label="Tutup preview testimoni">
              <X />
            </button>

            <div className="testimoniwa__modal-image-wrapper">
              <img
                src={selectedTestimoni.link_image}
                alt={`Testimoni ${
                  selectedTestimoni.name || "Siswa Matrix Tutoring"
                }`}
                className="testimoniwa__modal-image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x900?text=Testimoni+Matrix";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimoniWaSNBT;
