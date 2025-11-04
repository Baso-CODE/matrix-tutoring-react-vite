import "./KurikulumLesPrivate.css";

const KurikulumLesPrivate = () => {
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
      <h2 className="kurikulum__title">
        Les Privat Semua Kurikulum dan Kebutuhan Belajar
      </h2>
      <p className="kurikulum__description">
        Matrix Tutoring mendukung berbagai kurikulum baik nasional maupun
        internasional, sehingga siswa dapat belajar sesuai jalur pendidikan
        masing-masing.
      </p>

      <div className="kurikulum__table-wrapper">
        <table className="kurikulum__table">
          <thead>
            <tr>
              <th>Kurikulum</th>
              <th>Jenjang / Program</th>
            </tr>
          </thead>
          <tbody>
            {kurikulumData.map((item, idx) => (
              <tr key={idx}>
                <td className="kurikulum__name">{item.title}</td>
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
