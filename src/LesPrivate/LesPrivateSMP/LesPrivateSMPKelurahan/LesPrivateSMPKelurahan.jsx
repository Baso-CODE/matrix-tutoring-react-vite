import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import Keunggulan from "../../../Components/Keunggulan/Keunggulan";
import MatrixFeatures from "../../../Components/MatrixFeatures/MatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import PengajarLestPrivate from "../../../Components/PengajarLestPrivate/PengajarLestPrivate";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivat from "../../../Components/ProgramLesPrivate/ProgramLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSMPHeader from "../components/LesPrivateSMPHeader";

import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import AdaptiveLearningSMP from "../components/AdaptiveLearningSMP/AdaptiveLearningSMP";
import StatistikImageSMP from "../components/StatistikImageSMP";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
const items = [
  {
    text: "Les Privat SMP – Guru Les Privat SMP ke Rumah dan Bimbel Online",
    href: "#les-privat-smp",
    subItems: [
      {
        text: "Pilihan Bahasa dan Kurikulum",
        href: "#pilihan-bahasa-dan-kurikulum",
      },

      {
        text: "Pengajar Berkualitas dan Fleksibilitas",
        href: "#pengajar-berkualitas-dan-fleksibilitas",
      },
    ],
  },
  {
    text: "Pendekatan Pembelajaran Adaptif Matrix Tutoring",
    href: "#adaptive-learning-smp",
  },
  {
    text: "Pengajar Les Private SMP",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMP",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMP",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix Tutoring ",
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

const LesPrivateSMPKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({}); // Mengubah [] menjadi {}
  const [heroData, setHeroData] = useState(null);

  const { kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();

  // Fungsi helper untuk memformat slug menjadi nama yang terbaca
  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Mengambil nama kelurahan, kecamatan, kabupaten, dan kota dari state, atau dari slug jika state belum terisi
  const nameCountry = kelurahan?.kelurahan || formatSlugToName(kelurahanSlug);
  const nameKecamatan =
    kelurahan?.kecamatan?.kecamatan || formatSlugToName(kecamatanSlug);
  const nameKabupaten =
    kelurahan?.kecamatan?.kota_kabupaten?.kota_kabupaten ||
    formatSlugToName(kabupatenSlug);
  const nameKota =
    kelurahan?.kecamatan?.kota_kabupaten?.kota?.kota ||
    formatSlugToName(kotaSlug);

  const programName = "SMP"; // Nama program yang digunakan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SMP", "kelurahan"); // Gunakan kategori "SMP"
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Fallback jika API gagal, set data secara manual dari slug
        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
          kecamatan: {
            kecamatan: formatSlugToName(kecamatanSlug),
            kota_kabupaten: {
              kota_kabupaten: formatSlugToName(kabupatenSlug),
              kota: { kota: formatSlugToName(kotaSlug) },
            },
          },
        });
        setHeroData({
          heading: `Les Privat ${programName} Terbaik di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`, // Menyesuaikan untuk SMP
          image: "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, kecamatanSlug, kabupatenSlug, kotaSlug, programName]); // Tambahkan semua dependency yang relevan

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} Terbaik di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`; // Menyesuaikan untuk SMP
  }

  const heroImageSrc =
    heroData?.image ||
    "https://apps.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://apps.bimbelmatrix.com/";
  // Canonical URL untuk halaman kelurahan
  const canonicalUrl = `${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${kelurahanSlug}`;

  // Judul dan Deskripsi yang Optimal dengan brand "Matrix Tutoring" dan lokasi dinamis
  const pageTitle = `📚 Les Privat SMP di ${nameCountry} Terbaik #1 | Matrix Tutoring`;
  const descriptionContent = `🚀 Kursus Les Privat SMP Terbaik di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} ✔️ Dibimbing GURU BERPENGALAMAN ✔️ Metode Fun & Interaktif ✍️ Daftar? Segera kunjungi situs Matrix Tutoring sekarang!`;

  const ogTitle = `Les Privat SMP di ${nameCountry} - Solusi Belajar Efektif untuk Sekolah Menengah Pertama | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik Anda di SMP dengan les privat terbaik di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} dari Matrix Tutoring. Pembelajaran personal dan disesuaikan kebutuhan siswa.`;
  const twitterTitle = `Les Privat SMP Profesional di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih nilai terbaik di SMP di ${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota} dengan les privat profesional dari Matrix Tutoring. Fokus pada pemahaman konsep dan strategi ujian dan persiapan masuk SMA favorit.`; // Sedikit penyesuaian untuk SMP

  const ogImage = "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMP Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMP ${nameCountry}`,
    `Les Privat Sekolah Menengah Pertama ${nameCountry}`,
    `Guru Privat SMP ${nameCountry}`,
    `Guru Les Privat SMP ${nameCountry}`,
    `Bimbel SMP ${nameCountry}`,
    `Bimbingan Belajar SMP ${nameCountry}`,
    `Les Privat Online SMP ${nameCountry}`,
    `Les Privat Offline SMP ${nameCountry}`,
    `Program Belajar SMP ${nameCountry}`,
    `Program Les Sekolah Menengah Pertama ${nameCountry}`,
    `Guru Les Matematika SMP ${nameCountry}`,
    `Les Matematika SMP ${nameCountry}`,
    `Les IPA SMP ${nameCountry}`,
    `Les Bahasa Inggris SMP ${nameCountry}`,
    `Tutor SMP Berpengalaman ${nameCountry}`,
    `Les Privat Mata Pelajaran SMP ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMP ${nameCountry}`,
    `Les Privat Fisika SMP ${nameCountry}`,
    `Les Privat Kimia SMP ${nameCountry}`,
    `Les Privat Biologi SMP ${nameCountry}`,
    `Les Privat Ekonomi SMP ${nameCountry}`,
    `Les Privat Geografi SMP ${nameCountry}`,
    `Matrix Tutoring SMP ${nameCountry}`,
    `Bimbel Online SMP ${nameCountry}`,
    `Kursus SMP ${nameCountry}`,
    `Persiapan Ujian SMP ${nameCountry}`,
    `Ujian Nasional SMP ${nameCountry}`,
    `Tingkat SMP ${nameCountry}`,
    `Materi SMP ${nameCountry}`,
    `PR SMP ${nameCountry}`,
    `Remedi SMP ${nameCountry}`,
    `Persiapan Masuk SMA ${nameCountry}`,
    `Penerimaan Siswa Baru SMA ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
    kotaSlug.replace(/-/g, " ").toLowerCase(),
    `${nameCountry}, ${nameKecamatan}, ${nameKabupaten}, ${nameKota}`,
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
                        "@id": "${baseUrl}/les-privat-smp", // URL program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/les-privat-smp/${kotaSlug}", // URL kota
                        "name": "Les Privat ${programName} di ${nameKota}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "4",
                      "item": {
                        "@id": "${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}", // URL kabupaten
                        "name": "Les Privat ${programName} di ${nameKabupaten}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "5",
                      "item": {
                        "@id": "${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", // URL kecamatan
                        "name": "Les Privat ${programName} di ${nameKecamatan}"
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
        nameCountry={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <EmbrelaSlider />
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSMPHeader />
      <AdaptiveLearningSMP />
      <StatistikImageSMP />

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

export default LesPrivateSMPKelurahan;
