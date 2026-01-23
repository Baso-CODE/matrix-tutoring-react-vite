import "./ProgramLesPrivatCalistungLanjutan.css";

const ProgramLesPrivatCalistungLanjutan = ({ location }) => {
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  const titleVariations = [
    `Program Les Privat Calistung Anak TK / PAUD / SD ${locSuffix}`,

    `Solusi Belajar Membaca & Berhitung TK - SD ${locSuffix}`,

    `Guru Les Privat Calistung Datang ke Rumah ${locSuffix}`,
  ];

  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatCalistungLanjutan">
        {/* DYNAMIC TITLE */}
        <h2>{selectedTitle}</h2>

        {/* Injeksi lokasi di paragraf pembuka */}
        <p>
          Les Privat Calistung dapat diikuti oleh anak dari usia 4 - 9 tahun
          dengan sistem belajar Privat Offline (guru privat calistung datang ke
          rumah siswa <strong>{locSuffix}</strong>).
        </p>

        <ul className="program-list">
          <li>
            <b>TK & PAUD (Usia 4–6 tahun):</b> Anak diajak mengenal huruf,
            angka, menggambar, mewarnai serta latihan membaca dan menulis dasar
            lewat permainan edukatif. Fokus kami adalah membuat anak-anak{" "}
            {locName} senang belajar.
          </li>
          <li>
            <b>SD Kelas 1–2:</b> Siswa sekolah dasar {locSuffix} yang masih
            kesulitan membaca lancar, menulis rapi, atau berhitung sederhana,
            kami akan bantu mengejar ketertinggalan dengan pendekatan personal
            dan sabar.
          </li>
        </ul>

        {/* Injeksi lokasi di program tambahan (Mengaji) */}
        <p>
          Selain Calistung, Matrix Tutoring juga menyediakan layanan{" "}
          <strong>Les Privat Mengaji {locSuffix}</strong> bagi orangtua (Muslim)
          yang ingin anak belajar ngaji sedari dini. Pada program Les Privat
          Mengaji, anak-anak tidak hanya diajarkan membaca Al-Qur’an dengan baik
          dan benar, tetapi juga dibimbing mempelajari doa-doa harian, tata cara
          ibadah, hingga dasar-dasar akhlak Islami.
        </p>

        {/* Injeksi lokasi di program tambahan (Bahasa Inggris) */}
        <p>
          Tak hanya itu saja, bagi orang tua di {locName} yang ingin anaknya
          memiliki keterampilan bahasa Inggris sejak dini, tersedia layanan{" "}
          <strong>Les Privat Bahasa Inggris untuk anak</strong>. Program ini
          dirancang agar anak terbiasa dengan kosakata Bahasa Inggris,
          percakapan sederhana, serta pelafalan yang benar, sehingga bisa
          menjadi bekal berharga untuk masa depan.
        </p>

        <p>
          Dengan berbagai pilihan program les privat ini, orang tua dapat
          menyesuaikan kebutuhan belajar anak sesuai minat dan tahap
          perkembangannya bersama Matrix Tutoring.
        </p>
      </div>
    </section>
  );
};

export default ProgramLesPrivatCalistungLanjutan;
