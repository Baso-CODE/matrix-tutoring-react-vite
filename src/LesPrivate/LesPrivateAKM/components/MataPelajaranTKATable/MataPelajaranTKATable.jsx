import "./MataPelajaranTKATable.css";

const MataPelajaranTKATable = () => {
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
      <h2 className="mata_pelajaran-tka__title">
        Mata Pelajaran yang diujikan pada TKA
      </h2>
      <p className="mata_pelajaran-tka__description">
        Apabila murid mengikuti TKA, Mata Pelajaran yang diujikan adalah sebagai
        berikut:
      </p>

      <div className="mata_pelajaran-tka__table-wrapper">
        <table className="mata_pelajaran-tka__table">
          <thead>
            <tr>
              <th>Jenis Sekolah</th>
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
                      {data.jenis}
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MataPelajaranTKATable;
