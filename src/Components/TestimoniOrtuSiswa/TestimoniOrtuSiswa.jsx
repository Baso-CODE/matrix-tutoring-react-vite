import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

import "./TestimoniOrtuSiswa.css";

import { getAllTestimoniSiswaOrangTua } from "../../helper/request/getAllTestimoniSiswaOrangTua";
import TestimoniCardOrtuSiswa from "./TestimoniCardOrtuSiswa";

const TestimoniOrtuSiswa = ({ location }) => {
  const [dataTestimoniOrangTua, setDataTestimoniOrtu] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchDataOrangTua = async () => {
      try {
        const response = await getAllTestimoniSiswaOrangTua();

        setDataTestimoniOrtu(response.data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchDataOrangTua();
  }, []);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem]);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 2800,
        stopOnInteraction: false,
      }),
    ],
  );

  const handleCardKeyDown = (event, data) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      setSelectedItem(data);
    }
  };

  return (
    <>
      <section className="ortu-testimoni-slider-section">
        <div className="container-all">
          <div className="ortu-testimoni-slider-wrapper">
            <h2 className="ortu-testimoni-slider-title">Testimoni Orang Tua</h2>

            <div className="ortu-testimoni-slider-viewport" ref={emblaRef}>
              <div className="ortu-testimoni-slider-container">
                {dataTestimoniOrangTua.map((data, index) => (
                  <div
                    className="ortu-testimoni-slider-slide"
                    key={data?.id || index}>
                    <div
                      className="ortu-testimoni-slider-item"
                      role="button"
                      tabIndex={0}
                      aria-label={`Lihat testimoni ${data?.name || ""}`}
                      onClick={() => setSelectedItem(data)}
                      onKeyDown={(event) => handleCardKeyDown(event, data)}>
                      <TestimoniCardOrtuSiswa data={data} location={location} />

                      <span className="ortu-testimoni-slider-zoom">
                        <FiZoomIn />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div
          className="ortu-testimoni-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Testimoni ${selectedItem?.name || ""}`}
          onClick={() => setSelectedItem(null)}>
          <button
            type="button"
            className="ortu-testimoni-modal-close"
            aria-label="Tutup testimoni"
            onClick={() => setSelectedItem(null)}>
            <FiX />
          </button>

          <div
            className="ortu-testimoni-modal-content"
            onClick={(event) => event.stopPropagation()}>
            <TestimoniCardOrtuSiswa data={selectedItem} location={location} />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimoniOrtuSiswa;
