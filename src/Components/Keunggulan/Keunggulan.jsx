import React from "react";
import "./Keunggulan.css";

const Keunggulan = () => {
  const keunggulanData = [
    "/images/keunggulan/fitur-pelayanan-terbaik.webp",
    "/images/keunggulan/hasil-membuktikan.webp",
    "/images/keunggulan/kurikulum-personal.webp",
    "/images/keunggulan/intensive-quiz.webp",
    "/images/keunggulan/program-lengkap.webp",
    "/images/keunggulan/pengajar-berkualitas.webp",
    "/images/keunggulan/quality-control.webp",
    "/images/keunggulan/smart-methode.webp",
  ];

  return (
    <React.Fragment>
      <div className="parent-box-keunggulan">
        <h2 className="title-keunggulan">
          <img
            loading="lazy"
            className="icon-keunggulan"
            src={"/images/icon-keunggulan.webp"}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
          Keunggulan
        </h2>
        <div className="parent-card-keunggulan">
          {keunggulanData.map((item, index) => (
            <img
              loading="lazy"
              key={index}
              className="keunggulan-img"
              src={item}
              alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Keunggulan;
