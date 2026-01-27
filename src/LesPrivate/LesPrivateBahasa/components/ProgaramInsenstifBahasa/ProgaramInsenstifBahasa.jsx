import "./ProgaramInsenstifBahasa.css";

const ProgaramInsenstifBahasa = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Program Les Privat Bahasa ${locSuffix} - Matrix Tutoring`,
    // Variasi 2 (Course Focused)
    `Kursus Bahasa Asing Intensif area ${locName}`,
    // Variasi 3 (Service Focused)
    `Guru Les Privat Bahasa ${locName} Terbaik`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered__program-insentif-bahasa">
        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            {/* Injeksi Lokasi di Paragraf Pembuka */}
            <p>
              Belajar bahasa kini semakin mudah bagi Anda{" "}
              <strong>{locSuffix}</strong> bersama Matrix Tutoring. Kami
              menghadirkan layanan{" "}
              <strong>Les Privat ke Rumah {locName}</strong> dan Les Privat
              Online yang dirancang fleksibel sesuai kebutuhan Anda. Dengan
              pendampingan tutor berpengalaman, Anda bisa belajar secara
              personal, nyaman, dan tertarget, baik untuk kebutuhan akademik,
              pekerjaan, maupun tujuan khusus seperti persiapan ujian atau
              keberangkatan ke luar negeri.
            </p>
            <p>
              Berikut Pilihan Bahasa yang bisa dipelajari pada Program Les
              Privat Bahasa <strong>{locSuffix}</strong> di Matrix Tutoring:
            </p>

            {/* List Bahasa dengan Lokasi */}
            <ul>
              <li>Les Privat Bahasa Inggris {locSuffix}</li>
              <li>Les Privat Bahasa Mandarin {locSuffix}</li>
              <li>Les Privat Bahasa Jepang {locSuffix}</li>
              <li>Les Privat Bahasa Korea {locSuffix}</li>
              <li>Les Privat Bahasa Jerman {locSuffix}</li>
              <li>Les Privat Bahasa Prancis {locSuffix}</li>
              <li>
                Les Privat BIPA (Bahasa Indonesia untuk Penutur Asing){" "}
                {locSuffix}
              </li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="program-calistung-image">
            <img
              src="/images/les-private/bahasa-asing/BAHASA-ASING-5x4.webp"
              // Alt Text Dioptimalkan
              alt={`Program Intensif Les Privat Bahasa Asing di ${locName} - Matrix Tutoring`}
              className="les-privat-sd-image"
              loading="lazy"
              width="600"
              height="480"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=Program+Intensif+Bahasa";
              }}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgaramInsenstifBahasa;
