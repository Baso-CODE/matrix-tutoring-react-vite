import "./HeroSDMerahPutihBg.css";
const HeroSDMerahPutihBg = () => {
  return (
    <section className="container-all">
      <div className="lp-sd">
        <div className="lp-sd__container">
          {/* Text */}
          <div className="lp-sd__text">
            <h2 className="lp-sd__title">
              Les Privat SD Bantu Anak Lebih Paham Pelajaran Sekolah!
            </h2>
            <p className="lp-sd__desc">
              Setiap anak bisa pintar asalkan dibimbing dengan cara yang tepat!
              🎓 Dengan pendekatan yang menyenangkan dan personal, anak akan
              lebih semangat belajar serta mudah memahami materi sekolahnya.
            </p>

            <div className="lp-sd__badges">
              <span className="lp-sd__badge">Pembelajaran Personal</span>
              <span className="lp-sd__badge">Tutor Berpengalaman</span>
              <span className="lp-sd__badge">Jadwal Fleksibel</span>
            </div>

            {/* <button className="lp-sd__cta" type="button">
              Daftar Sekarang
            </button> */}
          </div>

          {/* Image */}
          <div className="lp-sd__image-wrap">
            <img
              className="lp-sd__image"
              src="/images/les-private/sd/hero-sd.png" /* ganti sesuai aset kamu */
              alt="Ilustrasi anak SD belajar dengan bimbingan privat"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/ffe5e5/7f1d1d?text=Les+Privat+SD";
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSDMerahPutihBg;
