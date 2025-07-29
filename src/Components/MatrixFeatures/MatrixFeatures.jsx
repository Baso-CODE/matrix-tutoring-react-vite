import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./MatrixFeature.css";

const whyMatrixFeatures = [
  {
    id: 1,
    text: "Lokasi Matrix di Pesona Khayangan dekat dengan Universitas Indonesia",
  },
  {
    id: 2,
    text: "Tutor dari UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan PTN Terbaik lainnya",
  },
  {
    id: 3,
    text: "Tutor adalah pengajar dengan IP tinggi dan berpengalaman",
  },
  {
    id: 4,
    text: "Tutor Matrix bisa menjadi Positive Role Model bagi siswa",
  },
  {
    id: 5,
    text: "Presensi Matrix untuk monitoring perkembangan prestasi siswa",
  },
  {
    id: 6,
    text: "Kurikulum Personal, sesuai dengan kebutuhan siswa",
  },
  {
    id: 7,
    text: "Evaluasi Progress Belajar secara Berkala",
  },
  {
    id: 8,
    text: "Kemudahan dalam pembayaran (via transfer)",
  },
  {
    id: 9,
    text: "CS dan Tim Support yang responsif dan solutif",
  },
  {
    id: 10,
    text: "Matrix berorientasi pada Pelayanan Terbaik",
  },
  {
    id: 11, // Menambahkan ID baru karena ada item tambahan
    text: "GRATIS Biaya Pendaftaran + Ada PROMO setiap hari",
  },
];

const availableSubjects = [
  "Les Privat Matematika",
  "Les Privat Fisika",
  "Les Privat Kimia",
  "Les Privat Biologi",
  "Les Privat Ekonomi",
  "Les Privat Akuntansi",
  "Les Privat Sejarah",
  "Les Privat Geografi",
  "Les Privat Sosiologi",
  "Les Privat Bahasa Inggris",
  "Les Privat Bahasa Indonesia",
  "dan berbagai mata pelajaran lain yang Anda butuhkan.",
];

const MatrixFeatures = () => {
  return (
    <section className="matrix-features-section">
      <div className="container-general">
        <div className="matrix-content-wrapper">
          {/* Kolom Kiri: Mengapa Harus Matrix */}
          <div className="matrix-why-us">
            <h2 className="matrix-heading">
              Mengapa Harus <span className="underline-text">Matrix</span>{" "}
            </h2>
            <p className="matrix-description">
              Kami bukan hanya les privat biasa. Temukan keunggulan Matrix yang
              membuat belajar Anda lebih efektif dan menyenangkan:
            </p>
            <ul className="why-us-list">
              {whyMatrixFeatures.map((feature) => (
                <li key={feature.id} className="why-us-item">
                  <FaCheckCircle className="feature-check-icon" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Kanan: Semua Mata Pelajaran */}
          <div className="matrix-subjects-offered">
            <h2 className="matrix-heading">
              Semua Mata Pelajaran{" "}
              <span className="underline-text">Tersedia</span>{" "}
            </h2>
            <p className="matrix-description">
              Apapun mata pelajaran yang Anda butuhkan, Les Privat Matrix siap
              mendampingi Anda. Kami menyediakan pengajar ahli untuk:
            </p>
            <ul className="subject-offered-list">
              {availableSubjects.map((subject, index) => (
                <li key={index} className="subject-offered-item">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixFeatures;
