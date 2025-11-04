import "./ProgramLesPrivatCalistung.css";
const ProgramLesPrivatCalistung = ({ location }) => {
  return (
    <section className="container-all" id="program-tk">
      <div className="centered-content-programLesPrivatCalistung">
        <h2>Les Privat Calistung untuk Anak TK/Paud/SD</h2>
        <p>Guru Privat TK ke Rumah Terbaik area Jabodetabek</p>
        <br />

        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            <h3>Mengapa Les Privat Calistung itu Penting?</h3>
            <p>
              Usia dini adalah fase emas perkembangan otak anak. Di usia inilah
              anak paling cepat menyerap informasi dan membentuk kebiasaan
              belajar. <strong>Calistung</strong> (Membaca, Menulis, dan
              Berhitung) adalah bekal utama anak saat memasuki dunia sekolah
              dasar. Tanpa penguasaan calistung yang baik, anak akan merasa
              tertinggal, minder, bahkan bisa kehilangan semangat belajar sejak
              dini.
            </p>

            <h4>Faktanya:</h4>
            <ul className="checklist">
              <li>Banyak anak TK & PAUD belum siap calistung saat masuk SD</li>
              <li>Setiap anak mempunyai kecepatan belajar yang berbeda</li>
              <li>
                Belajar di sekolah sering kali terlalu cepat dan kurang personal
              </li>
            </ul>

            <p>
              Melihat fakta tersebut, <strong>Les Privat Calistung</strong>{" "}
              dapat menjadi solusi terbaik untuk membantu anak yang kesulitan
              belajar membaca, menulis, dan berhitung. Dengan bimbingan guru
              berpengalaman, anak belajar dengan metode menyenangkan dan
              personal. Bukan hanya bisa calistung, tetapi juga menjadi lebih
              fokus dan mandiri!
            </p>
          </div>
          <div className="program-calistung-image">
            <img
              src="/images/les-private/tk/program-tk-calistung-siswa.webp"
              alt={`Program Les Privat Calistung ${
                location ? `di ${location}` : "Indonesia"
              } - Matrix Tutoring`}
              className="les-privat-sd-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+Calistung+beserta+logo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramLesPrivatCalistung;
