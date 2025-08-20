import React from "react";
import { Helmet } from "react-helmet-async";
// import Bottombar from "../BottomBar/Bottombar";
import PengajarLestPrivate2 from "../PengajarLestPrivate/PengajarLesPrivat2";
import AboutUsHistoryAndSuccess from "./AboutUsHIstoryAndSuccesLesPrivate/AboutUsHistoryAndSuceesLesPrivate";
import "./AboutUsLesPrivate.css";
import ProfesionalTeam from "./OurTeam/ProfesionalTeam";

const AboutUsLesPrivate = () => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tentang Kami - #1 Matrix Tutoring</title>
        <meta
          name="description"
          content="Matrix Tutoring menyediakan layanan les privat dengan pengajar berkualitas tinggi untuk semua tingkatan pendidikan. Temukan visi dan misi kami untuk meningkatkan potensi akademik siswa."
        />
        <meta
          name="keywords"
          content="les privat, guru privat, pendidikan, visi dan misi, pengajar berkualitas, matrix-tutoring"
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta
          property="og:title"
          content="Tentang Kami - #1 Matrix Tutoring Indonesia"
        />
        <meta
          property="og:description"
          content="Matrix Tutoring menyediakan layanan les privat dengan pengajar berkualitas tinggi untuk semua tingkatan pendidikan. Temukan visi dan misi kami untuk meningkatkan potensi akademik siswa."
        />
        <meta
          property="og:image"
          content="https://apps.bimbelmatrix.com/images/about-us/hero-about.png"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="/https://apps.bimbelmatrix.com/tentang-kami"
        />
      </Helmet>

      <div className="container-all">
        <div className="about-us">
          <div className="about-us-header">
            <h1>Tentang Matrix Tutoring</h1>
          </div>
          <section className="about-us-content">
            <div className="about-us-image">
              <img
                src="/images/about-us/hero-about.webp"
                alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
                width={"768"}
                height={"711"}
                loading="lazy"
              />
            </div>

            {/* pengajar les private */}
            <PengajarLestPrivate2 />
            <div className="about-us-info">
              <h2>Visi Kami</h2>
              <p>
                Visi kami adalah untuk menyediakan dukungan pendidikan
                berkualitas tinggi kepada siswa dari segala usia. Kami bertujuan
                untuk menciptakan lingkungan belajar yang mendukung, merangsang,
                dan membantu siswa mencapai potensi penuh mereka.
              </p>
              <h2>Misi Kami</h2>
              <p>
                Kami berkomitmen untuk menyediakan program dan layanan yang
                berkualitas, merekrut, melatih, dan menugaskan pengajar yang
                berkompeten dari berbagai perguruan tinggi terbaik. Kami juga
                mengembangkan sistem layanan akademik yang efektif dan solutif.
                Kami berusaha menjadi sahabat siswa untuk mengoptimalkan
                kemampuan akademik terbaik mereka, serta menjadi partner orang
                tua dalam membimbing dan memotivasi anak agar selalu berprestasi
                dan berbahagia.
              </p>
            </div>
          </section>
          <AboutUsHistoryAndSuccess />
          <ProfesionalTeam />
        </div>
      </div>

      {/* <Floatingcta /> */}
      {/* <Bottombar /> */}
    </React.Fragment>
  );
};

export default AboutUsLesPrivate;
