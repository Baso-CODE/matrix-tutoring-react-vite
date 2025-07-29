import React from "react";
import "./AboutUsHistoryAndSuceesLesPrivate.css";

const AboutUsHistoryAndSuccess = () => {
  return (
    <section className="about-us-history-and-success">
      <div className="about-us-section history">
        <div className="about-us-image-history-and-success">
          <img
            src={"/images/about-us/history-us.webp"}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            width={"1269"}
            height={"1269'"}
            loading="lazy"
          />
        </div>
        <div className="about-us-description">
          <h2>History</h2>
          <p>
            Matrix Tutoring adalah lembaga Les Privat ONLINE dan Privat ke Rumah
            yang didirikan oleh alumni Universitas Indonesia yang telah
            berpengalaman lebih dari 8 tahun dalam layanan bimbel, les privat,
            dan kerjasama homeschooling. Dengan tingginya kebutuhan dukungan
            akademik yang sifatnya personal dan customized di area Jabodetabek
            maka dengan merekrut para pengajar yang berkompeten dan profesional,
            Matrix siap memberikan layanan terbaik.
          </p>
          <p>
            Seiring dengan berjalannya waktu, Matrix selalu mengalami
            pertumbuhan positif. Ribuan siswa hebat telah bergabung dan
            dibimbing oleh pengajar yang smart. Diiiringi dengan layanan
            berkualitas, selalu berfokus pada peningkatan prestasi siswa, Matrix
            telah menjadi kepercayaan orang tua untuk mendampingi anak dalam
            belajar.
          </p>
        </div>
      </div>
      <div className="about-us-section success-story">
        <div className="about-us-description">
          <h2 className="about-us-success-story-h2">Success Story</h2>
          <p>
            Dalam perjalanan bisnis yang dinamis, Matrix mendapatkan kepercayaan
            orang tua siswa untuk menangani siswa yang berasal dari berbagai
            sekolah nasional dan sekolah internasional. Tidak hanya dari
            Indonesia, siswa Matrix juga ada yang berasal dari kalangan
            expatriates.
          </p>
          <p>
            Kami meyakini bahwa siswa adalah amanah yang diberikan oleh orang
            tua. Dengan saling support informasi, kami dapat mengupayakan
            program terbaik untuk Anda. Pengajar dengan metode dan pendekatan
            mengajar yang bagus juga merupakan salah satu kunci keberhasilan
            Matrix dalam mengantarkan siswa sukses akademis.
          </p>
          <p>Terima kasih atas kepercayaan Anda.</p>
        </div>
        <div className="about-us-image-history-and-success">
          <img
            src={"/images/about-us/succes-story.webp"}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
            height={"1152"}
            width={"834"}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHistoryAndSuccess;
