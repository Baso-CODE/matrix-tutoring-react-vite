import "./LesPrivateMahasiswaHeader.css";
import LesPrivateMahasiswaList from "./LesPrivateMahasiswaList";

const LesPrivateMahasiswaHeader = () => {
  return (
    <section className="container-all">
      <div className="centered-content-lesPrivate-siswa">
        <div className="image-lesPrivate">
          <img
            loading="lazy"
            src="/images/les-private/mahasiswa/mahasiswa.webp"
            alt="Les Private Mahasiswa"
          />
        </div>
        <h1 id="les-privat-mahasiswa">
          Les Privat Mahasiswa – Guru Les Privat Mata Kuliah Jurusan dan
          Universitas
        </h1>
        <p>
          Les Privat Mahasiswa | Guru Privat untuk Mahasiswa di Jakarta Bogor
          Depok Tangerang Tangsel Bekasi Bintaro & BSD, (Matematika Teknik |
          Kalkulus | Statistik | Ekonomi | Akuntansi | dan mata kuliah lainnya)
          Guru les privat datang ke rumah & Les privat online.
        </p>
        <br />
        {/* Section 1 */}
        <h2
          id="pentingnya-les-privat-mahasiswa"
          className="centered-mahasiswacontent-lesPrivate-mahasiswa">
          Pentingnya Les Privat untuk Mahasiswa
        </h2>
        <p className=" ">
          Menjadi seorang mahasiswa adakalanya mengalami kesulitan dalam
          memahami mata kuliah tertentu yang membuat mahasiswa sering kali harus
          pergi ke perpustakaan untuk meminjam buku atau bertanya pada teman
          terkait materi yang belum dikuasai. Namun, hal itu tidak efektif untuk
          terus dilakukan mengingat banyak mata kuliah yang baru dan tidak
          pernah diajarkan saat masih SMA. Oleh karena itu, setiap mahasiswa
          membutuhkan pendamping belajar yang memahami betul terkait mata kuliah
          pada suatu program studi.
        </p>
        <br />
        <p>
          Di samping itu, dengan lamanya penerapan belajar dengan sistem PJJ
          membuat mahasiswa merasa kebingungan kepada siapa mereka harus
          bertanya ketika tidak bisa memahami penjelasan materi dari dosen.
          Dalam perkembangannya, permintaan terhadap guru les privat untuk
          mengajar mahasiswa semakin meningkat, khususnya guru les privat
          mahasiswa ke rumah.
        </p>
        <br />
        {/* Section 2 */}
        <h2
          className="centered-mahasiswacontent-lesPrivate-mahasiswa"
          id="jadwal-fleksibel-dan-les-privat-online">
          Jadwal Fleksibel dan Les Privat Online
        </h2>
        <p className="">
          Les Privat Matrix sebagai lembaga privat yang sudah berpengalaman
          dalam melayani permintaan guru les privat mahasiswa datang ke rumah
          area Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, BSD dan
          sekitarnya. Kini Matrix juga bisa melayani permintaan les privat
          mahasiswa untuk yang berada di luar Jabodetabek dengan sistem les
          privat online. Les privat online akan menggunakan media atau aplikasi
          video call seperti Zoom, Skype, Google Hangout, Google Meet, WhatsApp,
          dan aplikasi pendukung lainnya yang memungkinkan interaksi antara guru
          dan mahasiswa secara online.
        </p>
        <br />
        <br />

        {/* section 3 */}
        <section id="list-les-privat-mahasiswa">
          <LesPrivateMahasiswaList />
          <br />
          <p className="">
            Selain mata kuliah universitas dan jurusan, Les Privat Matrix juga
            melayani permintaan mahasiswa yang membutuhkan les privat untuk
            persiapan SIMAK UI S2, CPNS, TOEFL, IELTS, TOEIC, Komputer maupun
            Mengaji. Kami siap melayani permintaan les privat mahasiswa
            se-Indonesia. Les Privat Matrix | Support Your Vision | Les Privat
            Mahasiswa Offline (Jabodetabek) dan Online (Seluruh Indonesia).
          </p>
        </section>
      </div>
    </section>
  );
};

export default LesPrivateMahasiswaHeader;
