const galleryItems = [
  {
    image:
      "/images/gallery-belajar/smp/kak-ellian-septin-dengan-siswa-mawar-dan-charles.webp",
    title: "SMP Bahasa Indonesia",
    description:
      "Kak Ellian mengajarkan Bahasa Indonesia bersama Siswa Mawar & Charles.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-ezra-juliana-dengan-siswa-dimas-naufal-kaiyoko.webp",
    title: "SMP Matematika",
    description:
      "Kak Ezra Juliana mengajarkan matematika bersama siswa Naufal Kaiyoko.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-filadelfia-romadilah-dengan-siswa-elaine.webp",
    title: "SMP Matematika",
    description: "Kak Filadelfia mengajarkan matematika bersama siswa Elaine.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-hasna-haniyah-denga-siswa-jinan-amalia-khanza.webp",
    title: "SMP Bahasa Inggris",
    description:
      "Kak Hasna mengajarkan bahasa Inggris bersama siswa Jinan Amalia Khanza.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-malihah-aulia-dengan-siswa-chiara-callysta.webp",
    title: "SMP Bahasa Inggris",
    description:
      "Kak Malihah dengan siswa Chiara Callysta Belajar Bahasa Inggris.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-mutia-ayaar-sihab-dengan-siswa-chatrine-fanesha.webp",
    title: "SMP Matematika",
    description:
      "Kak Mutia Ayaar Sihab dengan siswa Ctahrine Belajar cara membaca Matematika.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-okta-noviantina-denga-siswa-ketut-ratna-punia-dewi.webp",
    title: "SMP MAtematika",
    description:
      "Kak Okta Noviantina mengajarkan matematika bersama siswa Ketut Ratna Punia Dewi.",
  },
  {
    image:
      "/images/gallery-belajar/smp/kak-putri-ayu-ningtyas-dengan-siswa-kimberley-lie.webp",
    title: "SMP Bahasa Indonesia",
    description:
      "Kak Putri Ayu mengajarkan Bahasa Indonesia bersama siswa Kimberly Lie.",
  },
];

const GalleryBelajarSMP = () => {
  return (
    <section className="container-all">
      <div className="gallery__sd">
        <div className="gallery-sd__header">
          <h2 className="gallery-sd__title">
            Gallery Belajar Program Les Privat SMP
          </h2>
          <p className="gallery-sd__subtitle">
            Suasana belajar privat yang efektif, nyaman, dan menyenangkan
            bersama Matrix Tutoring.
          </p>
        </div>

        <div className="gallery-sd__grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-sd__card-container" key={index}>
              <div className="gallery-sd__card">
                <div
                  className="gallery-sd__img-content"
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-sd__content">
                  <p className="gallery-sd__heading">{item.title}</p>
                  <p className="gallery-sd__description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryBelajarSMP;
