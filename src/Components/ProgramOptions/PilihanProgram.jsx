import "./PilihanProgram.css";

const PilihanProgram = () => {
  return (
    <div className="program-options">
      <div className="option">
        <img
          loading="lazy"
          className="icon-program-mtx"
          src="/images/pilihan-program/house.webp"
          alt="Ikon Buku"
        />
        <h3>Program Offline / Guru ke Rumah</h3>
        <p>
          Melayani untuk siswa di Jakarta, Bogor, Depok, Tangesel, Tangerang,
          Bekasi, Bintaro, BSD, Cibubur dan sekitarnya. Untuk area lain yang
          masih dekat dengan area tersebut akan kami upayakan.
        </p>
      </div>
      <div className="option">
        <img
          loading="lazy"
          className="icon-program-mtx"
          src="/images/pilihan-program/onlinee.webp"
          alt="Ikon Buku"
        />
        <h3>Program Online / Les Privat Online</h3>
        <p>
          Melayani untuk siswa dari Bandung, Surabaya, Malang, Semarang, Jogja,
          Solo, Bali, Padang, Medan, Pekanbaru, Makassar, Manado dan berbagai
          kota baik di Indonesia maupun Luar Negeri.
        </p>
      </div>
    </div>
  );
};

export default PilihanProgram;
