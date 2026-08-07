import "./GalleryBelajarTKA.css";

const galleryItems = [
  {
    image:
      "/images/gallery-belajar/sma/kak-farah-aliya-denga-siswa-cissy-kirany-malik.webp",
    title: "Penalaran Umum",
    description:
      "Pendampingan intensif dalam mengasah logika dan kemampuan berpikir kritis untuk menjawab soal Penalaran Umum UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-mardianis-dengan-siswa-nabila-zamira.webp",
    title: "Pengetahuan dan Pemahaman Umum",
    description:
      "Sesi belajar mendalam untuk meningkatkan pemahaman konsep dan wawasan umum sesuai dengan soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-linda-setianingsih-dengan-siswa-celine.webp",
    title: "Pemahaman Bacaan dan Menulis",
    description:
      "Melatih keterampilan membaca cepat, memahami teks, serta menulis jawaban yang tepat untuk soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-nur-afiah-dengan-siswa-ovais-pamungkas.webp",
    title: "Pengetahuan Kuantitatif",
    description:
      "Pendampingan Matematika dasar hingga aplikatif untuk meningkatkan ketajaman numerik dan logika kuantitatif.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-nurrachmawati-dengan-siswa-sabrina-adessya-ridwan.webp",
    title: "Literasi Bahasa Indonesia",
    description:
      "Latihan intensif memahami teks bacaan, menyusun argumen, dan menjawab soal Literasi Bahasa Indonesia UTBK.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-fitri-wahyu-dengan-siswa-zafira-shakila.webp",
    title: "Literasi Bahasa Inggris",
    description:
      "Pembelajaran fokus pada reading comprehension, vocabulary, dan analisis teks sesuai standar soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-malihah-aulia-dengan-siswa-chiara-callysta.webp",
    title: "Penalaran Matematika",
    description:
      "Pendampingan Matematika tingkat lanjut untuk meningkatkan kemampuan problem solving di soal Penalaran Matematika UTBK.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-ellian-septin-dengan-siswa-mawar-dan-charles.webp",
    title: "Strategi Mengerjakan UTBK",
    description:
      "Tips dan strategi mengatur waktu, memilih soal, serta teknik cepat menjawab agar sukses dalam UTBK SNBT.",
  },
];

const GalleryBelajarTKA = () => {
  return (
    <section className="container-all">
      <div className="gallery__tka">
        <div className="gallery-tka__header">
          <h2 className="gallery-tka__title">
            Gallery Belajar Program Les Privat TKA
          </h2>
          <p className="gallery-tka__subtitle">
            Suasana belajar privat yang efektif, nyaman, dan menyenangkan
            bersama Matrix Tutoring.
          </p>
        </div>

        <div className="gallery-tka__grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-tka__card-container" key={index}>
              <div className="gallery-tka__card">
                <div
                  className="gallery-tka__img-content"
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-tka__content">
                  <p className="gallery-tka__heading">{item.title}</p>
                  <p className="gallery-tka__description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryBelajarTKA;
