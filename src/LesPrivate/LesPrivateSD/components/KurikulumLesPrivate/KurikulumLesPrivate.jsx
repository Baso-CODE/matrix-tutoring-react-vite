import "./KurikulumLesPrivate.css";

const KurikulumLesPrivate = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Standard)
    `Les Privat Semua Kurikulum dan Kebutuhan Belajar ${locSuffix}`,
    // Variasi 2 (Focus on International/National)
    `Guru Les Privat Kurikulum Internasional & Nasional ${locSuffix}`,
    // Variasi 3 (Focus on Flexibility)
    `Pilihan Kurikulum Les Privat Terlengkap area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  const kurikulumData = [
    {
      title: "International Baccalaureate (IB)",
      list: [
        "Primary Years Programme (PYP)",
        "Middle Years Programme (MYP)",
        "Diploma Programme (DP)",
        "Standard Level (SL) / Higher Level (HL)",
      ],
    },
    {
      title: "Cambridge International Curriculum",
      list: ["Primary", "Lower Secondary", "IGCSE", "AS Level", "A Level"],
    },
    {
      title: "Singapore Curriculum",
      list: ["Primary", "Lower Secondary", "GCE O Level", "A Level"],
    },
    {
      title: "Kurikulum Indonesia (Nasional)",
      list: ["Kurikulum Merdeka", "Kurikulum 2013 (K13)"],
    },
  ];

  return (
    <section className="kurikulum__section">
      {/* DYNAMIC TITLE */}
      <h2 className="kurikulum__title">{selectedTitle}</h2>

      {/* DYNAMIC DESCRIPTION */}
      <p className="kurikulum__description">
        Matrix Tutoring mendukung berbagai kurikulum baik nasional maupun
        internasional, sehingga siswa <strong>{locSuffix}</strong> dapat belajar
        sesuai jalur pendidikan sekolah masing-masing tanpa kendala.
      </p>

      <div className="kurikulum__table-wrapper">
        <table className="kurikulum__table">
          <thead>
            <tr>
              {/* Sedikit injeksi lokasi di header tabel untuk keunikan */}
              <th>Pilihan Kurikulum {location ? `(${location})` : ""}</th>
              <th>Jenjang / Program</th>
            </tr>
          </thead>
          <tbody>
            {kurikulumData.map((item, idx) => (
              <tr key={idx}>
                <td className="kurikulum__name">
                  <strong>{item.title}</strong>
                </td>
                <td>
                  <ul>
                    {item.list.map((sub, i) => (
                      <li key={i}>{sub}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default KurikulumLesPrivate;
