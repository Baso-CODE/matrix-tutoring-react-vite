import { CheckCircle } from "lucide-react";
import { useState } from "react";

import "./TKAPillarsShowcase.css";

const TKAPillarsShowcase = () => {
  const [hoveredPillarIndex, setHoveredPillarIndex] = useState(null); // State untuk melacak indeks kartu yang dihover

  return (
    <section id="tka-pillars-showcase" className="tka-pillars-section">
      <div className="tka-pillars-container">
        <h2 className="tka-pillars-title">
          Fokus Utama TKA: <span className="highlight-text-blue">Literasi</span>{" "}
          & <span className="highlight-text-orange">Numerasi</span>
        </h2>
        <p className="tka-pillars-subtitle">
          Matrix Tutoring membimbing siswa menguasai dua fondasi krusial ini
          dengan metode yang terarah dan efektif.
        </p>

        <div className="pillars-content-wrapper">
          {/* Literasi Pillar */}
          <div
            className={`pillar-card literasi-pillar ${
              hoveredPillarIndex !== null && hoveredPillarIndex !== 0
                ? "blurred"
                : ""
            }`}
            onMouseEnter={() => setHoveredPillarIndex(0)}
            onMouseLeave={() => setHoveredPillarIndex(null)}>
            <div className="pillar-icon-header">
              {/* <BookOpen className="pillar-main-icon" size={60} /> */}
              <img
                loading="lazy"
                src="/images/les-private/ksm/fokus-utama-tka/literasi-membaca.webp"
                alt="Icon membaca"
                className="pillar-main-icon"
              />
              <h3 className="pillar-main-title">Literasi Membaca</h3>
            </div>
            <p className="pillar-description">
              Meningkatkan kemampuan memahami, menganalisis, dan merefleksikan
              berbagai jenis teks.
            </p>
            <ul className="pillar-features-list">
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Pemahaman
                Teks Informatif
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Analisis
                Teks Sastra
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Menemukan
                Ide Pokok
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Inferensi
                & Evaluasi Konten
              </li>
            </ul>
          </div>

          {/* Separator / Connecting Element (Optional, can be visual line in CSS) */}
          <div className="pillar-separator"></div>

          {/* Numerasi Pillar */}
          <div
            className={`pillar-card numerasi-pillar ${
              hoveredPillarIndex !== null && hoveredPillarIndex !== 1
                ? "blurred"
                : ""
            }`}
            onMouseEnter={() => setHoveredPillarIndex(1)}
            onMouseLeave={() => setHoveredPillarIndex(null)}>
            <div className="pillar-icon-header">
              <img
                loading="lazy"
                src="/images/les-private/ksm/fokus-utama-tka/numerasi.webp"
                alt="Icon Numerasi"
                className="pillar-main-icon"
              />
              <h3 className="pillar-main-title">Numerasi</h3>
            </div>
            <p className="pillar-description">
              Mengembangkan penalaran matematis untuk menyelesaikan masalah
              kontekstual sehari-hari.
            </p>
            <ul className="pillar-features-list">
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Bilangan &
                Operasinya
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Geometri &
                Pengukuran
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Data &
                Ketidakpastian
              </li>
              <li>
                <CheckCircle size={20} className="list-check-icon" /> Aljabar
                Sederhana
              </li>
            </ul>
          </div>
        </div>

        {/* General TKA Benefits */}
        <div className="general-benefits-section">
          <h3 className="general-benefits-title">
            Persiapan TKA yang Komprehensif
          </h3>
          <div className="general-benefits-grid">
            <div className="benefit-item">
              <img
                loading="lazy"
                src={"/images/les-private/ksm/fokus-utama-tka/interaktif.webp"}
                alt={"Icon Metode Pembelajaran Interaktif"}
                className="benefit-icon"
              />
              <p>Metode Pembelajaran Interaktif</p>
            </div>
            <div className="benefit-item">
              <img
                loading="lazy"
                src={"/images/les-private/ksm/fokus-utama-tka/adaptif.webp"}
                alt={"Icon Simulasi Ujian Adaptif"}
                className="benefit-icon"
              />
              <p>Simulasi Ujian Adaptif</p>
            </div>
            <div className="benefit-item">
              <img
                loading="lazy"
                src={"/images/les-private/ksm/fokus-utama-tka/analisis.webp"}
                alt={"Icon Analisis Hasil Mendalam"}
                className="benefit-icon"
              />
              <p>Analisis Hasil Mendalam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TKAPillarsShowcase;
