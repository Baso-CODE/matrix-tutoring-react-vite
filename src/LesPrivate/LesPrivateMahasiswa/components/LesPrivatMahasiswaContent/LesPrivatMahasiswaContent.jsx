import "./LesPrivatMahasiswaContent.css";

const LesPrivatMahasiswaContent = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Les Privat Mahasiswa – Guru Privat Mata Kuliah ${locSuffix}`,
    // Variasi 2 (Service Focused)
    `Bimbingan Belajar Mahasiswa PTN/Swasta area ${locName}`,
    // Variasi 3 (Tutor Focused)
    `Jasa Tutor Privat Mahasiswa ke Rumah & Online ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="centered-content__mahasiswa">
      {/* DYNAMIC TITLE */}
      <h2>{selectedTitle}</h2>

      {/* Dynamic Intro Paragraph */}
      <p>
        Les Privat untuk Mahasiswa PTN/Swasta/Kedinasan - Guru les privat
        Mahasiswa siap{" "}
        <strong>
          datang ke rumah{" "}
          {location
            ? `di ${location}`
            : "di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi"}
        </strong>{" "}
        & Les Privat Online Mahasiswa untuk seluruh Indonesia hingga Luar
        Negeri.
      </p>
      <br />
      <br />
      <div className="container-calistung-left-right">
        {/* TEXT */}
        <div className="program-calistung-text">
          <h3>Pentingnya Les Privat untuk Mahasiswa {locSuffix}</h3>
          <p>
            Menjadi mahasiswa <strong>{locSuffix}</strong> bukan hanya soal
            masuk kuliah dan duduk di kelas. Ada banyak tantangan yang harus
            dihadapi Mahasiswa antara lain tugas yang menumpuk, materi kuliah
            yang sulit dipahami, target IPK tinggi yang ingin diraih, hingga
            tekanan untuk segera lulus. Namun, tidak semua mahasiswa bisa
            mengikuti ritme perkuliahan dengan baik.
          </p>
          <p>
            Beberapa masalah akademik yang sering dihadapi mahasiswa meliputi:
          </p>
          <ul>
            <li>
              <strong>Materi Sulit:</strong> Penjelasan dosen terlalu cepat atau
              buku referensi berbahasa asing.
            </li>
            <li>
              <strong>Manajemen Waktu:</strong> Sulit membagi waktu antara
              kuliah, organisasi, atau pekerjaan sampingan.
            </li>
            <li>
              <strong>Nilai Turun:</strong> Nilai tugas, UTS, maupun UAS anjlok
              sehingga berpengaruh pada IPK.
            </li>
            <li>
              <strong>Kurang Pemahaman:</strong> Sudah membaca buku bahan ajar,
              tetapi masih sulit menangkap konsep intinya.
            </li>
            <li>
              <strong>Butuh Mentor:</strong> Tidak ada teman belajar yang bisa
              diajak diskusi mendalam.
            </li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="program-calistung-image">
          <img
            className="les-privat_mahasiswa-image"
            src="/images/les-private/mahasiswa/les-privat-mahasiswa-content.webp"
            // Alt Text SEO Friendly
            alt={`Guru Les Privat Mahasiswa Mata Kuliah di ${locName} - Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+Mahasiswa";
            }}
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </div>
      <br />

      {/* Solusi Section */}
      <p>
        Melalui <strong>Les Privat Mahasiswa {locSuffix}</strong> bersama Matrix
        Tutoring, permasalahan belajar tersebut dapat teratasi. Mahasiswa akan
        mendapatkan pendampingan belajar yang terarah dan fleksibel. Tutor
        berpengalaman siap membantu memahami materi kuliah yang sulit,
        mendampingi latihan soal secara intensif, sekaligus memberikan strategi
        belajar efektif agar mahasiswa <strong>{locName}</strong> lebih percaya
        diri dalam perkuliahan dan mampu meraih prestasi akademik terbaik
        (Cumlaude).
      </p>
      <br />

      {/* Jadwal Fleksibel Section */}
      <h3>Jadwal Fleksibel: Belajar Offline {locSuffix} atau Online</h3>
      <p>
        Matrix Tutoring merupakan lembaga privat yang sudah berpengalaman dalam
        melayani permintaan guru les privat mahasiswa.
        {location ? (
          // Jika ada lokasi spesifik
          <>
            &nbsp;Kami kini hadir melayani permintaan tutor datang ke rumah
            untuk area <strong>{location}</strong> dan sekitarnya.
          </>
        ) : (
          // Default Text
          <>
            &nbsp;Kami melayani area Jakarta, Bogor, Depok, Tangerang, Tangsel,
            Bekasi, BSD dan kota-kota besar lainnya.
          </>
        )}
      </p>
      <p>
        Selain itu, Matrix Tutoring juga melayani permintaan{" "}
        <strong>Les Privat Online</strong> untuk Mahasiswa di seluruh wilayah
        Indonesia hingga Luar Negeri. Metode ini menggunakan aplikasi video call
        seperti Zoom atau Google Meet yang memungkinkan interaksi tatap muka
        virtual secara efektif dan hemat waktu.
      </p>
    </div>
  );
};

export default LesPrivatMahasiswaContent;
