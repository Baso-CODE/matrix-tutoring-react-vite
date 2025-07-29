import React from "react";
import {
  Lightbulb,
  BookOpen,
  GraduationCap,
  Trophy,
  Rocket,
  CheckCircle,
} from "lucide-react"; // Ikon relevan

import "./PTNDreamPath.css"; // Import file CSS untuk styling

const dreamPathSteps = [
  {
    icon: Lightbulb,
    title: "Tahap 1: Pemetaan Potensi & Minat",
    description:
      "Identifikasi jurusan dan PTN yang sesuai dengan bakat, minat, dan potensi akademik siswa melalui asesmen awal.",
  },
  {
    icon: BookOpen,
    title: "Tahap 2: Penguasaan Materi Intensif",
    description:
      "Bimbingan mendalam untuk semua mata pelajaran SNBT, UTBK, SIMAK UI, KKI, dan ujian mandiri lainnya, fokus pada konsep esensial dan soal HOTS.",
  },
  {
    icon: GraduationCap,
    title: "Tahap 3: Strategi & Latihan Ujian",
    description:
      "Pembekalan strategi pengerjaan soal yang efektif, manajemen waktu, serta simulasi ujian berkala dengan analisis hasil komprehensif.",
  },
  {
    icon: Trophy,
    title: "Tahap 4: Mental & Kesiapan Psikologis",
    description:
      "Pendampingan untuk membangun mental juara, mengatasi stres, dan meningkatkan kepercayaan diri menghadapi persaingan ketat.",
  },
  {
    icon: Rocket,
    title: "Tahap 5: Bimbingan Karir & Jurusan",
    description:
      "Konsultasi personal untuk pilihan jurusan dan PTN, serta tips & trik lolos seleksi wawancara atau portofolio (jika ada).",
  },
  {
    icon: CheckCircle,
    title: "Tahap 6: Sukses Masuk PTN Impian!",
    description:
      "Wujudkan impian Anda untuk diterima di PTN favorit. Kami berkomitmen mengantar Anda hingga gerbang kampus impian.",
  },
];

const PTNDreamPath = () => {
  return (
    <section id="ptn-dream-path" className="ptn-dream-path-section">
      <div className="ptn-dream-path-container">
        <h2 className="ptn-dream-path-title">
          Jalur Sukses Menuju PTN Impian Anda
        </h2>
        <p className="ptn-dream-path-subtitle">
          Kami membimbing setiap langkah perjalanan Anda dari SMA hingga gerbang
          Perguruan Tinggi Negeri favorit.
        </p>

        <div className="dream-path-grid">
          {dreamPathSteps.map((step, index) => (
            <div className="dream-path-card" key={index}>
              <div className="dream-path-icon-wrapper">
                <span className="dream-path-step-number">{index + 1}</span>{" "}
                {/* Nomor langkah */}
                <step.icon className="dream-path-icon" size={32} />
              </div>
              <h3 className="dream-path-card-title">{step.title}</h3>
              <p className="dream-path-card-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="ptn-dream-path-cta-wrapper">
          <p className="ptn-dream-path-cta-text">
            Siap memulai perjalanan menuju kampus impian Anda?
          </p>
          <a
            href="#pilihan-program-les-private"
            className="ptn-dream-path-cta-button">
            Daftar Les Privat SMA Sekarang!
          </a>
        </div>
      </div>
    </section>
  );
};

export default PTNDreamPath;
