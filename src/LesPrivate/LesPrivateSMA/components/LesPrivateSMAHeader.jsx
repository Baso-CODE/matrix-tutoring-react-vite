import React from "react";
import "./LesPrivateSMAHeader.css";

const LesPrivateSMAHeader = () => {
  return (
    <section className="centered-content-lesPrivate-sma">
      <h1 id="les-privat-sma">
        Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online
      </h1>
      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/sma/sma.webp"
          alt="Les Privat sma"
        />
      </div>
      <p>
        Guru Les Privat SMA – Bagi orangtua yang memiliki anak yang sudah duduk
        di bangku SMA setidaknya pernah atau sering mengirimkan anak untuk ikut
        bimbel. Namun, dengan dimulainya sistem PJJ karena adanya pandemi,
        metode belajar di bimbel yang menggunakan sistem kelas dianggap tidak
        efektif dan kurang menjamin rasa aman orangtua. Hal itu menyebabkan
        permintaaan guru les privat SMA ke rumah dan les privat online semakin
        meningkat.
      </p>

      <p className="">
        Dengan les privat SMA ke rumah, siswa dapat memperoleh perhatian penuh
        dari pengajar dan fokus pada materi yang sulit dipahami. Pendekatan
        personal ini membuat belajar menjadi lebih efektif dan terarah.
      </p>

      {/* Section 2 */}
      <h2 id="kurikulum-dan-mata-pelajaran">Kurikulum dan Mata Pelajaran</h2>
      <p className="">
        Les privat SMA mencakup semua kurikulum, baik Nasional, Nasional Plus,
        maupun Internasional, dengan mata pelajaran seperti Matematika, Fisika,
        Kimia, Biologi, Bahasa Inggris, dan lainnya.
      </p>

      <p className=" ">
        Les privat juga membantu siswa dalam persiapan menghadapi Ujian
        Nasional, Ujian Sekolah, hingga ujian masuk perguruan tinggi dengan
        metode pembelajaran yang disesuaikan dengan kebutuhan masing-masing
        siswa.
      </p>

      {/* Section 4 */}
      <h2 id="pengajar-berkualitas-sma">Pengajar Berkualitas dan Terpercaya</h2>
      <p className="">
        Les Privat Matrix menyediakan pengajar berkualitas yang merupakan alumni
        dari universitas ternama, siap membantu siswa mencapai prestasi terbaik
        mereka dengan pendekatan yang sesuai dengan gaya belajar siswa.
      </p>
    </section>
  );
};

export default LesPrivateSMAHeader;
