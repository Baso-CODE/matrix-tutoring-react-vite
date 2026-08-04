import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";

import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateSD/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateSD/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateSD/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateSD/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import AdaptiveLearningSMP from "../components/AdaptiveLearningSMP/AdaptiveLearningSMP";
import GalleryBelajarSMP from "../components/GalleryBelajarSMP/GalleryBelajarSMP";
import ProgramBelajarSMP from "../components/ProgramBelajarSMP/ProgramBelajarSMP";
import SolusiBelajarSMP from "../components/SolusiBelajarSMP/SolusiBelajarSMP";
import TargetBelajarSMP from "../components/TargetBelajarSMP/TargetBelajarSMP";
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
    `Les Privat SMP Kelurahan ${nameCountry}`,
    `Les Privat Sekolah Menengah Pertama Kelurahan ${nameCountry}`,
    `Guru Privat SMP Kelurahan ${nameCountry}`,
    `Guru Les Privat SMP Kelurahan ${nameCountry}`,
    `Bimbel SMP Kelurahan ${nameCountry}`,
    `Bimbingan Belajar SMP Kelurahan ${nameCountry}`,
    `Les Privat Online SMP Kelurahan ${nameCountry}`,
    `Les Privat Offline SMP Kelurahan ${nameCountry}`,
    `Program Belajar SMP Kelurahan ${nameCountry}`,
    `Program Les Sekolah Menengah Pertama Kelurahan ${nameCountry}`,
    `Guru Les Matematika SMP Kelurahan ${nameCountry}`,
    `Les Matematika SMP Kelurahan ${nameCountry}`,
    `Les IPA SMP Kelurahan ${nameCountry}`,
    `Les Bahasa Inggris SMP Kelurahan ${nameCountry}`,
    `Tutor SMP Berpengalaman Kelurahan ${nameCountry}`,
    `Les Privat Mata Pelajaran SMP Kelurahan ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMP Kelurahan ${nameCountry}`,
    `Les Privat Fisika SMP Kelurahan ${nameCountry}`,
    `Les Privat Kimia SMP Kelurahan ${nameCountry}`,
    `Les Privat Biologi SMP Kelurahan ${nameCountry}`,
    `Les Privat Ekonomi SMP Kelurahan ${nameCountry}`,
    `Les Privat Geografi SMP Kelurahan ${nameCountry}`,
    `Matrix Tutoring SMP Kelurahan ${nameCountry}`,
    `Bimbel Online SMP Kelurahan ${nameCountry}`,
    `Kursus SMP Kelurahan ${nameCountry}`,
    `Persiapan Ujian SMP Kelurahan ${nameCountry}`,
    `Ujian Nasional SMP Kelurahan ${nameCountry}`,
    `Tingkat SMP Kelurahan ${nameCountry}`,
    `Materi SMP Kelurahan ${nameCountry}`,
    `PR SMP Kelurahan ${nameCountry}`,
    `Remedi SMP Kelurahan ${nameCountry}`,
    `Persiapan Masuk SMA Kelurahan ${nameCountry}`,
    `Penerimaan Siswa Baru SMA Kelurahan ${nameCountry}`,
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
              "position": 1,
              "item": {
                "@id": "${baseUrl}",
                "name": "Home"
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@id": "${baseUrl}/les-privat-smp", 
                "name": "Les Privat SMP" 
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@id": "${baseUrl}/les-privat-smp/${kotaSlug}", 
                "name": "Les Privat SMP di ${nameKota}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@id": "${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}", 
                "name": "Les Privat SMP di ${nameKabupaten}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@id": "${baseUrl}/les-privat-smp/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}", 
                "name": "Les Privat SMP di ${nameKecamatan}" 
              }
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@id": "${canonicalUrl}",
                "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}" 
              }
            }
          ]
        },

        {
          "@type": "EducationalOrganization",
          "@id": "${canonicalUrl}#organization",
          "name": "Matrix Tutoring",
          "description": "Guru Les Privat SMP datang ke rumah di Kelurahan ${nameCountry}. Bimbingan intensif mata pelajaran eksakta dan persiapan tes masuk SMA favorit terdekat.",
          "url": "${canonicalUrl}",
          "areaServed": "Kelurahan ${nameCountry}", 
          "sameAs": [
            "https://www.instagram.com/matrixtutoring.id",
            "https://www.tiktok.com/@lesprivatmatrix.com",
            "https://www.facebook.com/matrixtutoring"
          ],
          "brand": {
            "@type": "Brand",
            "name": "Matrix Tutoring",
            "logo": "https://apps.bimbelmatrix.com/images/whatsapp_footer.webp"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-857-4728-1466",
            "contactType": "Customer Service",
            "areaServed": "ID",
            "availableLanguage": ["Indonesian", "English"]
          },
          "keywords": "Les Privat SMP Kelurahan ${nameCountry}, Guru Privat SMP terdekat ${nameCountry}, Bimbel SMP ${nameCountry}, Les Persiapan SMA terdekat ${nameCountry}"
        },

        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat SMP Terdekat di Kelurahan ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Dapatkan tutor profesional untuk siswa SMP yang siap datang ke rumah Anda di Kelurahan ${nameCountry}. Tingkatkan nilai dan kuasai materi sulit SMP.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat Sekolah Menengah Pertama di Kelurahan ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat Sekolah Menengah Pertama",
            "areaServed": "Kelurahan ${nameCountry}",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock",
              "url": "${canonicalUrl}"
            }
          }
        },

        {
          "@type": "FAQPage",
          "@id": "${canonicalUrl}#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Seberapa cepat saya bisa mendapatkan guru privat di Kelurahan ${nameCountry}?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Setelah konsultasi dan konfirmasi pembayaran, tutor biasanya dapat mulai dalam 1-3 hari kerja, tergantung ketersediaan jadwal yang sesuai di Kelurahan ${nameCountry}."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah Les Privat ini cocok untuk persiapan kenaikan kelas di SMP?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sangat cocok. Fokus kami pada penguasaan konsep dasar dan latihan soal akan memastikan siswa siap menghadapi ujian akhir semester dan melangkah ke kelas berikutnya dengan bekal yang kuat."
              }
            },
            {
              "@type": "Question",
              "name": "Materi SMP manakah yang paling sering dibimbing di Matrix Tutoring?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Materi yang paling sering dibimbing adalah Aljabar dan Geometri (Matematika), Sistem dan Rangkaian Listrik (Fisika), dan materi Teks (Bahasa Inggris) karena materi ini seringkali menjadi titik kesulitan utama siswa SMP."
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
        location={nameCountry}
        desc={heroData?.description}
      />
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />{" "}
      <ImpactStatistics />
      <SolusiBelajarSMP location={nameCountry} />
      <ProgramBelajarSMP location={nameCountry} />
      <TargetBelajarSMP location={nameCountry} />
      <GalleryBelajarSMP />
      <ProfileMatrixTutoring title={"SMP Terbaik"} location={nameCountry} />
      <KurikulumLesPrivate location={nameCountry} />
      <TutorLesprivatMatrix location={nameCountry} />
      <LesprivatKota />
      <AdaptiveLearningSMP location={nameCountry} />
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
      {/* <TestimonialSiswa /> */}
      <TestimoniOrtuSiswa location={nameCountry} />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        {/* <AsalSekolahSiswaMarque /> */}
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      {/* <CTABottomHome /> */}
    </React.Fragment>
  );
};

export default LesPrivateSMPKelurahan;
