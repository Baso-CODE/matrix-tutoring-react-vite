import "./SolusiBelajarSMP.css";

const SolusiBelajarSMP = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatSMP">
        <div className="content-smp-wrapper">
          {/* TEXT */}
          <div className="text-section-solusi-belajar-smp">
            <h2>Les Privat SMP: Solusi Belajar yang Efektif dan Personal</h2>
            <p>
              Jenjang SMP adalah masa transisi penting dari hanya belajar konsep
              dasar menjadi belajar yang lebih kompleks dan mendalam. Siswa SMP
              mulai menghadapi tantangan yang lebih besar dalam belajar di
              antaranya:
            </p>
            <ul className="numbered-list">
              <li>Pelajaran yang makin sulit dan beragam</li>
              <li>Jadwal padat dan tugas sekolah yang menumpuk</li>
              <li>
                Tekanan dari nilai, ranking, dan persiapan masuk SMA unggulan
              </li>
            </ul>
            <p>
              Tanpa bimbingan yang tepat, siswa bisa mudah kewalahan, kehilangan
              motivasi, bahkan takut atau tidak suka dengan pelajaran tertentu.
            </p>

            <p>
              <strong>Les Privat SMP dari Matrix Tutoring</strong> hadir sebagai
              solusi belajar yang lebih efektif, nyaman, dan fokus pada
              kebutuhan belajar siswa.
            </p>
            <p>
              Dengan pendampingan guru privat yang berpengalaman, siswa SMP
              tidak hanya memahami materi pelajaran, tetapi juga dilatih cara
              belajar yang mandiri, disiplin, serta strategi menghadapi ujian
              sekolah dan ujian masuk SMA favorit. Guru kami menggunakan
              pendekatan personal yang menyesuaikan gaya belajar masing-masing
              anak, sehingga proses belajar menjadi lebih menyenangkan dan mudah
              dipahami.
            </p>
          </div>

          {/* IMAGE */}
          <div className="image-section-solusi-belajar-smp">
            <img
              className="les-privat-sd-image"
              src="/images/les-private/smp/solusi-belajar-les-privat-smp.webp   
              "
              // solusi-belajar-smp.jpg
              alt={`Solusi Belajar Les Privat SMP di ${
                location ? location : "Indonesia"
              } - Matrix Tutoring`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x460/007bff/ffffff?text=Solusi+Belajar+Les+Privat+SMP";
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolusiBelajarSMP;
