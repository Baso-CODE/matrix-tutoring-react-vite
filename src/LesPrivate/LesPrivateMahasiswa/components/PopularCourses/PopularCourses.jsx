import React from "react";
import {
  BookText,
  TrendingUp,
  Users,
  FlaskConical,
  Code,
  Stethoscope,
} from "lucide-react";
import Marquee from "react-fast-marquee"; // Import Marquee component
import "./PopularCourses.css";

const courseCategories = [
  {
    category: "Sains & Teknik",
    icon: FlaskConical,
    courses: [
      "Kalkulus",
      "Fisika Dasar",
      "Kimia Organik",
      "Statistika",
      "Algoritma & Struktur Data",
      "Mekanika Fluida",
    ],
  },
  {
    category: "Ekonomi & Bisnis",
    icon: TrendingUp,
    courses: [
      "Akuntansi Keuangan",
      "Ekonomi Makro",
      "Manajemen Pemasaran",
      "Statistika Bisnis",
      "Pengantar Bisnis",
      "Ekonomi Mikro",
    ],
  },
  {
    category: "Sosial & Humaniora",
    icon: BookText,
    courses: [
      "Sosiologi",
      "Psikologi Perkembangan",
      "Ilmu Politik",
      "Hukum Perdata",
      "Sejarah Indonesia",
    ],
  },
  {
    category: "Bahasa & Komunikasi",
    icon: Users,
    courses: [
      "Bahasa Inggris Bisnis",
      "TOEFL/IELTS Preparation",
      "Public Speaking",
      "Penulisan Akademik",
    ],
  },
  {
    category: "IT & Komputer",
    icon: Code,
    courses: [
      "Pemrograman Python",
      "Basis Data",
      "Jaringan Komputer",
      "Pengembangan Web",
      "Kecerdasan Buatan",
    ],
  },
  {
    category: "Kesehatan",
    icon: Stethoscope,
    courses: [
      "Anatomi",
      "Fisiologi",
      "Farmakologi",
      "Biostatistika",
      "Epidemiologi",
    ],
  },
];

const PopularCourses = () => {
  return (
    <section id="popular-courses" className="popular-courses-section">
      <div className="popular-courses-container">
        <h2 className="popular-courses-title">
          Mata Kuliah Unggulan yang Kami Ajarkan
        </h2>
        <p className="popular-courses-subtitle">
          Apapun jurusan Anda, kami siap membantu Anda menguasai materi kuliah
          yang menantang.
        </p>

        {/* Marquee Container */}
        <div className="marquee-wrapper">
          {/* Menggunakan komponen Marquee dari react-fast-marquee */}
          <Marquee
            speed={30} // Kecepatan gulir (sesuaikan sesuai keinginan)
            gradient={false} // Atur true jika ingin efek gradasi di ujung
            pauseOnHover={true} // Jeda saat mouse di atas marquee
            // direction="left" // Default ke kiri, bisa diubah ke "right"
          >
            {/* Hanya satu set konten, Marquee akan menduplikasinya secara internal */}
            {courseCategories.map((cat, index) => {
              const IconComponent = cat.icon;
              return (
                <div key={index} className="category-card marquee-item">
                  <div className="category-header">
                    <IconComponent className="category-icon" size={60} />
                    <h3 className="category-name">{cat.category}</h3>
                  </div>
                  <ul className="course-list">
                    {cat.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Marquee>
        </div>

        <p className="request-course-note">
          Tidak menemukan mata kuliah Anda?{" "}
          <a href="/kontak" className="request-course-link">
            Hubungi kami
          </a>{" "}
          untuk penyesuaian program!
        </p>
      </div>
    </section>
  );
};

export default PopularCourses;
