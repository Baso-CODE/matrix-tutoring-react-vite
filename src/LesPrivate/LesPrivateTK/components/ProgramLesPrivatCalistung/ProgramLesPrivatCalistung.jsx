import "./ProgramLesPrivatCalistung.css";

const ProgramLesPrivatCalistung = ({ location }) => {
  const locationName = location || "Indonesia";

  const locationSuffix = location ? `di ${location}` : "";

  const headerVariations = [
    {
      // Variasi 1: Fokus pada Keyword "Les Privat Calistung"
      title: `Les Privat Calistung ${locationSuffix} untuk Anak TK/Paud/SD`,
      subtitle: `Guru Privat TK ke Rumah Terbaik area ${locationName} dan Sekitarnya`,
    },
    {
      // Variasi 2: Fokus pada Keyword "Belajar Membaca" (Long tail keyword)
      title: `Guru Les Privat Membaca & Menulis ${locationSuffix} Terpercaya`,
      subtitle: `Solusi Belajar Calistung Menyenangkan bagi Anak Usia Dini di ${locationName}`,
    },
    {
      // Variasi 3: Fokus pada Keyword "Bimbel TK"
      title: `Program Bimbel Calistung TK Terbaik ${locationSuffix}`,
      subtitle: `Persiapan Masuk SD dengan Metode Personal Guru Datang ke Rumah ${locationName}`,
    },
  ];

  const seed = location ? location.length : 0;
  const selectedHeader = headerVariations[seed % headerVariations.length];

  return (
    <section className="container-all" id="program-tk">
      <div className="centered-content-programLesPrivatCalistung">
        {/* DYNAMIC TITLE (H2) */}
        <h2>{selectedHeader.title}</h2>

        {/* DYNAMIC SUBTITLE */}
        <p>{selectedHeader.subtitle}</p>
        <br />

        <div className="container-calistung-left-right">
          {/* TEXT CONTENT */}
          <div className="program-calistung-text">
            <h3>Mengapa Les Privat Calistung {locationSuffix} itu Penting?</h3>
            <p>
              Usia dini adalah fase emas perkembangan otak anak. Di usia inilah
              anak paling cepat menyerap informasi dan membentuk kebiasaan
              belajar. <strong>Calistung</strong> (Membaca, Menulis, dan
              Berhitung) adalah bekal utama anak di {locationName} saat memasuki
              dunia sekolah dasar. Tanpa penguasaan calistung yang baik, anak
              akan merasa tertinggal, minder, bahkan bisa kehilangan semangat
              belajar sejak dini.
            </p>

            <h4>Fakta Pendidikan Anak di {locationName}:</h4>
            <ul className="checklist">
              <li>Banyak anak TK & PAUD belum siap calistung saat masuk SD</li>
              <li>Setiap anak mempunyai kecepatan belajar yang berbeda</li>
              <li>
                Belajar di sekolah sering kali terlalu cepat dan kurang personal
              </li>
            </ul>

            <p>
              Melihat fakta tersebut,{" "}
              <strong>Les Privat Calistung {locationName}</strong> dapat menjadi
              solusi terbaik untuk membantu anak yang kesulitan belajar membaca,
              menulis, dan berhitung. Dengan bimbingan guru berpengalaman dari
              Matrix Tutoring, anak belajar dengan metode menyenangkan dan
              personal. Bukan hanya bisa calistung, tetapi juga menjadi lebih
              fokus dan mandiri!
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="program-calistung-image">
            <img
              src="/images/les-private/tk/program-tk-calistung-siswa.webp"
              // Alt Text dioptimalkan dengan keyword lokasi
              alt={`Guru Les Privat Calistung ${locationSuffix} membantu siswa belajar membaca - Matrix Tutoring`}
              className="les-privat-calistung-image"
              loading="lazy"
              width="600" // Good practice untuk SEO (CLS Metric)
              height="400"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+Calistung+beserta+logo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramLesPrivatCalistung;
