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
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import ListKecamatanLesPrivate from "../../components/ListKecamatanLesPrivate/ListKecamatanLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSMAHeader from "../components/LesPrivateSMAHeader";
import MatrixDifferentiationSMA from "../components/MatrixDifferentiationSMA/MatrixDifferentiationSMA";
import PTNSuccessStrategy from "../components/PTNSuccessStrategy/PTNSuccessStrategy";
import StatistikImageSMA from "../components/StatistikImageSMA";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";

const items = [
  {
    text: "Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online",
    href: "#les-privat-sma",
    subItems: [
      {
        text: "Kurikulum dan Mata Pelajaran",
        href: "#kurikulum-dan-mata-pelajaran",
      },

      {
        text: "Pengajar Berkualitas dan Terpercaya",
        href: "#pengajar-berkualitas-sma",
      },
    ],
  },
  {
    text: "Strategi Lolos PTN: Pendekatan Modern",
    href: "#ptn-success-strategy",
  },
  {
    text: "Mengapa Memilih Matrix Tutoring",
    href: "#matrix-differentiation-sma",
  },
  {
    text: "Pengajar Les Private SMA",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMA",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMA",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring",
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
const LesPrivateSMAKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { kabupatenSlug, kotaSlug } = useParams();

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry =
    kabupaten?.kota_kabupaten || formatSlugToName(kabupatenSlug);

  const kotaParentName = formatSlugToName(kotaSlug);

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten = await getAllKotaKabupatenBySlug(
          kabupatenSlug
        );
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("SMA", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Fallback jika API gagal, set data secara manual dari slug
        setKabupaten({
          kota_kabupaten: formatSlugToName(kabupatenSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kabupaten
  const canonicalUrl = `${baseUrl}/les-privat-sma/${kotaSlug}/${kabupatenSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `📚 Les Privat SMA di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMA Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMA di ${nameCountry} - Solusi Belajar Efektif untuk Sekolah Menengah Atas | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMA dengan les privat terbaik di ${nameCountry} dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMA Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMA di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas ${nameCountry}`,
    `Guru Privat SMA ${nameCountry}`,
    `Guru Les Privat SMA ${nameCountry}`,
    `Bimbel SMA ${nameCountry}`,
    `Bimbingan Belajar SMA ${nameCountry}`,
    `Les Privat Online SMA ${nameCountry}`,
    `Les Privat Offline SMA ${nameCountry}`,
    `Program Belajar SMA ${nameCountry}`,
    `Program Les Sekolah Menengah Atas ${nameCountry}`,
    `Guru Les Matematika SMA ${nameCountry}`,
    `Les Matematika SMA ${nameCountry}`,
    `Les IPA SMA ${nameCountry}`,
    `Les Bahasa Inggris SMA ${nameCountry}`,
    `Tutor SMA Berpengalaman ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA ${nameCountry}`,
    `Les Privat Fisika SMA ${nameCountry}`,
    `Les Privat Kimia SMA ${nameCountry}`,
    `Les Privat Biologi SMA ${nameCountry}`,
    `Les Privat Ekonomi SMA ${nameCountry}`,
    `Les Privat Geografi SMA ${nameCountry}`,
    `Matrix Tutoring SMA ${nameCountry}`,
    `Bimbel Online SMA ${nameCountry}`,
    `Kursus SMA ${nameCountry}`,
    `Persiapan Ujian SMA ${nameCountry}`,
    `UN SMA ${nameCountry}`,
    `UTBK SMA ${nameCountry}`,
    `Persiapan Masuk PTN ${nameCountry}`,
    `Tingkat SMA ${nameCountry}`,
    `Materi SMA ${nameCountry}`,
    `PR SMA ${nameCountry}`,
    `Remedi SMA ${nameCountry}`,
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `Les Privat SMA ${kotaParentName}`,
  ].filter(Boolean);

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
                        "@id": "${baseUrl}/les-privat-sma", // URL program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-sma/${kotaSlug}", // URL kota induk
                        "name": "Les Privat ${programName} di ${kotaParentName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "4",
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
      <LesPrivateSMAHeader />
      <PTNSuccessStrategy />
      <MatrixDifferentiationSMA />
      <StatistikImageSMA />
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

export default LesPrivateSMAKabupaten;
