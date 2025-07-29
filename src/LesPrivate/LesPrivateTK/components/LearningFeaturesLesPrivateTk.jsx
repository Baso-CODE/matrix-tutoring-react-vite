import React from "react";
import "./LearningFeaturesLesPrivateTk.css";

const LearningFeaturesLesPrivateTk = () => {
  const features = [
    {
      icon: "/images/les-private/tk/fitur-tk/reading.webp", // Emoji for book
      title: "Pengenalan Huruf, Angka dan Cara Membaca",
      description: `Siswa akan dikenalkan dengan huruf, angka dan pelafalannya. Metode yang dipakai di antaranya adalah menuliskan beberapa huruf/angka di papan tulis, kemudian siswa diajarkan pelafalannya. Cara kedua, pengajar akan membawa mainan plastik berbentuk huruf-huruf/angka dan siswa dikenalkan cara membaca huruf/angka tersebut. Metode lain yang dipakai guru adalah meminta siswa menyanyikan lagu, misalnya ABC song atau Satu-Satu Sayang Ibu yang terkenal sebagai lagu untuk pengenalan huruf/angka pada anak. Setelah siswa berhasil mengenali nama-nama huruf/angka, kemudian siswa akan diajari cara merangkai huruf menjadi kata. Keberhasilan anak dalam membaca dapat dilihat dari kemampuan anak untuk membaca buku-buku sederhana atau menyebutkan nama benda yang ada di sekitarnya.`,
    },
    {
      icon: "/images/les-private/tk/fitur-tk/drawing.webp",
      title: "Kemampuan Menulis",
      description: `Pada tahap pengenalan huruf & angka, siswa tidak hanya diajarkan cara membaca, tetapi juga menulis. Pada tahap awal, guru akan membantu dari mulai cara memegang pensil dengan benar, menulis huruf kecil dan besar, serta mengoreksi kesalahan siswa. Pada proses ini, karakteristik guru akan terlihat dari mulai tingkat kesabaran, emosi (tempramen) dan kepribadian lain yang dimiliki oleh guru yang mengajar. Anak sekolah TK membutuhkan guru yang tidak hanya penyayang anak, kreatif, tetapi juga penyabar.`,
    },
    {
      icon: "/images/les-private/tk/fitur-tk/counting.webp",
      title: "Kemampuan Berhitung",
      description: `Pada tahap ini, anak-anak akan dikenalkan cara berhitung, meliputi penyebutan angka dari 1-100, penjumlahan dan pengurangan. Proses belajar berhitung diawali dengan siswa dikenalkan terlebih dahulu pada angka 1 sampai 10. Setelah itu, dengan menggunakan kancing baju atau alat tulis seperti kapur, siswa akan mulai diajari menghitung dari 1 sampai 10. Beberapa siswa bisa dengan mudah menghafal sampai 10 atau bahkan 100 bergantung pada metode yang dipakai guru. Dengan alat bantu di atas, siswa juga akan diajari cara penjumlahan dan pengurangan.`,
    },
    {
      icon: "/images/les-private/tk/fitur-tk/drawing.webp",
      title: "Kemampuan Sains & Menggambar",
      description: `Guru akan mengajari siswa hal-hal yang berkaitan dengan nama-nama hewan dan tumbuhan, anggota tubuh, indra, cara hidup sehat, pergantian siang dan malam, proses terjadinya hujan dan sebagainya yang berada di lingkungan sekitar anak. Selain itu, guru akan mengajarkan cara menggambar. Metode yang dipakai di antaranya adalah membuat mainan origami berbentuk hewan, menunjukkan gambar animasi pergantian siang dan malam, meminta siswa membaca buku-buku bergambar hewan dan tumbuhan dll. Belajar Sains & menggambar untuk anak-anak akan meningkatkan kecerdasan anak dan pengetahuannya terhadap benda-benda di sekitarnya serta jiwa seni anak yang berbakat menggambarpun dapat terlihat.`,
    },
    {
      icon: "/images/les-private/tk/fitur-tk/ngaji.webp",
      title: "Mengaji (jika dibutuhkan)",
      description: `Bagi orangtua yang muslim dan ingin mengajari anaknya mengaji sejak dini, kami menyediakan guru mengaji khusus anak-anak. Guru mengaji dari Matrix adalah pengajar muda terpilih dengan watak penyayang terhadap anak, sabar dan mudah diajak berkomunikasi dengan orangtua mengenai kesulitan belajar yang dialami anak.`,
    },
  ];

  return (
    <section className="learning-features-private-tk">
      {features.map((feature, index) => (
        <div key={index} className="feature-item-private-tk">
          <img
            loading="lazy"
            className="feature-icon-lesprivate-tk"
            src={feature.icon}
            alt=""
          />
          {/* <div {feature.icon}</div> */}
          <div className="feature-content-lesprivate-tk">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description ">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LearningFeaturesLesPrivateTk;
