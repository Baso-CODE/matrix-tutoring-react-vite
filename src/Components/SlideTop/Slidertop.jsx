import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getAllSliderHeader2 } from "../../helper/request/getAllSliderHeader2Request";
import { getAllSliderHeader } from "../../helper/request/getAllSliderHeaderRequest";
import "./Slidertop.css";

const Slidertop = () => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader2, setSliderHeader2] = useState([]);

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Custom Dot component
  const CustomDot = ({ onClick, active }) => (
    <button
      onClick={onClick}
      style={{
        background: active ? "#04397D" : "#D1D5DB",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        border: "none",
        margin: "0 5px",
        cursor: "pointer",
      }}
    />
  );

  return (
    <React.Fragment>
      <div className="slider-top desktop-only">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          customDot={<CustomDot />}
          arrows={false}>
          {sliderHeader.map((item, index) => (
            <div className="top-slider" key={index}>
              <div className="slider">
                <a
                  href="https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix%20Tutoring.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    loading="eager"
                    src={item.url}
                    alt="Program Bimbel - les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                  />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="slider-top-2 mobile-only">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          customDot={<CustomDot />}
          arrows={false}>
          {sliderHeader2.map((item, index) => (
            <div className="top-slider" key={index}>
              <div className="slider">
                <a
                  href="https://api.whatsapp.com/send?phone=6285747281466&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com,%20Saya%20ingin%20tanya%20program%20belajar%20yang%20ada%20di%20Matrix%20Tutoring.%20Apa%20saja%20jenis%20program%20belajar%20dan%20pilihan%20paket%20sesinya?"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    loading="eager"
                    src={item.url}
                    alt="Program Bimbel - les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                  />
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default Slidertop;
