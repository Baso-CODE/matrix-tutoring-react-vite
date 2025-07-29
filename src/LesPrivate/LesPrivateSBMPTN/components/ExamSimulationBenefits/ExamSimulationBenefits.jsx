import React from "react";
import { FileText, Clock, BarChart2, Lightbulb } from "lucide-react"; // Ikon yang relevan
import "./ExamSimulationBenefits.css"; // Import CSS

const simulationFeatures = [
  {
    icon: FileText,
    title: "Bank Soal Terupdate",
    description:
      "Akses ribuan soal UTBK/SNBT dan SBMPTN tahun-tahun sebelumnya, lengkap dengan pembahasan detail.",
  },
  {
    icon: Clock,
    title: "Simulasi Ujian Realistis",
    description:
      "Rasakan atmosfer ujian yang sesungguhnya dengan simulasi berwaktu dan format soal sesuai standar UTBK/SNBT.",
  },
  {
    icon: BarChart2,
    title: "Analisis Hasil Mendalam",
    description:
      "Dapatkan laporan performa komprehensif untuk mengidentifikasi kekuatan dan kelemahan Anda di setiap materi.",
  },
  {
    icon: Lightbulb,
    title: "Strategi Pengerjaan Soal",
    description:
      "Pelajari trik dan strategi efektif untuk mengerjakan soal UTBK/SNBT agar lebih cepat dan tepat.",
  },
];

const ExamSimulationBenefits = () => {
  return (
    <section id="exam-simulation-benefits" className="exam-simulation-section">
      <div className="exam-simulation-container">
        <h2 className="exam-simulation-title">
          Taklukkan UTBK/SNBT dengan Simulasi Ujian Profesional
        </h2>
        <p className="exam-simulation-subtitle">
          Latihan adalah kunci. Program les privat kami terintegrasi dengan
          simulasi ujian (Try Out) yang dirancang untuk memaksimalkan kesiapan
          Anda.
        </p>

        <div className="simulation-features-grid">
          {simulationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <IconComponent className="feature-icon" size={40} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExamSimulationBenefits;
