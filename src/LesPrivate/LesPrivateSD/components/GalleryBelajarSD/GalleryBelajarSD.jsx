import "./GalleryBelajarSD.css";

const galleryItems = [
  {
    image: "/images/gallery-belajar/sd/kak-amelia-dwi-dengan-siswa-naida.webp",
    title: "SD Mengaji",
    description:
      "Kak Amelia Dwi membimbing siswa Naida belajar membaca Al-Qur’an, memperbaiki tajwid, dan menghafal doa-doa harian.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-siti-jamilah-dengan-siswa-abdillah.webp",
    title: "SD Matematika",
    description:
      "Kak Siti Jamilah mendampingi siswa Abdillah berlatih berhitung, pecahan, dan soal cerita matematika dengan cara menyenangkan.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-nur-afiah-dengan-siswa-ovais-pamungkas.webp",
    title: "SD Matematika",
    description:
      "Kak Nur Afiah bersama siswa Ovais Pamungkas mempelajari penjumlahan, pengurangan, perkalian, dan pembagian dasar.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-linda-setianingsih-dengan-siswa-celine.webp",
    title: "SD Mengaji",
    description:
      "Kak Linda Setianingsih membimbing siswa Celine belajar membaca Al-Qur’an, tajwid, dan doa sehari-hari dengan sabar dan telaten.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-binti-mardziyah-dengan-siswa-marsya-ramadhani-efendi.webp",
    title: "SD Bahasa Inggris",
    description:
      "Kak Binti Mardziyah mengajarkan siswa Marsya Ramadhani kosakata dasar, percakapan sederhana, dan pemahaman teks Bahasa Inggris.",
  },
  {
    image: "/images/gallery-belajar/sd/kak-della-dengan-siswa-kania.webp",
    title: "SD Mengaji",
    description:
      "Kak Della bersama siswa Kania belajar membaca Al-Qur’an, memperbaiki bacaan Iqro, dan menghafal doa-doa pendek.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-elok-nur-faizah-dengan-siswa-shaka.webp",
    title: "SD MAtematika",
    description:
      "Kak Elok Nur Faizah mendampingi siswa Shaka memahami konsep perkalian, pembagian, serta latihan soal matematika dasar.",
  },
  {
    image:
      "/images/gallery-belajar/sd/kak-jung-nurshabah-dengan-siswa-orlin-nadine-shahira-hashim-shah.webp",
    title: "SD Bahasa Indonesia",
    description:
      "Kak Jung Nurshabah membimbing siswa Orlin Nadine memahami bacaan, menulis cerita sederhana, dan memperkaya kosakata Bahasa Indonesia.",
  },
];

const GalleryBelajarSD = () => {
  return (
    <section className="container-all">
      <div className="gallery__sd">
        <div className="gallery-sd__header">
          <h2 className="gallery-sd__title">
            Gallery Belajar Program Les Privat SD
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

export default GalleryBelajarSD;
