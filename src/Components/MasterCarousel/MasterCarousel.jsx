/* eslint-disable no-unused-vars */
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "lazysizes";
import React from "react";
import "./MasterCarousel.css";

const images = [
  {
    id: 1,
    src: "/images/guru/1.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 1 - Matrix Tutoring ",
  },
  {
    id: 2,
    src: "/images/guru/2.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 2 - Matrix Tutoring ",
  },
  {
    id: 3,
    src: "/images/guru/3.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 3 - Matrix Tutoring ",
  },
  {
    id: 4,
    src: "/images/guru/4.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 4 - Matrix Tutoring ",
  },
  {
    id: 5,
    src: "/images/guru/5.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 5 - Matrix Tutoring ",
  },
  {
    id: 6,
    src: "/images/guru/6.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 6 - Matrix Tutoring ",
  },
  {
    id: 7,
    src: "/images/guru/7.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 7 - Matrix Tutoring ",
  },
  {
    id: 8,
    src: "/images/guru/8.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 8 - Matrix Tutoring ",
  },
  {
    id: 9,
    src: "/images/guru/9.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 9 - Matrix Tutoring ",
  },
  {
    id: 10,
    src: "/images/guru/10.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 10 - Matrix Tutoring ",
  },
  {
    id: 11,
    src: "/images/guru/11.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 11 - Matrix Tutoring ",
  },
  {
    id: 12,
    src: "/images/guru/12.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 12 - Matrix Tutoring ",
  },
  {
    id: 13,
    src: "/images/guru/13.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 13 - Matrix Tutoring ",
  },
  {
    id: 14,
    src: "/images/guru/14.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 14 - Matrix Tutoring ",
  },
  {
    id: 15,
    src: "/images/guru/15.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 15 - Matrix Tutoring ",
  },
  {
    id: 16,
    src: "/images/guru/16.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 16 - Matrix Tutoring ",
  },
  {
    id: 17,
    src: "/images/guru/17.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 17 - Matrix Tutoring ",
  },
  {
    id: 18,
    src: "/images/guru/18.png",
    alt: "les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) 18 - Matrix Tutoring ",
  },
];

const MasterCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1500, stopOnInteraction: false }),
  ]);

  return (
    <div className="carousel-container-master">
      <h2 className="carousel-title">Master Teacher Matrix</h2>
      <div className="embla-master" ref={emblaRef}>
        <div className="embla-master-embla__container">
          {images.map((image) => (
            <div className="embla__slide-master-carouser" key={image.id}>
              <div className="panel-master-teacher space-x-4">
                <img
                  loading="lazy"
                  src={image.src}
                  alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                  className="carousel-image-master-teacher"
                  width="1145"
                  height="1145"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="embla__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className="embla__dot"
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default MasterCarousel;
