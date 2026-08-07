import "./GalleryBelajarSMA.css";

const galleryItems = [
  {
    image:
      "/images/gallery-belajar/sma/kak-farah-aliya-denga-siswa-cissy-kirany-malik.webp",
    title: "SMA Bahasa Inggris",
    description:
      "Kak Farah Aliya mendampingi Cissy Kirany Malik belajar Bahasa Inggris dengan penuh semangat.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-fathimah-nur-azizah-dengan-siswa-audri-cita-dinari.webp",
    title: "SMA Fisika",
    description:
      "Kak Fathimah Nur Azizah bersama Audri Cita Dinari membahas konsep Fisika dari teori hingga eksperimen sederhana.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-fitri-wahyu-dengan-siswa-zafira-shakila.webp",
    title: "SMA Matematika",
    description:
      "Kak Fitri Wahyu mendampingi Zafira Shakila memahami konsep Matematika secara mendalam dan aplikatif.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-jenuri-dengan-siswa-elminda-dan-andre.webp",
    title: "SMA Bahasa Indonesia",
    description:
      "Kak Jenuri bersama Elminda dan Andre berlatih percakapan Bahasa Indonesia dengan interaktif.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-nurrachmawati-dengan-siswa-sabrina-adessya-ridwan.webp",
    title: "SMA Biologi",
    description:
      "Kak Nurrachmawati mendampingi Sabrina Adessya Ridwan mempelajari Biologi mulai dari sel hingga ekosistem.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-mardianis-dengan-siswa-nabila-zamira.webp",
    title: "SMA Kimia",
    description:
      "Kak Mardianis membimbing Nabila Zamira memahami reaksi kimia dan konsep stoikiometri dengan latihan soal.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-karunia-puspa-dengan-siswa-tiwi.webp",
    title: "SMA Ekonomi",
    description:
      "Kak Karunia Puspa mendampingi  Tiwi memahami konsep dasar Ekonomi dan aplikasinya.",
  },
  {
    image:
      "/images/gallery-belajar/sma/kak-lidia-dengan-siswa-zafira-shakila.webp",
    title: "SMA Geografi",
    description:
      "Kak Lidia membimbing Zafira Shakila mempelajari Geografi, dari peta hingga fenomena alam sekitar.",
  },
];

const GalleryBelajarSMA = () => {
  return (
    <section className="container-all">
      <div className="gallery__sma">
        <div className="gallery-sma__header">
          <h2 className="gallery-sma__title">
            Gallery Belajar Program Les Privat SMA
          </h2>
          <p className="gallery-sma__subtitle">
            Suasana belajar privat yang efektif, nyaman, dan menyenangkan
            bersama Matrix Tutoring.
          </p>
        </div>

        <div className="gallery-sma__grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-sma__card-container" key={index}>
              <div className="gallery-sma__card">
                <div
                  className="gallery-sma__img-content"
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-sma__content">
                  <p className="gallery-sma__heading">{item.title}</p>
                  <p className="gallery-sma__description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryBelajarSMA;
