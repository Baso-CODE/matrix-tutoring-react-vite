import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./MasterTeacherV2.css";

const MasterTeacherV2 = () => {
  const masterTeacherImages = [
    "/images/master/1.webp",
    "/images/master/2.webp",
    "/images/master/3.webp",
    "/images/master/4.webp",
    "/images/master/5.webp",
    "/images/master/6.webp",
    "/images/master/7.webp",
    "/images/master/8.webp",
    "/images/master/9.webp",
  ];
  const masterTeacherImages2 = [
    "/images/master/10.webp",
    "/images/master/11.webp",
    "/images/master/12.webp",
    "/images/master/13.webp",
    "/images/master/14.webp",
    "/images/master/15.webp",
    "/images/master/16.webp",
    "/images/master/17.webp",
    "/images/master/18.webp",
  ];

  // Instans Embla carousel PERTAMA untuk masterTeacherImages
  const [emblaRef1] = useEmblaCarousel(
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

  // Instans Embla carousel KEDUA untuk masterTeacherImages2
  const [emblaRef2] = useEmblaCarousel(
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
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="testimonial-slider-ortu-siswa-container">
      <h2>Master Teacher Matrix</h2>

      <div className="embla" ref={emblaRef1}>
        <div className="embla__container">
          {masterTeacherImages.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
              <img
                loading="lazy"
                src={image}
                alt={`Master Teacher ${index + 1}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Kedua */}
      <div className="embla" ref={emblaRef2}>
        <div className="embla__container">
          {masterTeacherImages2.map((image, index) => (
            <div className="embla__slide-tesimoni-ortu" key={index}>
              <img
                loading="lazy"
                src={image}
                alt={`Master Teacher ${index + 10}`}
                className="testimonial-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MasterTeacherV2;
