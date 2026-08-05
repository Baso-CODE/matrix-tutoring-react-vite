/* eslint-disable no-unused-vars */
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "lazysizes";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleCsWhatsAppClick } from "../../helper/csRotationHelper";
import { getAllSliderHeader2 } from "../../helper/request/getAllSliderHeader2Request";
import { getAllSliderHeader } from "../../helper/request/getAllSliderHeaderRequest";
import "./EmbrelaSlider.css";
import "./Slidertop.css";

const EmbrelaSlider = () => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader2, setSliderHeader2] = useState([]);

  // Embla hook with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1800, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    fetchSliderHeader();
    fetchSliderHeader_2();
  }, []);

  const fetchSliderHeader = async () => {
    try {
      const response = await getAllSliderHeader();
      setSliderHeader(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSliderHeader_2 = async () => {
    try {
      const response = await getAllSliderHeader2();
      setSliderHeader2(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const lazyLoadImage = (src) => (
    <img
      loading="eager"
      data-src={src}
      alt="Program Bimbel - les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
      className="lazyload"
    />
  );

  return (
    <React.Fragment>
      {/* Slider for desktop */}
      <div className="container-slider">
        <div className="slider-top desktop-only">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {sliderHeader.map((item, index) => (
                <div className="embla__slide top-slider" key={index}>
                  <div className="slider">
                    <Link
                      onClick={() => handleCsWhatsAppClick()}
                      target="_blank"
                      rel="noopener noreferrer">
                      {lazyLoadImage(item.url)}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider for mobile */}
        <div className="slider-top-2 mobile-only">
          <div className="embla" ref={emblaRef2}>
            <div className="embla__container">
              {sliderHeader2.map((item, index) => (
                <div className="embla__slide top-slider" key={index}>
                  <div className="slider">
                    <Link
                      onClick={() => handleCsWhatsAppClick()}
                      target="_blank"
                      rel="noopener noreferrer">
                      {lazyLoadImage(item.url)}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmbrelaSlider;
