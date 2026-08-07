import "./GalleryBelajarMahasiswa.css";

const GalleryBelajarMahasiswa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Gallery Belajar Program Les Privat Mahasiswa ${locSuffix}`,
    // Variasi 2 (Activity Focused)
    `Dokumentasi Bimbingan Belajar Mahasiswa ${locName}`,
    // Variasi 3 (Atmosphere Focused)
    `Suasana Les Privat Mata Kuliah ${locSuffix} Matrix Tutoring`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Gallery (Dipindah ke dalam agar bisa injeksi lokasi)
  const galleryItems = [
    {
      image:
        "/images/gallery-belajar/mahasiswa/kak-endang-mushaffa-dengan-siswa-yudha-febrian.webp",
      title: "Mahasiswa Kalkulus",
      description: `Kak Endang Mushaffa mendampingi Yudha Febrian memahami konsep turunan dan integral dalam mata kuliah Kalkulus ${locSuffix}.`,
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
      description: `Kak Gian Permana membantu Syafiq Abrar Athalah memahami jurnal, laporan keuangan, dan konsep akuntansi dasar di kampus ${locName}.`,
    },
    {
      image:
        "/images/gallery-belajar/mahasiswa/kak-jastman-dengan-siswa-razan-ghani-sastronugroho.webp",
      title: "Mahasiswa Hukum",
      description:
        "Kak Jastman bersama Razan Ghani Sastronugroho mendalami asas hukum, studi kasus, dan analisis peraturan perundang-undangan.",
    },
    {
      image:
        "/images/gallery-belajar/mahasiswa/kak-kaisya-rahmi-dengan-siswa-ananta-putri-fajrina.webp",
      title: "Mahasiswa Manajemen",
      description: `Kak Kaisya Rahmi mendampingi Ananta Putri Fajrina dalam memahami teori organisasi dan manajemen SDM ${locSuffix}.`,
    },
    {
      image:
        "/images/gallery-belajar/mahasiswa/kak-nur-fitriyana-dengan-sisw-nayla-davina-salsabila.webp",
      title: "Mahasiswa Pemrograman",
      description: `Kak Nur Fitriyana membimbing Nayla Davina Salsabila belajar pemrograman Python dengan praktik langsung (Live Coding).`,
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
      description: `Kak Andini Shafira mendampingi Alika Maritza Pia mempelajari teori permintaan-penawaran dan pasar ekonomi mikro ${locSuffix}.`,
    },
  ];

  return (
    <section className="container-all">
      <div className="gallery__mahasiswa">
        <div className="gallery-mahasiswa__header">
          {/* DYNAMIC TITLE */}
          <h2 className="gallery-mahasiswa__title">{selectedTitle}</h2>

          {/* DYNAMIC SUBTITLE */}
          <p className="gallery-mahasiswa__subtitle">
            Intip suasana belajar privat yang efektif, nyaman, dan menyenangkan
            bersama tutor Matrix Tutoring <strong>{locName}</strong>.
          </p>
        </div>

        <div className="gallery-mahasiswa__grid">
          {galleryItems.map((item, index) => (
            <div className="gallery-mahasiswa__card-container" key={index}>
              <div className="gallery-mahasiswa__card">
                {/* Optimasi SEO untuk Background Image */}
                <div
                  className="gallery-mahasiswa__img-content"
                  role="img"
                  aria-label={`${item.title} - Suasana Les Privat Mahasiswa ${locName}`}
                  title={`${item.title} - Les Privat ${locName}`}
                  style={{ backgroundImage: `url(${item.image})` }}></div>

                <div className="gallery-mahasiswa__content">
                  <p className="gallery-mahasiswa__heading">{item.title}</p>
                  <p className="gallery-mahasiswa__description">
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

export default GalleryBelajarMahasiswa;
