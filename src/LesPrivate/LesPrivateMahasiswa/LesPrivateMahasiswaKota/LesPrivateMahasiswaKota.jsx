import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import Keunggulan from "../../../Components/Keunggulan/Keunggulan";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKabupatenLesPrivate from "../../components/ListKabupatenLesPrivate/ListKabupatenLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import CoreUniversityBenefits from "../components/CoreUniversityBenefits/CoreUniversityBenefits";
import LesPrivateMahasiswaHeader from "../components/LesPrivateMahasiswaHeader";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import StatistikImageMahasiswa from "../components/StatistikImageMahasiswa";
import StudentTestimonialsSlider from "../components/StudentTestimonialsSlider/StudentTestimonialsSlider";
import UniversitySuccessFlow from "../components/UniversitySuccessFlow/UniversitySuccessFlow";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";

const items = [
  {
    text: "Les Privat Mahasiswa",
    href: "#les-privat-mahasiswa",
    subItems: [
      {
        text: "Pentingnya Les Privat untuk Mahasiswa",
        href: "#pentingnya-les-privat-mahasiswa",
      },
      {
        text: "Jadwal Fleksibel dan Les Privat Online",
        href: "#jadwal-fleksibel-dan-les-privat-online",
      },
      {
        text: "List les privat datang ke rumah dan les privat online untuk mahasiswa seluruh Indonesia",
        href: "#list-les-privat-mahasiswa",
      },
    ],
  },
  {
    text: "Solusi Belajar Revolusioner untuk Mahasiswa",
    href: "#university-success-flow",
  },
  {
    text: "Mengapa Matrix Tutoring Pilihan Tepat?",
    href: "#core-university-benefits",
  },
  {
    text: "Apa Kata Mahasiswa Kami?",
    href: "#student-testimonials",
  },
  {
    text: "Pengajar Les Private Mahasiswa",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Mahasiswa",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Mahasiswa",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix  ",
    href: "#program-les-private-matrix-tutoring",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-tutoring-private",
  },
];

const LesPrivateMahasiswaKota = () => {
  const [kota, setKota] = useState({}); // Mengubah [] menjadi {}
  const [heroData, setHeroData] = useState(null);
  const { kotaSlug } = useParams();

  // Mengambil nama kota dari state, atau dari slug jika state belum terisi
  const nameCountry =
    kota?.kota ||
    kotaSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("MAHASISWA", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);

        setKota({
          kota: kotaSlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
        });
        setHeroData({
          heading:
            "Les Privat Mahasiswa di [LOKASI] - Pendampingan Akademis untuk Sukses di Perguruan Tinggi",
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat Mahasiswa di ${nameCountry} - Pendampingan Akademis untuk Sukses di Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kota
  const canonicalUrl = `${baseUrl}/les-privat-mahasiswa/${kotaSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `🎓 Les Privat Mahasiswa di ${nameCountry} Terbaik | Matrix Tutoring`;

  const descriptionContent = `🎯 Mahasiswa di ${nameCountry}, siap kuasai materi kuliah dan raih IPK tinggi? Matrix Tutoring hadir dengan Les Privat Mahasiswa terbaik di ${nameCountry}! Dapatkan bimbingan fleksibel dari pengajar profesional untuk semua jurusan & mata kuliah. Tingkatkan prestasimu, Konsultasi! ✨`;

  const ogTitle = `Les Privat Mahasiswa di ${nameCountry} - Solusi Belajar Efektif & Bimbingan Akademik | Matrix Tutoring`;
  const ogDescription = `Temukan program les privat mahasiswa yang dirancang khusus untuk memenuhi kebutuhan akademik Anda di ${nameCountry}. Mulai dari bimbingan mata kuliah, persiapan ujian, hingga pendampingan tugas akhir, Matrix Tutoring adalah pilihan terbaik untuk mahasiswa.`;
  const twitterTitle = `Les Privat Mahasiswa Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Dapatkan bimbingan les privat profesional untuk mahasiswa di ${nameCountry} dari Matrix Tutoring. Tingkatkan pemahaman materi, raih IPK tinggi, dan persiapkan diri menghadapi tantangan akademik dengan pengajar ahli.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Mahasiswa Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Mahasiswa ${nameCountry}`,
    `Les Mahasiswa ${nameCountry}`,
    `Bimbingan Mahasiswa ${nameCountry}`,
    `Tutor Mahasiswa ${nameCountry}`,
    `Les Privat Online Mahasiswa ${nameCountry}`,
    `Les Privat Offline Mahasiswa ${nameCountry}`,
    `Program Les Mahasiswa ${nameCountry}`,
    `Les Tugas Akhir ${nameCountry}`,
    `Bimbingan Skripsi ${nameCountry}`,
    `Les Mata Kuliah ${nameCountry}`,
    `Les Persiapan Ujian Mahasiswa ${nameCountry}`,
    `Les Matematika Mahasiswa ${nameCountry}`,
    `Les Fisika Mahasiswa ${nameCountry}`,
    `Les Kimia Mahasiswa ${nameCountry}`,
    `Les Biologi Mahasiswa ${nameCountry}`,
    `Les Ekonomi Mahasiswa ${nameCountry}`,
    `Les Akuntansi Mahasiswa ${nameCountry}`,
    `Les Statistika Mahasiswa ${nameCountry}`,
    `Les Pemrograman Mahasiswa ${nameCountry}`,
    `Les Bahasa Inggris Mahasiswa ${nameCountry}`,
    `Les TOEFL Mahasiswa ${nameCountry}`,
    `Les IELTS Mahasiswa ${nameCountry}`,
    `Matrix Tutoring Mahasiswa ${nameCountry}`,
    `Bimbel Mahasiswa ${nameCountry}`,
    `Kursus Mahasiswa ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
  ];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta name="description" content={descriptionContent} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Matrix Tutoring" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {keywords.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta property="article:section" content="Les Privat Mahasiswa" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta name="twitter:creator" content="@matrix_tutoring" />

        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "${canonicalUrl}#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${baseUrl}/les-privat-mahasiswa",
                        "name": "Les Privat Mahasiswa"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <HeroLesPrivate
        nameCountry={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <EmbrelaSlider />
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateMahasiswaHeader />
      <UniversitySuccessFlow />
      <CoreUniversityBenefits />
      <StudentTestimonialsSlider />
      <PopularCourses />
      {/* <ImpactStatistics /> */}
      <StatistikImageMahasiswa />
      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 />
      </section>
      <ProgramBelajarLesPrivat />
      <MatrixFeatures />
      <SuccessStoryLesPrivate />
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
      </section>

      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateMahasiswaKota;
