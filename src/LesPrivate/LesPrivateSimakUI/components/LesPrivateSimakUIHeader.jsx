// LesPrivateSimakUIHeader.js
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import "./LesPrivateSimakUIHeader.css";

const LesPrivateSimakUIHeader = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content-lesPrivate-simakUI">
        <h2 id="les-privat-simak-ui">
          Les Privat Simak UI Fokus Intensif Persiapan Ujian Mandiri Universitas
          Indonesia
        </h2>
        <p>
          Matrix Tutoring memiliki Layanan Program Intensif Privat Simak UI
          persiapan Ujian Mandiri UI dengan dua pilihan sistem belajar, yaitu
          Privat Offline dan Online . Pembelajaran dengan sistem Privat Offline
          (Guru les privat datang ke rumah) dapat menjangkau Anda yang berlokasi
          di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi, Bandung, Bali,
          Medan, Semarang, Surabaya, dan Yogyakarta. Sementara itu, Privat
          Online (via Zoo/Google Meet) dapat menjangkau seluruh wilayah di
          Indonesia hingga Luar Negeri.
        </p>
        <div className="image-lesPrivate">
          <img
            loading="lazy"
            src="/images/les-private/simak-ui/SIMAK-UI-5x4.webp"
            alt={`Persiapkan Ujian Mandiri Universitas Indonesia dengan Les Privat Simak UI ${
              location ? `di ${location}` : "Indonesia"
            } Matrix Tutoring`}
          />
        </div>
        {/* content 1 */}
        <Content1 />
        <br />
        <br />

        {/*Content 2  */}
        <Content2 />
        <br />
        <br />

        {/* Content 3 */}
        <Content3 />

        {/* content 4 */}
        {/* <h2 id="sistem-belajar-terstruktur">Sistem Belajar Terstruktur</h2>
        <p className="">
          Selain kemampuan siswa, sistem belajar yang terstruktur dan sistematis
          dilengkapi dengan guru les privat yang tepat akan memperbesar peluang
          siswa untuk menjalani proses belajar dengan lebih baik dan mendapatkan
          hasil yang terbaik. Les Privat Matrix siap mengirimkan guru les privat
          sbmptn yang sesuai untuk mendampingi belajar Ananda.
        </p> */}
        {/* <div className="image-lesPrivate">
          <img
            loading="lazy"
            src="/images/les-private/simak-ui/universitas-impian.webp"
            alt="Les UI"
          />
        </div> */}
        {/* <p>
          Les Privat Matrix (Matrix Tutoring) adalah lembaga penyedia layanan
          jasa les privat untuk TK, SD, SMP, SMA, UN, OSN, Simak UI, SBMPTN dan
          Mahasiswa, guru datang ke rumah dengan spesialisasi pengajaran
          berdasarkan keahlian tutor. Konsep pembelajaran sesuai dengan
          kurikulum yang diterapkan sekolah. Pengajar Les Privat Matrix adalah
          mahasiswa dan alumni UI, UGM, ITB, IPB, STAN, STIS, UNJ, SSE, UIN dan
          berbagai Perguruan Tinggi terbaik lainnya yang telah memiliki
          pengalaman, diseleksi, dilatih dan diarahkan mengajar sesuai dengan
          spesialisasi dalam bidang ilmu yang dikuasai.
        </p>
        <br /> */}
        {/* <div id="program-simak-ui">
          <h2>Program Les Privat Matrix</h2>
          <LesPrivateSimakUIProgram />
        </div>
        <div id="keunggulan-program-simak-ui">
          <KeunggulanLesPrivateSimakUIList />
        </div> */}
      </div>
    </section>
  );
};

export default LesPrivateSimakUIHeader;
