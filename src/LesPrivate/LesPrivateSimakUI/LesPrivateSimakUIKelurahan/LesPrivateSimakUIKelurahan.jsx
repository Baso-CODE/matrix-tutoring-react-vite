import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import FlowBelajarSimakUI from "../components/FlowBelajarSimakUI/FlowBelajarSimakUI";
import LesPrivateSimakUIHeader from "../components/LesPrivateSimakUIHeader";
import ProgramSpesialisSimak from "../components/ProgramSpesialisSimak/ProgramSpesialisSimak";
import WhyShouldYouTake from "../components/WhyShouldYouTake";
import { items } from "../LesPrivateSimakUIKecamatan/LesPrivateSimakUIKecamatan";

const LesPrivateSimakUIKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);
  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  const nameCountry =
    kelurahan?.kelurahan ||
    kelurahanSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const programName = "SIMAK UI";

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const kotaParentName = formatSlugToName(kotaSlug);
  const kabupatenParentName = formatSlugToName(kabupatenSlug);
  const kecamatanParentName = formatSlugToName(kecamatanSlug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SIMAK-UI", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Persiapan Terbaik Menuju Universitas Indonesia`,
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, programName]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Persiapan Terbaik Menuju Universitas Indonesia`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/les-privat-simak-ui/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

  const pageTitle = `📚 Les Privat SIMAK UI di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SIMAK UI Terbaik di ${nameCountry} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SIMAK UI di ${nameCountry} - Strategi Jitu Lolos Universitas Indonesia | Matrix Tutoring`;
  const ogDescription = `Bersama Matrix Tutoring, capai impian kuliah di Universitas Indonesia dengan les privat SIMAK UI terbaik di ${nameCountry}. Pembelajaran terstruktur dan guru berpengalaman.`;
  const twitterTitle = `Les Privat SIMAK UI Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Tingkatkan peluang Anda lolos SIMAK UI di ${nameCountry} dengan les privat profesional dari Matrix Tutoring. Fokus pada materi esensial dan strategi mengerjakan soal.`;

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SIMAK UI Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Simak UI ${nameCountry}`,
    `Les Privat Universitas Indonesia ${nameCountry}`,
    `Guru Privat Simak UI ${nameCountry}`,
    `Guru Les Privat Simak UI ${nameCountry}`,
    `Bimbel Simak UI ${nameCountry}`,
    `Bimbingan Belajar Simak UI ${nameCountry}`,
    `Les Privat Online Simak UI ${nameCountry}`,
    `Les Privat Offline Simak UI ${nameCountry}`,
    `Program Belajar Simak UI ${nameCountry}`,
    `Program Les Universitas Indonesia ${nameCountry}`,
    `Guru Les Matematika Simak UI ${nameCountry}`,
    `Les Matematika Simak UI ${nameCountry}`,
    `Les IPA Simak UI ${nameCountry}`,
    `Les Bahasa Inggris Simak UI ${nameCountry}`,
    `Tutor Simak UI Berpengalaman ${nameCountry}`,
    `Les Privat Mata Pelajaran Simak UI ${nameCountry}`,
    `Les Privat Bahasa Indonesia Simak UI ${nameCountry}`,
    `Les Privat Fisika Simak UI ${nameCountry}`,
    `Les Privat Kimia Simak UI ${nameCountry}`,
    `Les Privat Biologi Simak UI ${nameCountry}`,
    `Les Privat Ekonomi Simak UI ${nameCountry}`,
    `Les Privat Geografi Simak UI ${nameCountry}`,
    `Matrix Tutoring Simak UI ${nameCountry}`,
    `Bimbel Online Simak UI ${nameCountry}`,
    `Kursus Simak UI ${nameCountry}`,
    `Strategi Lolos Simak UI ${nameCountry}`,
    `Soal Simak UI ${nameCountry}`,
    `Pembahasan Soal Simak UI ${nameCountry}`,
    `Persiapan SIMAK UI ${nameCountry}`,
    `Try Out SIMAK UI ${nameCountry}`,
    `Ujian Masuk UI ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug
      .replace(/-/g, " ")
      .toLowerCase()`Les Privat Simak UI ${kecamatanParentName}`,
    `Les Privat Simak UI ${kabupatenParentName}`,
    `Les Privat Simak UI ${kotaParentName}`,
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
                        "@id": "${baseUrl}/les-privat-simak-ui", // URL program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-simak-ui/${kotaSlug}", // URL kota induk
                        "name": "Les Privat ${programName} di ${kotaParentName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "4",
                      "item": {
                        "@id": "${baseUrl}/les-privat-simak-ui/${kotaSlug}/${kabupatenSlug}", // URL kabupaten induk
                        "name": "Les Privat ${programName} di ${kabupatenParentName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "5",
                      "item": {
                        "@id": "${baseUrl}/les-privat-simak-ui/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", // URL kecamatan induk
                        "name": "Les Privat ${programName} di ${kecamatanParentName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "6",
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
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
        location={nameCountry}
      />

      {/* <EmbrelaSlider /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSimakUIHeader location={nameCountry} />
      <TestimoniWaSNBT location={nameCountry} />
      <ProfileMatrixTutoring
        title={"Simak UI KKI Terbaik"}
        location={nameCountry}
      />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
      <WhyShouldYouTake />
      <ProgramSpesialisSimak />
      <FlowBelajarSimakUI location={nameCountry} />
      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 location={nameCountry} />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew location={nameCountry} />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram location={nameCountry} />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions location={nameCountry} />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 location={nameCountry} />
      </section>
      <ProgramBelajarLesPrivat location={nameCountry} />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate location={nameCountry} />
      <TestimoniOrtuSiswa location={nameCountry} />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSimakUIKelurahan;
