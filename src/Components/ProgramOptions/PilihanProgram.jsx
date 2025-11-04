import "./PilihanProgram.css";

const PilihanProgram = ({ location }) => {
  return (
    <div className="container-all">
      <div className="program-options">
        <div className="option">
          <img
            loading="lazy"
            className="icon-program-mtx"
            src="/images/pilihan-program/house.webp"
            alt={`Ikon Program Pembelejaran Offline / Guru ke Rumah ${
              location ? `di ${location}` : "Indonesia"
            } - Matrix Tutoring`}
          />
          <h3>Program Offline / Guru ke Rumah</h3>
          <p>
            Melayani siswa di Jakarta, Bogor, Depok, Tangsel, Tangerang, Bekasi,
            Bintaro, BSD, Cibubur dan sekitarnya. Untuk area lain yang masih
            dekat dengan area tersebut akan kami upayakan.
          </p>
        </div>
        <div className="option">
          <img
            loading="lazy"
            className="icon-program-mtx"
            src="/images/pilihan-program/onlinee.webp"
            alt={`Ikon Program Pembelejaran Online ${
              location ? `di ${location}` : "Indonesia"
            } - Matrix Tutoring`}
          />
          <h3>Program Online / Les Privat Online</h3>
          <p>
            Melayani siswa dari Bandung, Surabaya, Malang, Semarang, Jogja,
            Solo, Bali, Padang, Medan, Batam, Pekanbaru, Makassar, Manado,
            Jayapura, dan berbagai kota lainnya di Indonesia hingga Luar Negeri.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PilihanProgram;
