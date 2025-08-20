import "./AsalSekolahSiswa.css";
import { schools } from "./dataAsalSekolah";

const AsalSekolahSiswaEdumatrix = () => {
  return (
    <section className="container-induk-testimonial-siswa-container">
      <div className="container-all">
        <div className="container-asal-sekolah-siswa-matrix">
          <div className="content-wrapper">
            <div className="title-section">
              <h2 className="title-asal-sekolah">
                Asal Sekolah Siswa Matrix Tutoring
              </h2>
              <div className="scrollable-content">
                <ul className="grid-container-asal-sekolah-siswa-matrix">
                  {schools.map((school, index) => (
                    <li key={index} className="grid-item">
                      {school}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsalSekolahSiswaEdumatrix;
