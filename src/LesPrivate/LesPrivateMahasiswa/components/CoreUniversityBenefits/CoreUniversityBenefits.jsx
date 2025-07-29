import { useState } from "react";

import "./CoreUniversityBenefits.css";

const benefits = [
  {
    id: 1,
    icon: "/images/les-private/mahasiswa/core-benefit/award.webp",
    title: "Pengajar Ahli Bidang",
    description:
      "Dibimbing langsung oleh Dosen, Praktisi, dan Alumni Universitas terkemuka yang ahli di setiap mata kuliah.",
  },
  {
    id: 2,
    icon: "/images/les-private/mahasiswa/core-benefit/tarfet.webp",
    title: "Kurikulum Terpersonalisasi",
    description:
      "Materi dan pendekatan belajar disesuaikan spesifik dengan kebutuhan jurusan, mata kuliah, dan gaya belajar Anda.",
  },
  {
    id: 3,
    icon: "/images/les-private/mahasiswa/core-benefit/fleksibel.webp",
    title: "Jadwal Belajar Fleksibel",
    description:
      "Sesuaikan sesi les dengan padatnya jadwal kuliah Anda. Belajar efektif, kapan pun dan di mana pun.",
  },
  {
    icon: "/images/les-private/mahasiswa/core-benefit/zap.webp",
    title: "Solusi Cepat & Tepat",
    description:
      "Dapatkan pemahaman mendalam, strategi mengerjakan tugas, hingga persiapan ujian yang efisien dan solutif.",
  },
  {
    id: 5,
    icon: "/images/les-private/mahasiswa/core-benefit/hardrive.webp",
    title: "Akses Materi & Bank Soal Digital",
    description:
      "Perpustakaan digital lengkap dengan modul, video, dan ribuan soal latihan yang bisa diakses 24/7.",
  },
  {
    id: 6,
    icon: "/images/les-private/mahasiswa/core-benefit/dukungan.webp",
    title: "Dukungan Akademik Berkelanjutan",
    description:
      "Pendampingan tidak hanya saat sesi les, tapi juga konsultasi dan motivasi untuk menjaga performa akademik Anda.",
  },
];

const CoreUniversityBenefits = () => {
  const [hoveredBenefitId, setHoveredBenefitId] = useState(null); // State untuk melacak ID kartu yang dihover

  return (
    <section id="core-university-benefits" className="core-benefits-section">
      <div className="core-benefits-container">
        <h2 className="core-benefits-title">
          Mengapa Matrix Tutoring Adalah Pilihan Tepat untuk Mahasiswa?
        </h2>
        <p className="core-benefits-subtitle">
          Kami memahami tantangan kuliah. Dapatkan bimbingan profesional yang
          fokus pada hasil dan kesuksesan akademik Anda.
        </p>

        <div className="benefits-grid">
          {benefits.map(
            (
              benefit // Menggunakan benefit.id sebagai key
            ) => (
              <div
                className={`benefit-item ${
                  hoveredBenefitId !== null && hoveredBenefitId !== benefit.id
                    ? "blurred"
                    : ""
                }`}
                key={benefit.id} // Gunakan ID unik sebagai key
                onMouseEnter={() => setHoveredBenefitId(benefit.id)}
                onMouseLeave={() => setHoveredBenefitId(null)}>
                <div className="benefit-icon-wrapper">
                  {/* <benefit.icon className="benefit-icon" size={48} /> */}
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className=" benefit-icon"
                    loading="lazy"
                  />
                </div>
                <h3 className="benefit-item-title">{benefit.title}</h3>
                <p className="benefit-item-description">
                  {benefit.description}
                </p>
              </div>
            )
          )}
        </div>

        {/* Tidak ada tombol CTA "Daftar Sekarang" di sini */}
      </div>
    </section>
  );
};

export default CoreUniversityBenefits;
