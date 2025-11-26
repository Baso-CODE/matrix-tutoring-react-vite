import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./TestimoniOrtuSiswa.css";
import { getAllTestimoniSiswaOrangTua } from "../../helper/request/getAllTestimoniSiswaOrangTua";
import TestimoniCardOrtuSiswa from "./TestimoniCardOrtuSiswa";

const TestimoniOrtuSiswa = ({ location }) => {
  const [dataTestimoniOrangTua, setDataTestimoniOrtu] = useState([]);

  useEffect(() => {
    const fetchDataOrangTua = async () => {
      try {
        const response = await getAllTestimoniSiswaOrangTua();
        setDataTestimoniOrtu(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchDataOrangTua();
  }, []);

  // Embla carousel instance
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 2, slidesToShow: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3, slidesToShow: 3 },
      },
      slidesToScroll: 1,
      slidesToShow: 1,
    },
    [Autoplay({ delay: 2800, stopOnInteraction: false })]
  );

  return (
    <section className="container-all">
      <div className="testimonial-slider-ortu-siswa-container">
        <h2 className="title-testimonial-orang-tua-siswa">
          Testimoni Orang Tua
        </h2>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {dataTestimoniOrangTua.map((data, index) => (
              <div className="embla__slide-tesimoni-ortu" key={index}>
                <TestimoniCardOrtuSiswa data={data} location={location} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniOrtuSiswa;
