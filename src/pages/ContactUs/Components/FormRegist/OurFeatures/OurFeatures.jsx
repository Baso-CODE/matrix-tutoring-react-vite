import {
  Users,
  Calendar,
  Wallet,
  GraduationCap,
  Globe,
  CheckCircle,
} from "lucide-react";
import React from "react";
import "./OurFeatures.css";
import FeatureItem from "./FeatureItem/FeatureItem";

const OurFeatures = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const features = [
    {
      icon: GraduationCap,
      title: "Guru Profesional & Berpengalaman",
      description:
        "Tutor kami adalah para pengajar yang terseleksi dan berpengalaman, menjamin kualitas pembelajaran yang terbaik.",
    },
    {
      icon: Users,
      title: "Bebas Pilih Guru",
      description:
        "Anda memiliki kebebasan penuh untuk memilih guru yang sesuai dengan kriteria dan gaya belajar Anda.",
    },
    {
      icon: Globe,
      title: "Sistem Belajar Fleksibel",
      description:
        "Pilih antara les privat online, guru datang ke rumah, atau kombinasi keduanya, menyesuaikan dengan kenyamanan Anda.",
    },
    {
      icon: GraduationCap,
      title: "Program Pembelajaran Lengkap",
      description:
        "Kami menyediakan program untuk berbagai jenjang, mulai dari TK, SD, SMP, SMA, Mahasiswa, hingga persiapan TKA, UTBK SNBT, OSN, CPNS, Kedinasan, dan program khusus lainnya.",
    },
    {
      icon: Calendar,
      title: "Jadwal Belajar Fleksibel",
      description:
        "Atur jadwal belajar sesuai dengan waktu luang siswa atau melalui kesepakatan bersama, membuat proses belajar lebih efisien.",
    },
    {
      icon: Wallet,
      title: "Kemudahan Pembayaran",
      description:
        "Lakukan pembayaran dengan mudah melalui transfer ke rekening Matrix Education.",
    },
    {
      icon: CheckCircle,
      title: "Free Biaya Pendaftaran",
      description:
        "Nikmati keuntungan bebas biaya pendaftaran. Mulai belajar tanpa beban biaya awal tambahan.",
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="our-features-container">
      <h2 className="section-title-our-features-contact">Keunggulan Kami</h2>
      <div className="features-list-our-features-contact">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OurFeatures;
