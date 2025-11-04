import { alumniData } from "../../../../helper/DummyData/dataTopAlumni";
import "./Top3AlumniSNBT.css";

const Top3AlumniSNBT = () => {
  return (
    <section className="alumni_top_ptn-section">
      <div className="alumni_top_ptn-header">
        <h2 className="alumni_top_ptn-title">
          Top 3 Alumni Matrix Lolos Masuk PTN
        </h2>
        <p className="alumni_top_ptn-description">
          Kami bangga dengan prestasi alumni kami yang berhasil diterima di
          Perguruan Tinggi Negeri (PTN) favorit.
        </p>
      </div>

      <div className="alumni_top_ptn-list">
        {alumniData.map((alumni) => (
          <div key={alumni.id} className="alumni_top_ptn-card">
            <img
              src={alumni.image}
              alt={`Foto ${alumni.name}`}
              className="alumni_top_ptn-image"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=Alumni+Terbaik";
                e.currentTarget.onerror = null;
              }}
            />
            <div className="alumni_top_ptn-info">
              <h3 className="alumni_top_ptn-name">{alumni.name}</h3>
              <p className="alumni_top_ptn-university">{alumni.university}</p>
              <p className="alumni_top_ptn-major">{alumni.major}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Top3AlumniSNBT;
