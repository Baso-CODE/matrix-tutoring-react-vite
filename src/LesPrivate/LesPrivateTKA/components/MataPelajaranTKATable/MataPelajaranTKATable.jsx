import "./MataPelajaranTKATable.css";

const MataPelajaranTKATable = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Mata Pelajaran yang Diujikan pada TKA ${locSuffix}`,
    // Variasi 2 (Detail Focused)
    `Daftar Mapel TKA SD, SMP, SMA, dan SMK area ${locName}`,
    // Variasi 3 (Scope Focused)
    `Struktur Ujian TKA Pendidikan Formal & Non-Formal ${locSuffix}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  const kurikulumData = [
    {
      jenis: "Pendidikan Formal",
      items: [
        {
          tingkat: "SD/MI/Sederajat",
          kelas: "Kelas 6",
          mapel: ["Bahasa Indonesia", "Matematika"],
        },
        {
          tingkat: "SMP/MTs/Sederajat",
          kelas: "Kelas 9",
          mapel: ["Bahasa Indonesia", "Matematika"],
        },
        {
          tingkat: "SMA/MA/Sederajat\nSMK/MAK",
          kelas: "Kelas 12, dan\nKelas 13 program 4 tahun",
          mapel: [
            "Bahasa Indonesia",
            "Matematika",
            "Bahasa Inggris",
            "Dua mata pelajaran pilihan",
          ],
        },
      ],
    },
    {
      jenis: "Pendidikan Non Formal",
      items: [
        {
          tingkat: "Program Paket A",
          kelas: "Kelas 6",
          mapel: ["Bahasa Indonesia", "Matematika"],
        },
        {
          tingkat: "Program Paket B",
          kelas: "Kelas 9",
          mapel: ["Bahasa Indonesia", "Matematika"],
        },
        {
          tingkat: "Program Paket C",
          kelas: "Kelas 12 atau sederajat",
          mapel: [
            "Bahasa Indonesia",
            "Matematika",
            "Bahasa Inggris",
            "Dua mata pelajaran pilihan",
          ],
        },
      ],
    },
  ];

  return (
    <section className="mata_pelajaran-tka__section">
      {/* DYNAMIC TITLE */}
      <h2 className="mata_pelajaran-tka__title">{selectedTitle}</h2>

      {/* Injeksi Lokasi di Deskripsi */}
      <p className="mata_pelajaran-tka__description">
        Apabila murid <strong>{locSuffix}</strong> mengikuti TKA, berikut adalah
        rincian Mata Pelajaran yang akan diujikan sesuai jenjang pendidikan:
      </p>

      <div className="mata_pelajaran-tka__table-wrapper">
        <table className="mata_pelajaran-tka__table">
          <thead>
            <tr>
              {/* Injeksi Lokasi di Header Tabel untuk Uniqueness */}
              <th>Jenis Sekolah {location ? `(${location})` : ""}</th>
              <th>Tingkat Pendidikan</th>
              <th>Kelas</th>
              <th>Mata Pelajaran yang Diujikan</th>
            </tr>
          </thead>
          <tbody>
            {kurikulumData.map((data, mainIndex) =>
              data.items.map((item, itemIndex) => (
                <tr key={`${mainIndex}-${itemIndex}`}>
                  {itemIndex === 0 && (
                    <td
                      rowSpan={data.items.length}
                      className="mata_pelajaran-tka__jenis">
                      <strong>{data.jenis}</strong>
                    </td>
                  )}
                  {/* Sel untuk Tingkat Pendidikan, Kelas, dan Mata Pelajaran */}
                  <td>{item.tingkat}</td>
                  <td>{item.kelas}</td>
                  <td>
                    <ul className="mapel-list">
                      {item.mapel.map((mapel, i) => (
                        <li
                          key={i}
                          className={
                            mapel.includes("pilihan") ? "blue-text" : ""
                          }>
                          {mapel}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MataPelajaranTKATable;
