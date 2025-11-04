import "./TestimoniCardOrtuSiswa.css";
import { FaStar } from "react-icons/fa";

const TestimoniCardOrtuSiswa = ({ data, location }) => {
  const { name, hubungan_dengan_siswa, testimoni, link_image } = data;

  const solidStars = Array(5)
    .fill(null)
    .map((_, index) => (
      <FaStar
        key={index}
        color="#FFD700" // Warna Kuning
        size={20}
        style={{ margin: "0 2px" }}
      />
    ));

  return (
    <div className="testimonial-card-ortu-siswa">
      {/* Balon Kutipan Biru Kanan Atas */}
      <div className="quote-bubble">
        <div className="quote-bubble-inner">”</div>
      </div>

      <div className="card-header-ortu-siswa">
        {/* Kontainer Avatar dengan Border Biru Tebal */}
        <div className="ortu-siswa-avatar-container">
          <img
            src={link_image}
            alt={`Testimoni Orang Tua ${name} - Matrix Tutoring ${
              location ? `di ${location}` : "Indonesia"
            }`}
            className="foto-ortu-siswa"
          />
        </div>
        {/* Info (Nama dan Hubungan) - Layout Vertikal */}
        <div className="ortu-siswa-info">
          <h3 className="ortu-siswa-name">{name}</h3>
          <p className="ortu-siswa-relation">{hubungan_dengan_siswa}</p>
        </div>
      </div>

      <div className="rating-area">
        <div className="rating-stars-fixed">{solidStars}</div>
      </div>

      <div className="card-body-testimoni-ortu-siswa">
        <p className="ortu-siswa-description">{testimoni}</p>
      </div>
    </div>
  );
};

export default TestimoniCardOrtuSiswa;
