import "./ProgramLesPrivatSD.css";
const ProgramLesPrivatSD = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatSD">
        <h2>Les Privat Anak SD Kelas 1 – 6</h2>
        <p>
          Guru les privat SD datang langsung ke rumah untuk membimbing anak
          dalam semua mata pelajaran dan menyesuaikan dengan berbagai kurikulum
          sekolah, sehingga anak lebih mudah memahami materi dan terbantu dalam
          mengerjakan tugas maupun persiapan ujian.
        </p>
        <img
          className="les-privat-sd-image"
          src="/images/les-private/sd/les-privat-sd-all-kelas.webp"
          alt={`Ilustrasi anak SD belajar dengan bimbingan privat di rumah - ${
            location ? `${location}` : "Indonesia"
          } `}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x360/007bff/FFFFFF?text=Program+Les+Privat+SD";
          }}
          loading="lazy"
        />
        <h3>Mengapa Les Privat untuk Anak SD itu Penting?</h3>
        <p>
          Anak SD butuh bimbingan lebih dari sekadar belajar di sekolah. Usia SD
          adalah masa penting untuk membentuk kebiasaan belajar...
        </p>
        <ol className="numbered-list">
          <li>
            Kesulitan mengikuti pelajaran di kelas sehingga anak tertinggal
            pelajaran
          </li>
          <li>
            Merasa malas belajar karena tidak paham penjelasan guru di sekolah
            sehingga nilainya turun
          </li>
          <li>
            Anak merasa minder dan tidak percaya diri dengan kemampuan yang
            dimiliki
          </li>
          <li>
            Terbiasa mencontek atau hanya menghafal tanpa memahami pelajaran
          </li>
        </ol>
        <p>
          Melalui Les Privat SD bersama Matrix Tutoring, anak dibimbing secara
          bertahap dan sabar, mulai dari memahami konsep dasar sampai dengan
          menguasai soal-soal latihan dan ujian.
        </p>

        <h3>Metode Belajar Les Privat SD</h3>
        <p>
          Matrix Tutoring menggunakan metode pembelajaran yang menyesuaikan
          dengan karakter dan gaya belajar siswa, seperti:
        </p>
        <ul className="checklist">
          <li>Belajar lewat latihan soal dan permainan edukatif</li>
          <li>
            Pembiasaan membaca soal dengan teliti dan memahami perintah soal
          </li>
          <li>Teknik menghafal kreatif (untuk mata pelajaran hafalan)</li>
          <li>
            Pendekatan tanya-jawab agar anak aktif dan tidak hanya duduk diam
          </li>
        </ul>

        <h3>Target Les Privat SD</h3>
        <p>Program Les Privat SD diperuntukkan bagi:</p>
        <ul>
          <li>Anak yang membutuhkan tambahan pemahaman pelajaran sekolah</li>
          <li>
            Anak yang membutuhkan bimbingan mengerjakan PR dan tugas sekolah
          </li>
          <li>Orang tua yang ingin anaknya siap menghadapi ujian di sekolah</li>
          <li>Anak yang sedang mempersiapkan diri masuk SMP Favorit</li>
          <li>Anak yang akan mengikuti Olimpiade tingkat SD</li>
          <li>
            Anak yang membutuhkan dukungan belajar yang menyenangkan dan tidak
            membosankan
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProgramLesPrivatSD;
