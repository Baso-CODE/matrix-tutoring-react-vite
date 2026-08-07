import "./GalleryBelajarSNBT.css";
const galleryItems = [
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-endang-mushaffa-dengan-siswa-yudha-febrian.webp",
    title: "Penalaran Umum",
    description:
      "Pendampingan intensif dalam mengasah logika dan kemampuan berpikir kritis untuk menjawab soal Penalaran Umum UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-gama-dengan-siswa-raka-rayi.webp",
    title: "Pengetahuan dan Pemahaman Umum",
    description:
      "Sesi belajar mendalam untuk meningkatkan pemahaman konsep dan wawasan umum sesuai dengan soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-gian-permana-dengan-siswa-syafiq-abrar-athalah.webp",
    title: "Pemahaman Bacaan dan Menulis",
    description:
      "Melatih keterampilan membaca cepat, memahami teks, serta menulis jawaban yang tepat untuk soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-jastman-dengan-siswa-razan-ghani-sastronugroho.webp",
    title: "Pengetahuan Kuantitatif",
    description:
      "Pendampingan Matematika dasar hingga aplikatif untuk meningkatkan ketajaman numerik dan logika kuantitatif.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-kaisya-rahmi-dengan-siswa-ananta-putri-fajrina.webp",
    title: "Literasi Bahasa Indonesia",
    description:
      "Latihan intensif memahami teks bacaan, menyusun argumen, dan menjawab soal Literasi Bahasa Indonesia UTBK.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-nur-fitriyana-dengan-sisw-nayla-davina-salsabila.webp",
    title: "Literasi Bahasa Inggris",
    description:
      "Pembelajaran fokus pada reading comprehension, vocabulary, dan analisis teks sesuai standar soal UTBK SNBT.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-wahyuda-kusumah-dengan-siswa-axel-damadika-yustiawan.webp",
    title: "Penalaran Matematika",
    description:
      "Pendampingan Matematika tingkat lanjut untuk meningkatkan kemampuan problem solving di soal Penalaran Matematika UTBK.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-andini-shafira-dengan-siswa-alika-maritza-pia.webp",
    title: "Strategi Mengerjakan UTBK",
    description:
      "Tips dan strategi mengatur waktu, memilih soal, serta teknik cepat menjawab agar sukses dalam UTBK SNBT.",
  },
];
const GalleryBelajarSNBT = () => {
  return (
    <section className="container-all gallery-snbt__section">
      <div className="gallery-snbt__container">
        <div className="gallery-snbt__header">
          <h2 className="gallery-snbt__title">
            Gallery Belajar Program Les Privat SNBT UTBK
          </h2>
          <p className="gallery-snbt__subtitle">
            Suasana belajar privat yang efektif, nyaman, dan menyenangkan
            bersama Matrix Tutoring.
          </p>
        </div>

        <div className="gallery-snbt__grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-snbt__card-container" key={index}>
              <div className="gallery-snbt__card">
                <div
                  className="gallery-snbt__img-content"
                  style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="gallery-snbt__content">
                  <p className="gallery-snbt__heading">{item.title}</p>
                  <p className="gallery-snbt__description">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryBelajarSNBT;
