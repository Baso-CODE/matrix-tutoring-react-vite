import "./PelajaranCalistungMatrix.css";

const PelajaranCalistungMatrix = ({ location }) => {
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  const titleVariations = [
    `Apa yang akan si Kecil Pelajari Selama Les Privat Calistung TK ${locSuffix}?`,
    `Materi Belajar Membaca, Menulis, & Berhitung TK ${locSuffix}`,
    `Kurikulum Les Privat Calistung TK Terbaik area ${locName}`,
  ];

  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="container-all">
      <div className="pelajaran-calistung-container">
        <div className="pelajaran-calistung-content">
          {/* DYNAMIC TITLE */}
          <h2>{selectedTitle}</h2>

          <p>
            Program Les Privat Calistung TK kami <strong>{locSuffix}</strong>{" "}
            dirancang secara interaktif dan personal sesuai dengan tahap
            perkembangan serta gaya belajar anak usia dini:
          </p>

          <ul className="checklist-calistung">
            <li>
              <strong>Menulis Dasar:</strong> Pengenalan bentuk huruf dan angka,
              latihan memegang pensil yang benar (<em>pencil grasp</em>),
              menarik garis, serta menulis nama sendiri.
            </li>
            <li>
              <strong>Membaca Permulaan:</strong> Belajar mengeja suku kata,
              mengenali bunyi huruf, memahami kata, dan membaca kalimat pendek
              dengan metode yang menyenangkan.
            </li>
            <li>
              <strong>Berhitung Dasar:</strong> Mengenal angka, konsep jumlah
              benda, membandingkan besar-kecil, serta latihan penjumlahan dan
              pengurangan sederhana.
            </li>
            <li>
              <strong>Aktivitas Motorik & Kreatif:</strong> Menggambar,
              mewarnai, dan bermain edukatif untuk melatih konsentrasi serta
              koordinasi motorik halus si kecil.
            </li>
            <li>
              Dan bagi orangtua <strong>{locSuffix}</strong> yang membutuhkan
              layanan tambahan, seperti <em>les privat mengaji anak</em> maupun{" "}
              <em>les privat bahasa Inggris dasar</em>, Matrix Tutoring siap
              melayani kebutuhan pendidikan buah hati Anda.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PelajaranCalistungMatrix;
