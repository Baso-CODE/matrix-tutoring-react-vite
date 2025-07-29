import React from "react";
import "./ProfesionalTeam.css";

const ProfesionalTeam = () => {
  return (
    <section className="profesional-team-section">
      <div className="profesional-team-container">
        <div className="profesional-team-content">
          <div className="profesional-team-inner">
            <h2 className="profesional-team-title">Our Professional Team</h2>
            <div className="profesional-team-image desktop-image">
              <img
                src="/images/about-us/about-us.webp"
                alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                width="1301"
                height="732"
                loading="lazy"
              />
            </div>
            {/* Gambar untuk mobile */}
            <div className="profesional-team-image mobile-image">
              <img
                src="/images/about-us/ABOUT-US-PORTRAIT.webp"
                alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                width="500"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfesionalTeam;
