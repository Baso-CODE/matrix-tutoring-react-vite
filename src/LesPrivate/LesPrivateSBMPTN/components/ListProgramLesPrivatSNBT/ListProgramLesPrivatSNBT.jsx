import { FaCheckCircle } from "react-icons/fa";
import { listProgramSNBT_UTBK } from "../../../../helper/DummyData/ListProgramSNBT";
import "./ListProgramLesPrivatSNBT.css";

const ListProgramLesPrivatSNBT = () => {
  return (
    <section className="container-list_program_snbt">
      <div className="list_program_utbk_SNBT">
        <h2>Program Les Privat Fokus Masuk PTN</h2>
        <p>
          Matrix Tutoring menghadirkan berbagai program khusus persiapan Ujian
          Masuk PTN kelas reguler dan Internasional. Program ini didesain untuk
          berbagai jalur masuk PTN jenjang Vokasi (D3/D4), S1, S2, dan S3
          (Doktor). Berikut Program Les Privat Masuk PTN yang tersedia:
        </p>
        <ul className="subject-list_program_SNBT">
          {listProgramSNBT_UTBK.map((subject, index) => (
            <li key={index} className="subject-list_program_SNBT-item">
              <FaCheckCircle className="subject-list_program_SNBT-icon" />
              {subject}
            </li>
          ))}
        </ul>
        <p>
          Selain Program Les Privat Masuk PTN, kami juga memiliki Program Fokus
          Persiapan Ujian Masuk PTS (Swasta) dan PTK (Perguruan Tinggi
          Kedinasan). Dengan pendampingan guru privat yang profesional dan
          berpengalaman, kami hadir untuk mendampingi siswa mewujudkan mimpi
          masuk kampus Impian.
        </p>
      </div>
    </section>
  );
};

export default ListProgramLesPrivatSNBT;
