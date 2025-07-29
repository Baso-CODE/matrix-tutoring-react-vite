import React from "react";
import Marquee from "react-fast-marquee";
import "./MediaMassaMarquee.css";

const images = [
  "/images/media/kompas.webp",
  "/images/media/krjogja.webp",
  "/images/media/idn.webp",
  "/images/media/kumparan.webp",
  "/images/media/liputan.webp",
  "/images/media/jogja-aja.webp",
  "/images/media/tribunjogja.webp",
];

const MediaMassaMarquee = () => {
  return (
    <div className="container-media-marquee">
      <div className="title-container-media-marquee">
        <h2 className="title-container-media-marquee-h2">
          Telah Diliput oleh:
        </h2>
      </div>
      <div className="gradient-overlay" />
      {/* Title */}
      <div className="marquee-container-media-marquee">
        {/* Horizontal Marquee */}
        <Marquee
          direction="left"
          speed={50}
          gradient={false} // No gradient effect
          className="marquee-media">
          {images.map((src, index) => (
            <img
              loading="lazy"
              key={index}
              src={src}
              alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring ${
                index + 1
              }`}
            />
          ))}
        </Marquee>
      </div>

      <div className="marquee-container-media-marquee">
        {/* Reverse Horizontal Marquee */}
        <Marquee
          direction="right"
          speed={50}
          gradient={false} // No gradient effect
          className="marquee-media">
          {images.map((src, index) => (
            <img
              loading="lazy"
              key={index}
              src={src}
              alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring ${
                index + 1
              }`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MediaMassaMarquee;
