// LesPrivateSimakUIHeader.js
import React from "react";
import "./LesPrivateSimakUIHeader.css";
import LesPrivateSimakUIList from "./LesPrivateSimakUIList";
import LesPrivateSimakUIProgram from "./LesPrivateSimakUIProgram";
import KeunggulanLesPrivateSimakUIList from "./KeunggulanLesPrivateSimakUIList";

const LesPrivateSimakUIHeader = () => {
  return (
    <section className="centered-content-lesPrivate-simakUI">
      <h1 id="les-privat-simak-ui">
        Les Privat Simak UI – Guru ke Rumah & Les Online Simak UI 2021
      </h1>
      <p>
        Les Privat Simak UI datang ke rumah. Guru Les Privat Seleksi Bersama
        Masuk Universitas Indonesia di Jakarta, Bogor, Depok, Tangsel,
        Tangerang, Bekasi, Bintaro, BSD, Cibubur dan sekitarnya. Les Privat
        Intensif Program SBMPTN Masuk UI UGM ITB IPB Unpad Undip Unair dan
        berbagai PTN Favorit Impian Lainnya. Guru Privat SIMAK UI datang ke
        rumah untuk mengajar Les Privat SIMAK UI berdasarkan mata pelajaran yang
        dibutuhkan.
      </p>

      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/simak-ui/simakui.webp"
          alt="Les Privat simak ui"
        />
      </div>

      {/* content 1 */}
      <h2 id="kegiatan-belajar-simak-ui">
        Apakah kita sudah memberikan dukungan terbaik?
      </h2>
      <p>
        Bagi Ananda yang saat ini berada di kelas 12, sebentar lagi akan
        melaksanakan ujian penting yang dilaksanakan pada semester kedua, yaitu
        UN dan UASBN. Kemudian akan disibukkan kembali dengan Ujian Tulis,
        Seleksi Bersama Masuk Perguruan Tinggi Negeri dan Ujian Mandiri seperti
        Simak UI (Seleksi Masuk UI). Memilih jurusan yang sesuai dengan passion,
        target karir dan expertise untuk masa depan Ananda.
      </p>
      <p>
        Kita akan bisa melihat kemandirian, kedewasaan dan kesiapan Ananda dalam
        menjalani proses tersebut. Menentukan target belajar berdasarkan jenis
        ujian yang akan dijalani (splitting fokus), memilih program belajar yang
        sesuai (bimbel umum, les privat, pendalaman materi di sekolah) dan
        menentukan prioritas mata pelajaran apa saja yang perlu dikuasai lebih
        dalam pada saat belajar.
      </p>

      {/* content 2 */}
      <h2 id="dukungan-orang-tua">Dukungan Orang Tua yang Tak Tergantikan</h2>
      <p className="">
        Kemampuan Ananda dalam problem solving, manajemen waktu, manajemen emosi
        dan menentukan prioritas akan sangat teruji pada fase saat ini. Di fase
        perjuangan Ananda saat ini, diperlukan dukungan maksimal dari orang tua
        siswa. Memotivasi Ananda setiap saat agar terjaga konsistensi
        semangatnya dan juga menjadi pendengar saat Ananda kesulitan dalam
        memutuskan sesuatu atau memahami benang merah dari kesulitan yang
        dialaminya. Membantu memberikan feedback dan opsi-opsi terbaik yang
        dapat diambil Ananda untuk masa depannya. Dukungan terbaik orang tua
        sangat diperlukan dan tak tergantikan.
      </p>

      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/simak-ui/content-ui.webp"
          alt="Les UI"
        />
      </div>
      <p>
        Hal terbaik juga dapat dilakukan dengan memfasilitasi Ananda agar dapat
        belajar dengan guru les privat yang sesuai agar dapat membantunya dalam
        proses belajar. Berangkat dari hal tersebut, Les Privat Matrix membuka
        Program Intensif Simak UI – Les Privat Persiapan Masuk Perguruan Tinggi
        Negeri Favorit.
      </p>

      {/* content 3 */}
      <div id="list-lest-private-simak-ui">
        <LesPrivateSimakUIList />
      </div>

      {/* content 4 */}
      <h2 id="sistem-belajar-terstruktur">Sistem Belajar Terstruktur</h2>
      <p className="">
        Selain kemampuan siswa, sistem belajar yang terstruktur dan sistematis
        dilengkapi dengan guru les privat yang tepat akan memperbesar peluang
        siswa untuk menjalani proses belajar dengan lebih baik dan mendapatkan
        hasil yang terbaik. Les Privat Matrix siap mengirimkan guru les privat
        sbmptn yang sesuai untuk mendampingi belajar Ananda.
      </p>
      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/simak-ui/universitas-impian.webp"
          alt="Les UI"
        />
      </div>
      <p>
        Les Privat Matrix (Matrix Tutoring) adalah lembaga penyedia layanan jasa
        les privat untuk TK, SD, SMP, SMA, UN, OSN, Simak UI, SBMPTN dan
        Mahasiswa, guru datang ke rumah dengan spesialisasi pengajaran
        berdasarkan keahlian tutor. Konsep pembelajaran sesuai dengan kurikulum
        yang diterapkan sekolah. Pengajar Les Privat Matrix adalah mahasiswa dan
        alumni UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan berbagai
        Perguruan Tinggi terbaik lainnya yang telah memiliki pengalaman,
        diseleksi, dilatih dan diarahkan mengajar sesuai dengan spesialisasi
        dalam bidang ilmu yang dikuasai.
      </p>
      <div id="program-simak-ui">
        <h2>Program Les Privat Matrix</h2>
        <LesPrivateSimakUIProgram />
      </div>

      <div id="keunggulan-program-simak-ui">
        <KeunggulanLesPrivateSimakUIList />
      </div>
    </section>
  );
};

export default LesPrivateSimakUIHeader;
