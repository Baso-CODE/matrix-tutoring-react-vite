import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    title: "Kami memahami betul karakter soal SIMAK UI ",
    description:
      "Tidak semua materi SMA muncul dalam ujian Simak. Banyak siswa terjebak belajar semua hal sekaligus, padahal yang dibutuhkan adalah fokus pada pola soal dan materi prioritas. Dengan program kami, siswa akan diarahkan hanya pada bagian penting yang sering keluar di ujian, sehingga waktu belajar lebih efektif.",
  },
  {
    id: 2,
    title: "Kami memiliki Guru Berpengalaman dan Spesialis SIMAK UI ",
    description:
      "Guru privat bukan hanya sebagai pengajar, tetapi juga mentor. Para guru akan tahu bagaimana menghadapi soal yang menjebak, cara mengatur strategi pengerjaan, dan tips agar siswa bisa lebih percaya diri di ruang ujian. Guru kami banyak yang merupakan alumni Universitas Indonesia yang sudah merasakan sendiri perjuangan menghadapi SIMAK, sehingga pendekatan mereka sangat relevan dan realistis.",
  },
  {
    id: 3,
    title: "Program kami disusun dengan Kurikulum Terstruktur dan Sistematis",
    description:
      "Dimulai dari pemahaman konsep dasar, lalu latihan soal bertingkat, hingga simulasi ujian. Setiap pertemuan memiliki target jelas, sehingga perkembangan siswa bisa dipantau dengan mudah.",
  },
  {
    id: 4,
    title: "Kami menggunakan Pendekatan Belajar Personal (One-on-One)",
    description:
      "Setiap siswa memiliki gaya belajar dan kesulitan yang berbeda. Oleh karena itu, dengan sistem belajar les privat memungkinkan tutor menyesuaikan metode mengajar dengan karakter siswa. Siswa bisa lebih leluasa bertanya, tidak takut salah, dan mendapatkan bimbingan yang benar-benar fokus hanya untuk dirinya.",
  },
  {
    id: 5,
    title:
      "Program belajar Les Privat Simak UI memiliki Fleksibilitas dari segi Waktu dan Tempat Belajar",
    description:
      "Tidak perlu khawatir perihal jadwal karena sesi belajar bisa diatur sesuai dengan ketersediaan waktu siswa, baik pagi, siang, atau malam, akhir pekan, maupun hari libur nasional tetap bisa dilakukan penjadwalan les. Sistem Privat Offline memungkinkan bisa belajar di rumah dengan nyaman, sedangkan sistem Privat Online membuat siswa bisa belajar dari mana saja, bahkan dari luar negeri.",
  },
  {
    id: 6,
    title:
      "Kami memiliki Modul Bahan Belajar Simak UI lengkap yang dirancang khusus untuk Simak UI",
    description:
      "Modul Simak UI di kami bisa dibeli terpisah dari biaya les privat.",
  },
  {
    id: 7,
    title:
      "Tutor atau guru privat memahami betul Strategi Khusus Menjawab Soal Simak UI",
    description:
      "Ujian SIMAK UI bukan hanya menguji pengetahuan, tetapi juga ketepatan strategi. Guru privat (tutor) akan membekali siswa dengan trik mengatur waktu, cara memilih soal prioritas, dan teknik cepat menjawab soal sulit.",
  },
  {
    id: 8,
    title: "Tutor dapat menjadi pendamping dan Pemberi Motivasi Belajar",
    description:
      "Persiapan ujian sering membuat siswa stres atau kehilangan semangat. Tutor kami bukan hanya sebagai pengajar, tetapi juga pendamping yang memberi dorongan moral, menjaga ritme belajar, dan memotivasi siswa agar tetap percaya diri.",
  },
  {
    id: 9,
    title:
      "Matrix memiliki Rekam Jejak Keberhasilan siswa lolos masuk Universitas Indonesia",
    description:
      "Sudah banyak siswa kami yang berhasil diterima UI lewat Jalur Simak UI dan KKI di berbagai fakultas bergengsi. Testimoni mereka menjadi bukti nyata bahwa dengan sistem, metode, dan pendampingan yang tepat, mimpi masuk UI bisa diwujudkan.",
  },
];

const WhyShouldYouTake = () => {
  // const contactData = useAppSelector(selectContactCsData);

  // const finalUrl = contactData?.link_cta;
  return (
    <section className="how-to-order-section">
      <div className="how-to-order-container">
        <div className="how-to-order-main">
          <p className="how-to-order-label">MENGAPA HARUS</p>
          <h2 className="how-to-order-heading">
            Les Privat SIMAK UI Bersama <br />
            Matrix Tutoring?
          </h2>
          <Link
            to={"/contact-us"}
            target="_blank"
            rel="noopener noreferrer"
            className="start-order-link">
            <button className="button-how-to-order">
              Klik DI SINI!
              <svg
                className="icon-button-how-to-order"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </Link>
        </div>
        {/* Left Column: Steps */}
        <div className="how-to-order-steps">
          {list.map((step) => (
            <div
              key={step.id}
              className="order-step-card"
              data-background-number={step.id < 10 ? `0${step.id}` : step.id}>
              <div className="step-header">
                <div className="step-number">
                  {step.id < 10 ? `0${step.id}` : step.id}
                </div>
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyShouldYouTake;
