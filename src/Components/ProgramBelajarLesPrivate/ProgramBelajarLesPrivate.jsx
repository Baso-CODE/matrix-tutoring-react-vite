import "./ProgramBelajarLesPrivate.css";

const programs = [
  { image: "/images/program-belajar/les_privat_calistung.webp" },
  { image: "/images/program-belajar/les_privat_sd.webp" },
  { image: "/images/program-belajar/les_privat_smp.webp" },
  { image: "/images/program-belajar/les_privat_sma.webp" },
  { image: "/images/program-belajar/les_privat_tka.webp" },
  { image: "/images/program-belajar/les_privat_utbk.webp" },
  { image: "/images/program-belajar/les_privat_um-swasta.webp" },
  { image: "/images/program-belajar/les_privat_olimpiade.webp" },
  { image: "/images/program-belajar/les_privat_bahasa.webp" },
  { image: "/images/program-belajar/les_privat_cpns.webp" },
  { image: "/images/program-belajar/les_privat_kedinasan.webp" },
  { image: "/images/program-belajar/les_privat_kki.webp" },
  { image: "/images/program-belajar/les_privat_komputer.webp" },
  { image: "/images/program-belajar/les_privat_mahasiswa.webp" },
  { image: "/images/program-belajar/les_privat_mengaji.webp" },
  { image: "/images/program-belajar/les_privat_toefl.webp" },
];

const ProgramBelajarLesPrivat = () => {
  return (
    <div className="container-all">
      <div className="programBelajar-section">
        <h2 className="programBelajar-title">
          Program Belajar Matrix Tutoring
        </h2>
        <p className="programBelajar-description">
          Program Les Privat terdiri dari <strong>Les Privat Online</strong> dan{" "}
          <strong>Les Privat Offline</strong>. Untuk siswa dari berbagai kota di
          seluruh Indonesia yang memiliki akses jaringan internet yang baik,
          bisa memilih les privat online. Bagi siswa yang berdomisili di
          Jabodetabek dapat memilih les privat offline (guru privat datang ke
          rumah) atau les privat online. Berikut adalah Program Online dan
          Offline dari Matrix Tutoring:
        </p>
        <div className="programBelajar-les-privat">
          {programs.map((program, index) => (
            <div className="programBelajar-card" key={index}>
              <img
                loading="lazy"
                src={program.image}
                alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramBelajarLesPrivat;
