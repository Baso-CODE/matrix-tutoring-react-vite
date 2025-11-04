import "./LesPrivatMahasiswaContent.css";

const LesPrivatMahasiswaContent = ({ location }) => {
  return (
    <div className="centered-content__mahasiswa">
      <h2>
        Les Privat Mahasiswa – Guru Les Privat Mata Kuliah Offline dan Online
      </h2>
      <p>
        Les Privat untuk Mahasiswa PTN/Swasta/Kedinasan - Guru les privat
        Mahasiswa datang ke rumah di Jakarta Bogor Depok Tangerang Tangsel
        Bekasi & Les Privat Online Mahasiswa untuk seluruh Indonesia hingga Luar
        Negeri
      </p>
      <br />
      <br />
      <div className="container-calistung-left-right">
        {/* TEXT */}
        <div className="program-calistung-text">
          <h3>Pentingnya Les Privat untuk Mahasiswa</h3>
          <p>
            Menjadi mahasiswa bukan hanya soal masuk kuliah dan duduk di kelas.
            Ada banyak tantangan yang harus dihadapi Mahasiswa antara lain tugas
            yang menumpuk, materi kuliah yang sulit dipahami, target IPKnya yang
            ingin diraih, hingga tekanan untuk segera lulus. Namun, tidak semua
            mahasiswa bisa mengikuti ritme perkuliahan dengan baik.
          </p>
          <p>Beberapa masalah yang sering dihadapi mahasiswa antara lain:</p>
          <ul>
            <li>
              Materi kuliah sulit dipahami karena penjelasan dosen terlalu
              cepat.
            </li>
            <li>
              Sulit membagi waktu antara kuliah, organisasi, atau pekerjaan
              sampingan.
            </li>
            <li>
              Nilai tugas, UTS, maupun UAS turun sehingga berpengaruh pada IPK
            </li>
            <li>Sudah membaca buku bahan ajar, tetapi masih sulit paham</li>
            <li>Tidak ada teman belajar dan berdiskusi</li>
          </ul>
        </div>
        {/* IMAGE */}
        <div className="program-calistung-image">
          <img
            className="les-privat_mahasiswa-image"
            src="/images/les-private/mahasiswa/les-privat-mahasiswa-content.webp"
            alt={`Pentingnya Les Privat untuk Mahasiswa - ${
              location ? `${location}` : "Indonesia"
            }By Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+Mahasiswa";
            }}
            loading="lazy"
          />
        </div>
      </div>
      <br />
      <p>
        Melalui Les Privat Mahasiswa bersama Matrix Tutoring, permasalahan
        belajar tersebut dapat teratasi. Mahasiswa akan mendapatkan pendampingan
        belajar yang terarah dan fleksibel. Tutor berpengalaman siap membantu
        memahami materi kuliah yang sulit, mendampingi latihan soal secara
        intensif, sekaligus memberikan strategi belajar efektif agar mahasiswa
        lebih percaya diri dalam perkuliahan dan mampu meraih prestasi akademik
        terbaik.
      </p>
      <br />

      {/* Jadwal Fleksibel, Belajar dari Mana Saja dan Kapan Saja */}
      <h3>Jadwal Fleksibel, Belajar dari Mana Saja dan Kapan Saja</h3>
      <p>
        Matrix Tutoring merupakan lembaga privat yang sudah berpengalaman dalam
        melayani permintaan guru les privat mahasiswa datang ke rumah area
        Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, BSD dan sekitarnya.
        Kini Matrix Tutoring juga bisa melayani permintaan Les Privat Online
        untuk Mahasiswa di seluruh wilayah Indonesia hingga Luar Negeri. Les
        Privat Online akan menggunakan media atau aplikasi video call seperti
        Zoom, Google Meet, WhatsApp, dan aplikasi pendukung lainnya yang
        memungkinkan interaksi antara guru dan mahasiswa secara tatap muka
        virtual.
      </p>
    </div>
  );
};

export default LesPrivatMahasiswaContent;
