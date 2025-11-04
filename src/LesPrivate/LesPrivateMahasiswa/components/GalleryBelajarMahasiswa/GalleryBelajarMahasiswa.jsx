const galleryItems = [
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-endang-mushaffa-dengan-siswa-yudha-febrian.webp",
    title: "Mahasiswa Kalkulus",
    description:
      "Kak Endang Mushaffa mendampingi Yudha Febrian memahami konsep turunan dan integral dalam mata kuliah Kalkulus.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-gama-dengan-siswa-raka-rayi.webp",
    title: "Mahasiswa Statistika",
    description:
      "Kak Gama membimbing Raka Rayi dalam analisis data, distribusi probabilitas, dan uji hipotesis pada mata kuliah Statistika.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-gian-permana-dengan-siswa-syafiq-abrar-athalah.webp",
    title: "Mahasiswa Akuntansi",
    description:
      "Kak Gian Permana membantu Syafiq Abrar Athalah memahami jurnal, laporan keuangan, dan konsep akuntansi dasar.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-jastman-dengan-siswa-razan-ghani-sastronugroho.webp",
    title: "Mahasiswa Hukum",
    description:
      "Kak Jastman bersama Razan Ghani Sastronugroho mendalami asas hukum, studi kasus, dan analisis peraturan.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-kaisya-rahmi-dengan-siswa-ananta-putri-fajrina.webp",
    title: "Mahasiswa Manajemen",
    description:
      "Kak Kaisya Rahmi mendampingi Ananta Putri Fajrina dalam memahami teori organisasi, manajemen SDM, dan studi manajemen bisnis.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-nur-fitriyana-dengan-sisw-nayla-davina-salsabila.webp",
    title: "Mahasiswa Pemrograman",
    description:
      "Kak Nur Fitriyana membimbing Nayla Davina Salsabila belajar pemrograman dengan praktik langsung menggunakan bahasa Python.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-wahyuda-kusumah-dengan-siswa-axel-damadika-yustiawan.webp",
    title: "Mahasiswa Biologi Umum",
    description:
      "Kak Wahyuda Kusumah bersama Axel Damadika Yustiawan membahas sel, genetika, dan ekologi dalam mata kuliah Biologi Umum.",
  },
  {
    image:
      "/images/gallery-belajar/mahasiswa/kak-andini-shafira-dengan-siswa-alika-maritza-pia.webp",
    title: "Mahasiswa Ekonomi Mikro",
    description:
      "Kak Andini Shafira mendampingi Alika Maritza Pia mempelajari teori permintaan-penawaran, pasar, dan konsep ekonomi mikro.",
  },
];
const GalleryBelajarMahasiswa = () => {
  return (
    <section className="container-all">
      <div className="gallery__sd">
        <div className="gallery-sd__header">
          <h2 className="gallery-sd__title">
            Gallery Belajar Program Les Privat Mahasiswa
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

export default GalleryBelajarMahasiswa;
