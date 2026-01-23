const PelajaranCalistungMatrix = ({ location }) => {
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  const titleVariations = [
    `Apa yang akan si Kecil Pelajari Selama Les Privat Calistung ${locSuffix}?`,

    `Materi Belajar Membaca, Menulis, & Berhitung TK-SD ${locSuffix}`,

    `Kurikulum Les Privat Calistung Terbaik area ${locName}`,
  ];

  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <div className="container-all">
      <div className="target-content">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        <p>
          Program Les Privat Calistung kami <strong>{locSuffix}</strong>{" "}
          dirancang secara personal sesuai dengan tahap perkembangan dan gaya
          belajar anak:
        </p>

        <ul className="checklist">
          <li>
            <strong>Menulis:</strong> Mengenal huruf, angka, menulis nama
            sendiri, hingga latihan menulis rapi dan tegak bersambung.
          </li>
          <li>
            <strong>Membaca:</strong> Belajar mengeja suku kata, membaca huruf,
            memahami kata, dan membaca kalimat pendek dengan lancar.
          </li>
          <li>
            <strong>Berhitung:</strong> Mengenal angka, konsep jumlah,
            menghitung benda, serta operasi penjumlahan dan pengurangan
            sederhana.
          </li>
          <li>
            <strong>Aktivitas Kreatif:</strong> Menggambar, mewarnai, dan
            bermain edukatif lainnya yang melatih motorik halus si kecil agar
            tidak bosan.
          </li>
          <li>
            Dan bagi orangtua <strong>{locSuffix}</strong> yang membutuhkan
            layanan tambahan, seperti <em>les privat mengaji anak</em> maupun{" "}
            <em>les privat bahasa Inggris</em>, Matrix Tutoring siap melayani
            kebutuhan pendidikan putra-putri Anda.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PelajaranCalistungMatrix;
