import "./KeunggulanCalistungMatrix.css";

const KeunggulanCalistungMatrix = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Brand Focused)
    `Keunggulan Les Privat Calistung ${locSuffix} di Matrix Tutoring`,
    // Variasi 2 (Benefit Focused)
    `Alasan Memilih Guru Privat Calistung ${locName} Terbaik`,
    // Variasi 3 (Service Focused)
    `Benefit Program Les Baca Tulis Hitung TK ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="container-all">
      <div className="keunggulan-tk-wrapper">
        <div className="keunggulan-tk-container">
          <img
            className="keunggulan-tk-image"
            src="/images/les-private/tk/keunggulan-tk.webp"
            alt={`Keunggulan Guru Les Privat Calistung datang ke rumah ${locName} - Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x700/007bff/ffffff?text=Keunggulan+Privat+Calistung";
            }}
            loading="lazy"
            width="600"
            height="525"
          />
          <div className="keunggulan-tk-content">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            {/* Injeksi lokasi di paragraf pembuka */}
            <p>
              Apa saja keunggulan mengikuti{" "}
              <strong>les privat calistung {locSuffix}</strong> di Matrix
              Tutoring? Dengan bimbingan dari tutor profesional, siswa akan
              mendapatkan berbagai manfaat yang mendukung perkembangan akademis
              dan karakter mereka, antara lain:
            </p>

            <ul className="ul-keunggulan-calistung-matrix">
              <li>
                <strong>Fleksibel:</strong> Dari segi waktu dan tempat, anak
                bisa belajar di rumah {locName} dengan pengawasan orangtua
                secara nyaman.
              </li>
              <li>
                <strong>Guru Datang ke Rumah:</strong> Tutor siap datang ke
                lokasi Anda {locSuffix} sesuai dengan jadwal yang disepakati
                bersama.
              </li>
              <li>
                <strong>Tutor Profesional:</strong> Guru berpengalaman,
                penyayang anak, dan sabar menghadapi karakter si kecil.
              </li>
              <li>
                <strong>Komunikasi Intensif:</strong> Orangtua dapat
                berkomunikasi langsung dengan guru terkait progress perkembangan
                anak.
              </li>
              <li>
                <strong>Metode 1-on-1:</strong> Satu guru satu anak, sehingga
                fokus pengajar sepenuhnya pada siswa dan mampu menyesuaikan gaya
                belajar anak.
              </li>
              <li>
                <strong>Media Belajar Kreatif:</strong> Guru membawa alat peraga
                dan bahan belajar yang menarik minat anak agar tidak bosan.
              </li>
              <li>
                <strong>Laporan Berkala:</strong> Orangtua mendapat laporan
                perkembangan belajar anak (Progress Report) secara rutin.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeunggulanCalistungMatrix;
