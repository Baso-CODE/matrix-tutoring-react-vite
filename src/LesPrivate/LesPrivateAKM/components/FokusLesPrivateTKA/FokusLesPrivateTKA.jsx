import { FaCheckCircle } from "react-icons/fa";
import "./FokusLesPrivateTKA.css";

const FokusLesPrivateTKA = () => {
  const subjects = [
    "Matematika Lanjutan",
    "Bahasa Indonesia Lanjutan",
    "Bahasa Inggris Lanjutan",
    "Fisika",
    "Kimia",
    "Biologi",
    "Ekonomi",
    "Sosiologi",
    "Geografi",
    "Sejarah",
    "Antropologi",
    "PPKn / Pendidikan Pancasila",
    "Bahasa Arab",
    "Bahasa Jerman",
    "Bahasa Prancis",
    "Bahasa Jepang",
    "Bahasa Korea",
    "Bahasa Mandarin",
    "Produk/Projek Kreatif dan Kewirausahaan",
  ];

  return (
    <section className="container-fokus_lesprivat_tka">
      <div className="centered-content__fokus_lesprivat_tka">
        <h2>Fokus Les Privat Mata Pelajaran TKA SD SMP SMA</h2>
        <p>
          <b>Matrix Tutoring</b> melalui Program Les Privat TKA menyediakan
          Layanan Les Privat untuk Mata Pelajaran TKA sebagai berikut:
        </p>
        <ol className="numbered-list">
          <li>SD/MI/SMP/MTs/sederajat: Bahasa Indonesia dan Matematika.</li>
          <li>
            SMA/MA/SMK/MAK/sederajat: Bahasa Indonesia, Matematika, Bahasa
            Inggris, dan 2 (dua) mata pelajaran pilihan.
          </li>
        </ol>

        <p>
          Selain Matematika, Bahasa Indonesia, dan Bahasa Inggris untuk TKA,
          Matrix Tutoring juga menyediakan Layanan Les Privat untuk belajar Mata
          Pelajaran Pilihan di antaranya:
        </p>
        <ul className="subject-list-les-private-mahasiswa">
          {subjects.map((subject, index) => (
            <li key={index} className="subject-list-les-private-mahasiswa-item">
              <FaCheckCircle className="subject-list-les-private-mahasiswa-icon" />
              {subject}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FokusLesPrivateTKA;
