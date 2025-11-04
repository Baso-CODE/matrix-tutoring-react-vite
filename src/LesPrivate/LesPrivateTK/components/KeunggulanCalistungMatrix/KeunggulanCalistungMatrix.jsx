import "./KeunggulanCalistungMatrix.css";
const KeunggulanCalistungMatrix = ({ location }) => {
  return (
    <div className="container-all">
      <div className="target-belajar-smp">
        <div className="target-container">
          <img
            className="les-privat-sd-image_v2"
            src="/images/les-private/tk/keunggulan-tk.webp"
            alt={`Ilustrasi Keunggulan Les Privat Calistung ${
              location ? `di ${location}` : "Indonesia"
            } - Matrix Tutoring`}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x700/007bff/ffffff?text=Keunggulan+Privat+Calistung";
            }}
            loading="lazy"
          />
          <div className="target-content">
            <h2>Keunggulan Les Privat Calistung di Matrix Tutoring</h2>
            <p>
              Apa saja keunggulan mengikuti les privat calistung di Matrix
              Tutoring? Dengan bimbingan dari tutor profesional, siswa akan
              mendapatkan berbagai manfaat yang mendukung perkembangan akademis
              dan karakter mereka, antara lain:
            </p>
            <ul className="ul-keunggulan-calistung-matrix">
              <li>
                Fleksibel dari segi waktu dan tempat, anak bisa belajar di rumah
                dengan pengawasan orangtua
              </li>
              <li>
                Guru datang ke rumah sesuai dengan jadwal yang disepakati
                bersama
              </li>
              <li>
                Guru berpengalaman, penyayang anak, dan sabar menghadapi si
                kecil
              </li>
              <li>
                Orangtua dapat berkomunikasi dengan guru terkait perkembangan
                anak
              </li>
              <li>
                Metode Belajar One one One (1 guru 1 anak) sehingga fokus guru
                akan sepenuhnya pada anak dan mampu menyesuaikan gaya belajar
                anak
              </li>
              <li>
                Guru membawa alat dan bahan belajar anak yang kreatif dan
                menarik minat anak untuk belajar
              </li>
              <li>
                Orangtua mendapat laporan perkembangan belajar anak secara
                berkala
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeunggulanCalistungMatrix;
