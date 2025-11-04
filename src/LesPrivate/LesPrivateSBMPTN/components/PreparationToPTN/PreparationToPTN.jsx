import "./PreparationToPTN.css";
const PreparationToPTN = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content__preparationToPTN">
        <img
          src="/images/les-private/sbmptn/UTBK-5x4.webp"
          alt={`Preparation to PTN in ${
            location ? location : "Indonesia"
          } - Les Privat UTBK SNBT`}
          className="les-privat-sd-image"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+UTBK+SNBT";
          }}
        />{" "}
        <h2>Les Privat UTBK SNBT – Persiapan Tembus Masuk PTN Impian</h2>
        <p>
          Masuk Perguruan Tinggi Negeri (PTN) favorit adalah impian besar bagi
          hampir semua siswa SMA/SMK/MA di Indonesia. PTN tidak hanya menawarkan
          kualitas pendidikan yang tinggi, tetapi juga membuka peluang karier
          yang lebih luas di masa depan. Namun, persaingan UTBK SNBT semakin
          tahun semakin ketat. Ribuan bahkan ratusan ribu siswa bersaing setiap
          tahunnya memperebutkan kursi terbatas di jurusan favorit.
        </p>
        <p>
          Dalam kondisi seperti ini, belajar mandiri sering kali tidak cukup.
          Materi UTBK SNBT berbeda dengan ujian sekolah biasa karena lebih
          menekankan pada kemampuan berpikir kritis, logika, penalaran, serta
          strategi menyelesaikan soal dalam waktu cepat. Oleh karena itu, siswa
          membutuhkan bimbingan belajar yang terarah, personal, dan intensif
          agar cita-cita masuk PTN Impian dapat terwujud.
        </p>
      </div>
    </section>
  );
};

export default PreparationToPTN;
