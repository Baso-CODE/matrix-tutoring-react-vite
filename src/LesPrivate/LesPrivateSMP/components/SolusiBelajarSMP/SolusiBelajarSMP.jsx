import "./SolusiBelajarSMP.css";

const SolusiBelajarSMP = ({ location }) => {
  // 1. Setup Variabel Lokasi
  const locName = location || "Indonesia";
  const locSuffix = location ? `di ${location}` : "";

  // 2. Strategi SEO: 3 Variasi Judul (Anti-Duplikat)
  const titleVariations = [
    // Variasi 1 (Problem-Solution)
    `Les Privat SMP ${locSuffix}: Solusi Belajar yang Efektif`,
    // Variasi 2 (Service Focused)
    `Guru Les Privat SMP Datang ke Rumah ${locSuffix}`,
    // Variasi 3 (Result Focused)
    `Bimbingan Belajar SMP Personal & Terarah area ${locName}`,
  ];

  // 3. Logic Pemilihan Judul (Deterministik)
  const seed = location ? location.length : 0;
  const selectedTitle = titleVariations[seed % titleVariations.length];

  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatSMP">
        <div className="content-smp-wrapper">
          {/* TEXT */}
          <div className="text-section-solusi-belajar-smp">
            {/* DYNAMIC TITLE */}
            <h2>{selectedTitle}</h2>

            <p>
              Jenjang SMP adalah masa transisi penting dari hanya belajar konsep
              dasar menjadi belajar yang lebih kompleks dan mendalam. Siswa SMP{" "}
              <strong>{locSuffix}</strong> mulai menghadapi tantangan yang lebih
              besar dalam belajar di antaranya:
            </p>
            <ul className="numbered-list">
              <li>
                Pelajaran yang makin sulit dan beragam (Matematika, IPA
                Terpadu).
              </li>
              <li>Jadwal padat dan tugas sekolah yang menumpuk.</li>
              <li>
                Tekanan dari nilai, ranking, dan persiapan masuk SMA unggulan{" "}
                <strong>{locSuffix}</strong>.
              </li>
            </ul>
            <p>
              Tanpa bimbingan yang tepat, siswa bisa mudah kewalahan, kehilangan
              motivasi, bahkan takut atau tidak suka dengan pelajaran tertentu.
            </p>

            <p>
              <strong>Les Privat SMP {locSuffix} dari Matrix Tutoring</strong>{" "}
              hadir sebagai solusi belajar yang lebih efektif, nyaman, dan fokus
              pada kebutuhan belajar siswa.
            </p>
            <p>
              Dengan pendampingan guru privat yang berpengalaman, siswa SMP
              tidak hanya memahami materi pelajaran, tetapi juga dilatih cara
              belajar yang mandiri, disiplin, serta strategi menghadapi ujian
              sekolah dan ujian masuk SMA favorit <strong>{locSuffix}</strong>.
              Guru kami menggunakan pendekatan personal yang menyesuaikan gaya
              belajar masing-masing anak.
            </p>
          </div>

          {/* IMAGE */}
          <div className="image-section-solusi-belajar-smp">
            <img
              className="les-privat-sd-image"
              src="/images/les-private/smp/solusi-belajar-les-privat-smp.webp"
              // Alt Text Dioptimalkan untuk SEO Gambar
              alt={`Guru Les Privat SMP membantu siswa belajar di ${locName} - Matrix Tutoring`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x460/007bff/ffffff?text=Solusi+Belajar+Les+Privat+SMP";
              }}
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolusiBelajarSMP;
