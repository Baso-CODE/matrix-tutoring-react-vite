import "./TargetBelajarSMP.css";
const TargetBelajarSMP = ({ location }) => {
  return (
    <section className="container-all">
      <div className="target-belajar-smp">
        <div className="target-container">
          <img
            className="les-privat-sd-image_v2"
            src="/images/les-private/smp/target-belajar-les-privat-smp.webp"
            // target-belajar-smp.png
            alt={`Target Belajar Image Les Privat SMP di ${
              location ? location : "Indonesia"
            } - Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=Target+Belajar+Les+Privat+SMP";
            }}
            loading="lazy"
          />

          <div className="target-content">
            <h2>Target Belajar Les Privat SMP - Matrix Tutoring</h2>
            <p>
              Dengan mengikuti les privat secara konsisten, anak diharapkan
              dapat:
            </p>
            <ul className="checklist">
              <li> Meningkatkan nilai rapor secara konsisten</li>
              <li>
                Mendapatkan bimbingan khusus pada mata pelajaran yang dirasa
                sulit
              </li>
              <li>
                Memahami konsep pelajaran lebih mendalam dan terlatih
                mengerjakan berbagai latihan soal dari level mudah sampai sulit
              </li>
              <li> Menguasai materi sesuai dengan kurikulum sekolah siswa</li>
              <li> Mampu menghadapi ulangan atau ujian semester</li>
              <li>
                Membangun rasa percaya diri saat presentasi atau diskusi di
                kelas
              </li>
              <li> Mengatur waktu belajar lebih efektif dan disiplin</li>
              <li>
                Mengembangkan soft skills seperti problem solving dan komunikasi
              </li>
              <li> Memiliki fondasi yang kuat untuk masuk SMA favorit</li>
              <li> Terbiasa berpikir kritis, bukan sekadar menghafal</li>
              <li> Siap ikut lomba atau seleksi masuk sekolah unggulan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetBelajarSMP;
