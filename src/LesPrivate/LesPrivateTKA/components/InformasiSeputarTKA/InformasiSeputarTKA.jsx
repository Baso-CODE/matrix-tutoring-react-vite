import "./InformasiSeputarTKA.css";

const InformasiSeputarTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Informasi Seputar Tes Kemampuan Akademik (TKA) ${locSuffix}`,
    // Variasi 2 (Guide Focused)
    `Panduan Lengkap TKA SD, SMP, SMA bagi Siswa ${locName}`,
    // Variasi 3 (Question Focused)
    `Apa Itu Tes Kemampuan Akademik (TKA)? Info untuk Pelajar ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content__info-tka">
        {/* Layout Flex (Kiri: Teks, Kanan: Gambar) */}
        <div className="info-tka-flex-container">
          {/* BAGIAN KIRI: Teks */}
          <div className="info-tka-text">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            <p>
              TKA dapat diikuti oleh semua siswa kelas akhir{" "}
              <strong>{locSuffix}</strong> pada jenjang SD/MI/Sederajat,
              SMP/MTs/Sederajat, SMA/MA/Sederajat dan SMK/MAK dari jalur
              Pendidikan Formal, Nonformal dan Informal. Setiap siswa yang
              terdaftar pada basis data kementerian dan memiliki NISN valid
              dapat mengikuti TKA. Kesempatan siswa untuk mengikuti TKA hanya
              satu kali pada tiap jenjang, kecuali ketika siswa tidak lulus dari
              satuan pendidikan.
            </p>

            {/* DYNAMIC SUB-TITLE */}
            <h3>Mata Pelajaran TKA untuk Siswa {locName}</h3>
            <p>
              Tes Kemampuan Akademik mengujikan kompetensi dasar pada beberapa
              mata pelajaran utama, sebagai berikut:
            </p>

            <ol className="numbered-list-info-tka">
              <li>
                <strong>SD/MI/SMP/MTs:</strong> Bahasa Indonesia dan Matematika.
              </li>
              <li>
                <strong>SMA/MA/SMK/MAK:</strong> Bahasa Indonesia, Matematika,
                Bahasa Inggris, dan 2 (dua) mata pelajaran pilihan sesuai minat
                siswa <strong>{locName}</strong>.
              </li>
            </ol>

            <p>
              Dalam memilih 2 mata pelajaran pilihan, pihak sekolah di{" "}
              <strong>{locName}</strong> diharapkan dapat memberi arahan agar
              pilihan sesuai dengan minat siswa dan rencana studi lanjut.
              Pemilihan mata pelajaran dilakukan saat pendaftaran TKA.
            </p>
            <p>
              Soal TKA akan berbentuk <strong>pilihan ganda biasa</strong> (1
              jawaban benar) dan <strong>pilihan ganda kompleks</strong> (lebih
              dari 1 jawaban benar). TKA tidak mengukur literasi/numerasi umum,
              melainkan kompetensi mata pelajaran sesuai kurikulum. Namun, soal
              TKA tetap menekankan pada penalaran (HOTS) dan pemecahan masalah
              yang relevan bagi siswa <strong>{locSuffix}</strong>.
            </p>
          </div>

          {/* BAGIAN KANAN: Gambar */}
          <div className="info-tka-image-wrapper">
            <img
              src="/images/les-private/ksm/Akademik-TKA.png"
              // Alt Text Dioptimalkan
              alt={`Panduan dan Materi Tes Kemampuan Akademik (TKA) di ${locName} - Matrix Tutoring`}
              className="info-tka-image"
              loading="lazy"
              width="600"
              height="400"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=PERSIAPAN+TKA";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformasiSeputarTKA;
