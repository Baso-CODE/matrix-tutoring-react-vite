import "./KegunaanTestTKA.css";

const KegunaanTestTKA = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Kegunaan Hasil Tes Kemampuan Akademik (TKA) ${locSuffix}`,
    // Variasi 2 (Benefit Focused)
    `Manfaat Nilai TKA bagi Siswa Sekolah ${locName}`,
    // Variasi 3 (Future Focused)
    `Fungsi Sertifikat TKA untuk Seleksi Pendidikan ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  // 4. Data Dinamis (Dipindah ke dalam function agar bisa akses location)
  const kurikulumData = [
    {
      title: "SD/MI Kelas 6",
      description: `Hasil TKA dapat digunakan untuk masuk ke SMP Favorit ${locSuffix} melalui jalur prestasi (menyesuaikan kebijakan pemerintah daerah ${locName}).`,
    },
    {
      title: "SMP/MTS Kelas 9",
      description: `Hasil TKA dapat digunakan untuk masuk ke SMA/SMK Unggulan ${locSuffix} melalui jalur prestasi (menyesuaikan kebijakan pemerintah daerah ${locName}).`,
    },
    {
      title: "SMA/MA/SMK Kelas 12",
      description: `Hasil TKA menjadi salah satu indikator kompetensi akademik untuk melanjutkan ke Jenjang Pendidikan Tinggi (Kuliah).`,
      list: [
        "Bahan validator nilai rapor pada jalur Seleksi Nasional Berdasarkan Prestasi (SNBP).",
        `Pertimbangan masuk PTN dengan jalur Mandiri, sesuai kebijakan masing-masing PTN.`,
        `Pertimbangan masuk Perguruan Tinggi Swasta (PTS) ${locSuffix}, sesuai dengan kebijakan kampus terkait.`,
      ],
    },
  ];

  return (
    <section className="kegunaan_test-tka__section">
      {/* DYNAMIC TITLE */}
      <h2 className="kegunaan_test-tka__title">{selectedTitle}</h2>

      {/* Injeksi Lokasi di Deskripsi */}
      <p className="kegunaan_test-tka__description">
        Apabila murid <strong>{locSuffix}</strong> mengikuti TKA, maka hasil tes
        tersebut dapat digunakan sebagai dokumen pendukung akademik untuk
        hal-hal berikut:
      </p>

      <div className="kegunaan_test-tka__table-wrapper">
        <table className="kegunaan_test-tka__table">
          <thead>
            <tr>
              <th>Jenjang / Program</th>
              {/* Injeksi Lokasi di Header Tabel */}
              <th>Kegunaan Hasil TKA {location ? `(${location})` : ""}</th>
            </tr>
          </thead>
          <tbody>
            {kurikulumData.map((item, idx) => (
              <tr key={idx}>
                <td className="kegunaan_test-tka__name">
                  <strong>{item.title}</strong>
                </td>
                <td>
                  <p>{item.description}</p>
                  {item.list && (
                    <ul>
                      {item.list.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default KegunaanTestTKA;
