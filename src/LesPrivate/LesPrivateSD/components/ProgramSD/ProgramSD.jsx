import "./ProgramSD.css";
const ProgramSD = ({ location }) => {
  return (
    <div className="container-all" id="program-sd">
      <div className="les-privat-sd-section">
        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            <h2>Program Les Privat Akademik SD – Matrix Tutoring</h2>
            <p>
              Program Les Privat SD dari Matrix adalah layanan belajar 1 siswa 1
              guru (One on One Tutoring), yang membantu anak lebih memahami
              pelajaran sekolah dengan pendekatan personal, efektif, dan
              menyenangkan.
            </p>
            <p>Program ini ditujukan untuk:</p>
            <ul className="les-privat-sd-list-numbered">
              <li>Semua Kelas: SD Kelas 1 s/d 6</li>
              <li>
                Semua Kurikulum: Kurikulum Nasional (Merdeka, K13), Nasional
                Plus, dan Internasional
              </li>
              <li>
                Semua Mata Pelajaran: Calistung, Matematika, IPA, Bahasa
                Indonesia, Bahasa Inggris, PKN, dan lainnya.
              </li>
            </ul>
            <p>
              Les Privat bisa dilaksanakan secara offline (guru datang ke rumah)
              dan online (via Zoom/Google Meet) sesuai dengan kebutuhan siswa.
            </p>
          </div>

          {/* IMAGE */}
          <div className="program-calistung-image">
            <img
              className="les-privat-sd-image"
              src="/images/les-private/sd/akademik-sd.webp"
              alt={`Les Privat SD Offline dan Online ${
                location ? `${location}` : "Indonesia"
              } - Matrix Tutoring`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/FFFFFF?text=Les+Privat+SD";
              }}
              loading="lazy"
            />
          </div>
        </div>
        <h3>Siapa Pengajar Les Privat SD dari Matrix Tutoring?</h3>
        <p>
          Matrix percaya bahwa guru yang baik bukan hanya sekadar pintar, tetapi
          juga paham cara menyampaikan materi dengan tepat kepada anak. Pengajar
          Matrix Tutoring berasal dari alumni dan mahasiswa dari UI, UGM, ITB,
          IPB, STAN, STIS, UNJ, dan Perguruan Tinggi lainnya.
        </p>
        <p>
          Selain itu, terdapat beberapa dosen, guru sekolah, dan asisten dosen
          berpengalaman yang menjadi bagian dari guru privat Matrix Tutoring.
          Para pengajar kami telah diseleksi secara ketat, dilatih, dan
          ditugaskan sesuai dengan bidang keahliannya. Guru Privat Matrix bukan
          hanya pintar, tetapi juga paham bagaimana membuat anak merasa nyaman
          belajar.
        </p>
      </div>
    </div>
  );
};

export default ProgramSD;
