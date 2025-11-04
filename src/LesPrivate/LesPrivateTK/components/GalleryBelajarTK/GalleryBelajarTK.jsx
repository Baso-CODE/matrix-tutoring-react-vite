const galleryItems = [
  {
    image:
      "/images/gallery-belajar/tk/kak-zainul-farihin-dengan-siswa-delova-alexandria-ratam.webp",
    title: "TK Calistung",
    description:
      "Kak Zainul Farihin mendampingi siswa Delova Alexandria Ratam belajar membaca huruf, menulis kata sederhana, serta latihan berhitung dasar.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-adelina-fransiska-dengan-siswa-louie-setiawan.webp",
    title: "TK Matematika Dasar",
    description:
      "Kak Adelina Fransiska bersama siswa Louie Setiawan berlatih mengenal angka, penjumlahan sederhana, serta pola dan bentuk geometri dasar.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-afifah-choirunnisa-dengan-siswa-andhara-arsyifa-haflani.webp",
    title: "TK Logika & Berhitung",
    description:
      "Kak Afifah Choirunnisa membimbing siswa Andhara Arsyifa Haflani mengasah logika, mengenal konsep bilangan, dan permainan hitung interaktif.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-shella-aklima-dengan-siswa-shakiel-hadinata-ahmad.webp",
    title: "TK Bahasa Inggris Dasar",
    description:
      "Kak Shella Aklima mengajak siswa Shakiel Hadinata Ahmad belajar kosakata Bahasa Inggris, percakapan sederhana, dan lagu edukatif anak-anak.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-tasya-deya-patty-dengan-siswa-gwyneth-emmanuelle-tan.webp",
    title: "TK Pengenalan Bahasa Inggris",
    description:
      "Kak Tasya Deya Patty bersama siswa Gwyneth Emmanuelle Tan mengenal warna, angka, hewan, dan benda sekitar dengan Bahasa Inggris.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-nurmala-sastra-dengan-siswa-laszlo-akasya-santang.webp",
    title: "TK Kreativitas & Menghitung",
    description:
      "Kak Nurmala Sastra membimbing siswa Laszlo Akasya Santang berhitung sambil bermain, mengenal bentuk, serta melatih kreativitas.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-din-aulia-dengn-siswa-juan-ricco-mahadirga.webp",
    title: "TK Calistung Dasar",
    description:
      "Kak Din Aulia bersama siswa Juan Ricco Mahadirga berlatih membaca huruf, menulis angka, serta berhitung dengan metode menyenangkan.",
  },
  {
    image:
      "/images/gallery-belajar/tk/kak-farhatun-nisa-dengan-siswa-reiga-azkayana-kusuma.webp",
    title: "TK Mengaji & Pendidikan Agama",
    description:
      "Kak Farhatun Nisa membimbing siswa Reiga Azkayana Kusuma belajar membaca Iqro, doa-doa harian, serta membiasakan akhlak yang baik.",
  },
];

const GalleryBelajarTK = () => {
  return (
    <section className="container-all">
      <div className="gallery__sd">
        <div className="gallery-sd__header">
          <h2 className="gallery-sd__title">
            Galeri Belajar Siswa Les Privat Calistung TK – Matrix Tutoring
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

export default GalleryBelajarTK;
