import MateriUjianSimakUI from "../MateriUjianSimakUI/MateriUjianSimakUI";
import ProgramLesPrivatSimakKKI from "../ProgramLesPrivatSimakKKI/ProgramLesPrivatSimakKKI";
import "./ProgramSpesialisSimak.css";

const ProgramSpesialisSimak = () => {
  return (
    <div className="container-all">
      <div className="centered-content-programSimak">
        <h2>Program Spesialis Privat Simak UI</h2>

        {/* Deskripsi Program */}
        <p>
          Program Spesialis Privat SIMAK UI adalah program bimbingan privat yang
          dirancang khusus untuk siswa yang ingin mempersiapkan diri menghadapi
          ujian SIMAK UI secara lebih fokus dengan waktu belajar jangka pendek
          atau jangka panjang.
        </p>
        <p>
          Program jangka pendek bersifat intensif sehingga sangat cocok untuk
          siswa kelas 12 dan alumni (siswa Gap Year) yang akan segera mengikuti
          seleksi, namun ingin memperkuat pemahaman materi inti sekaligus
          mengasah kemampuan mengerjakan soal dengan strategi yang tepat.
          Sementara itu, bagi siswa kelas 10 dan 11 yang ingin mulai belajar
          lebih awal untuk persiapan Ujian Masuk UI bisa mengambil Program
          Jangka Panjang.
        </p>

        {/* Subheading */}
        <h3>3 Program Spesialis Privat Simak UI</h3>

        {/* Program Jangka Pendek */}
        <div className="program-section">
          <h4>Program Jangka Pendek (Program Intensif)</h4>
          <ul>
            <li>
              Cocok untuk persiapan mendekati ujian (2 minggu - 3 bulan sebelum
              ujian)
            </li>
            <li>
              Fokus pada strategi pengerjaan soal sehingga sesi belajar lebih
              banyak difokuskan membahas soal-soal dibanding materi.
            </li>
            <li>
              Tersedia paket sesi dengan jumlah pertemuan yang bisa disesuaikan
              dengan kebutuhan dan permintaan siswa.
            </li>
            <li>
              Intensitas belajar setiap hari atau 3 - 4 pertemuan dalam
              seminggu.
            </li>
          </ul>
        </div>

        {/* Program Reguler */}
        <div className="program-section">
          <h4>Program Reguler</h4>
          <ul>
            <li>
              Cocok untuk siswa yang memiliki jadwal padat sehingga tidak bisa
              mengikuti jadwal yang intensif dan ingin lebih fleksibel.
            </li>
            <li>
              Fokus pada pembahasan soal, tetapi juga sekaligus membahas bab dan
              materi yang belum dikuasai siswa.
            </li>
            <li>Tidak terikat paket.</li>
            <li>
              Intensitas belajar 2 - 3 pertemuan dalam seminggu atau bisa
              disesuaikan.
            </li>
          </ul>
        </div>

        {/* Program Jangka Panjang */}
        <div className="program-section">
          <h4>Program Jangka Panjang (Longterm Program)</h4>
          <ul>
            <li>
              Cocok untuk siswa kelas 10–11 yang ingin belajar materi SIMAK UI
              sejak awal.
            </li>
            <li>
              Fokus pada pemahaman konsep dasar dan materi yang biasanya
              diujikan pada SIMAK UI, diselingi latihan soal untuk mengasah
              kemampuan.
            </li>
            <li>Tidak terikat paket.</li>
            <li>Intensitas belajar 1 - 2 pertemuan dalam seminggu.</li>
          </ul>
        </div>
        <MateriUjianSimakUI />
        <br />
        <br />
        <ProgramLesPrivatSimakKKI />
      </div>
    </div>
  );
};

export default ProgramSpesialisSimak;
