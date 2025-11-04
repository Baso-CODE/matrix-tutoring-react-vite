import "./ProgaramInsenstifBahasa.css";

const ProgaramInsenstifBahasa = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered__program-insentif-bahasa">
        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            <h2>Program Les Privat Bahasa - Matrix Tutoring</h2>
            <p>
              Belajar bahasa kini semakin mudah bersama Matrix Tutoring. Kami
              menghadirkan layanan Les Privat ke Rumah dan Les Privat Online
              yang dirancang fleksibel sesuai kebutuhan Anda. Dengan
              pendampingan tutor berpengalaman, Anda bisa belajar secara
              personal, nyaman, dan tertarget, baik untuk kebutuhan akademik,
              pekerjaan, maupun tujuan khusus seperti persiapan ujian atau
              keberangkatan ke luar negeri.
            </p>
            <p>
              Berikut Pilihan Bahasa yang bisa dipelajari pada Program Les
              Privat Bahasa di Matrix Tutoring:
            </p>
            <ul>
              <li>Les Privat Bahasa Inggris</li>
              <li>Les Privat Bahasa Mandarin</li>
              <li>Les Privat Bahasa Jepang</li>
              <li>Les Privat Bahasa Korea</li>
              <li>Les Privat Bahasa Jerman</li>
              <li>Les Privat Bahasa Perancis</li>
              <li>Les Privat BIPA (Bahasa Indonesia untuk Penutur Asing)</li>
            </ul>
          </div>
          {/* IMAGE */}
          <div className="program-calistung-image">
            <img
              src="/images/les-private/bahasa-asing/BAHASA-ASING-5x4.webp"
              alt={`Program Les Privat Bahasa - Matrix Tutoring ${
                location ? `${location}` : "Indonesia"
              } `}
              className="les-privat-sd-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=Program+Intensif+Program+Bahasa";
              }}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgaramInsenstifBahasa;
