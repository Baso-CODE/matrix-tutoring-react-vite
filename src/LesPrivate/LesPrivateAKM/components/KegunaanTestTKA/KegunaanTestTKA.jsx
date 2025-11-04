import "./KegunaanTestTKA.css";

const KegunaanTestTKA = () => {
  const kurikulumData = [
    {
      title: "SD/MI Kelas 6",
      description:
        "Hasil TKA dapat digunakan untuk masuk ke SMP melalui jalur prestasi (akan menyesuaikan kebijakan masing-masing pemerintah daerah)",
    },
    {
      title: "SMP/MTS Kelas 9",
      description:
        "Hasil TKA dapat digunakan untuk masuk ke SMA/SMK melalui jalur prestasi (akan menyesuaikan kebijakan masing-masing pemerintah daerah)",
    },
    {
      title: "SMA/MA/SMK Kelas 12",
      description:
        "Hasil TKA dapat digunakan untuk masuk ke SMA/SMK melalui jalur prestasi (akan menyesuaikan kebijakan masing-masing pemerintah daerah)",
      list: [
        "Bahan validator nilai rapor pada jalur Seleksi Nasional Berdasarkan Prestasi (SNBP)",
        "Pertimbangan masuk PTN dengan jalur Mandiri, sesuai kebijakan masing-masing PTN",
        "Pertimbangan masuk Perguruan Tinggi Swasta (PTS), sesuai dengan kebijakan masing-masing PTS",
      ],
    },
  ];

  return (
    <section className="kegunaan_test-tka__section">
      <h2 className="kegunaan_test-tka__title">
        Kegunaan Hasil Tes Kemampuan Akademik (TKA)
      </h2>
      <p className="kegunaan_test-tka__description">
        Apabila murid mengikuti TKA, maka hasil dari TKA dapat digunakan untuk
        hal-hal berikut:
      </p>

      <div className="kegunaan_test-tka__table-wrapper">
        <table className="kegunaan_test-tka__table">
          <thead>
            <tr>
              <th>Jenjang / Program</th>
              <th>Kegunaan Hasil TKA</th>
            </tr>
          </thead>
          <tbody>
            {kurikulumData.map((item, idx) => (
              <tr key={idx}>
                <td className="kegunaan_test-tka__name">{item.title}</td>
                <td>
                  <p>{item.description}</p>
                  <ul>
                    {item.list?.map((sub, i) => (
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

export default KegunaanTestTKA;
