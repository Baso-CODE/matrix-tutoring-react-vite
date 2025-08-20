import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import TableOfContents from "../../components/TableOfContent";
import LearningFeaturesLesPrivateTk from "../components/LearningFeaturesLesPrivateTk";
import LesPrivateTKHeader from "../components/LesPrivateTKHeader";

import { useParams } from "react-router-dom";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import MainLearningContent from "../components/MainLearningContent/MainLearningContent";
import StatistikImage from "../components/StatistikImage/StatistikImage";

const items = [
  {
    text: "Les Privat TK – Guru Les Privat Calistung",
    href: "#les-privat-tk",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Taman Kanak-Kanak",
        href: "#kegiatan-belajar-masa-taman-kanak-kanak",
      },
      {
        text: "Kegiatan Belajar Les Privat TK/Paud",
        href: "#kegiatan-belajar-les-privat-tk-paud",
      },
    ],
  },
  {
    text: "Pengajar Les Private TK/Paud",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private TK/Paud",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline TK/Paud",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring  ",
    href: "#program-les-private-matrix-tutoring",
  },
  {
    text: "Saat Ini, Matrix Tutoring Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-tutoring-private",
  },
];
const LesPrivateTKKota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kota?.kota || formatSlugToName(kotaSlug);
  const programName = "TK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("TK", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName}, Calistung, dan PAUD Terbaik di [LOKASI] - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName}, Calistung, dan PAUD Terbaik di ${nameCountry} - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-tk/${kotaSlug}`;

  const pageTitle = `📚 Les Privat TK di ${nameCountry} Terbaik #1 | Calistung, PAUD & Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat TK Terbaik di ${nameCountry} ✔️ Fokus Calistung & PAUD ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat TK di ${nameCountry} - Solusi Belajar Menyenangkan untuk Calistung & PAUD | Matrix Tutoring`;
  const ogDescription = `Berikan fondasi terbaik untuk anak Anda dengan les privat TK di ${nameCountry} dari Matrix Tutoring. Fokus pada calistung, PAUD, dan pengembangan minat belajar anak usia dini.`;
  const twitterTitle = `Les Privat TK Profesional di ${nameCountry} | Calistung & PAUD | Matrix Tutoring`;
  const twitterDescription = `Dukung tumbuh kembang anak Anda di ${nameCountry} dengan les privat TK profesional dari Matrix Tutoring. Belajar calistung dan PAUD jadi lebih menyenangkan dan efektif.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TK Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TK ${nameCountry}`,
    `Guru Calistung ${nameCountry}`,
    `Les PAUD ${nameCountry}`,
    `Les Privat Online TK ${nameCountry}`,
    `Les Privat Taman Kanak-Kanak ${nameCountry}`,
    `Program Belajar TK ${nameCountry}`,
    `Guru Les TK ${nameCountry}`,
    `Les Privat Calistung ${nameCountry}`,
    `Bimbel TK ${nameCountry}`,
    `Bimbingan Belajar PAUD ${nameCountry}`,
    `Tutor TK Berpengalaman ${nameCountry}`,
    `Materi TK ${nameCountry}`,
    `Persiapan SD ${nameCountry}`,
    `Les Privat Prasekolah ${nameCountry}`,
    `Belajar Membaca TK ${nameCountry}`,
    `Belajar Menulis TK ${nameCountry}`,
    `Belajar Berhitung TK ${nameCountry}`,
    `Private Tutor TK ${nameCountry}`,
    `Matrix Tutoring TK ${nameCountry}`,
    `Calistung Private ${nameCountry}`,
    `PAUD Private ${nameCountry}`,
    `Les Privat Anak Usia Dini ${nameCountry}`,
    `Stimulasi Belajar TK ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
  ].filter(Boolean);

  return (
    <div>
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
          <meta
            property="article:section"
            content={`Les Privat ${programName}`}
          />

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
                        "@id": "${baseUrl}/les-privat-tk", // URL program utama
                        "name": "Les Privat ${programName}"
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
        {/* <div className="container-all"> */}
        <HeroLesPrivate
          heading={displayedHeading}
          desc={heroData?.description}
          nameCountry={nameCountry}
          images={heroImageSrc}
        />
        <EmbrelaSlider />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateTKHeader />
        <LearningFeaturesLesPrivateTk />
        <MainLearningContent />
        <StatistikImage />
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
        <MasterTeacherV2 />
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
    </div>
  );
};

export default LesPrivateTKKota;
