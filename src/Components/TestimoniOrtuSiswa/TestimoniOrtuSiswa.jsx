import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./TestimoniOrtuSiswa.css";
import { getAllTestimoniSiswaOrangTua } from "../../helper/request/getAllTestimoniSiswaOrangTua";

const TestimoniOrtuSiswa = () => {
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
    <div className="testimonial-slider-ortu-siswa-container">
      <h2>Testimoni Orang Tua</h2>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {dataTestimoniOrangTua.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
              <img
                loading="lazy"
                src={image.link_image}
                alt={`Testimoni Orang Tua ${image.name}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimoniOrtuSiswa;
