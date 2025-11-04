import { Link } from "react-router-dom";
import "./LesprivatKota.css";
const LesprivatKota = () => {
  const kotaList = [
    { id: 1, slug: "jakarta-selatan", nama_kota: "Jakarta Selatan" },
    { id: 2, slug: "jakarta-timur", nama_kota: "Jakarta Timur" },
    { id: 3, slug: "jakarta-barat", nama_kota: "Jakarta Barat" },
    { id: 4, slug: "jakarta-pusat", nama_kota: "Jakarta Pusat" },
    { id: 5, slug: "jakarta-utara", nama_kota: "Jakarta Utara" },
    { id: 6, slug: "bogor", nama_kota: "Bogor" },
    { id: 7, slug: "depok", nama_kota: "Depok" },
    { id: 8, slug: "tangerang", nama_kota: "Tangerang" },
    { id: 9, slug: "tangerang-selatan", nama_kota: "Tangerang Selatan" },
    { id: 10, slug: "bekasi", nama_kota: "Bekasi" },
    { id: 11, slug: "yogyakarta", nama_kota: "Yogyakarta" },
    { id: 12, slug: "bali", nama_kota: "Bali" },
    { id: 13, slug: "bandung", nama_kota: "Bandung" },
    { id: 14, slug: "semarang", nama_kota: "Semarang" },
    { id: 15, slug: "surabaya", nama_kota: "Surabaya" },
    { id: 16, slug: "medan", nama_kota: "Medan" },
  ];
  return (
    <section className="lesprivat-kota__section">
      <div className="lesprivat-kota__container">
        <div className="lesprivat-kota__header">
          <h2 className="lesprivat-kota__title">
            Jangkauan Kami di Seluruh Indonesia
          </h2>
          <p className="lesprivat-kota__subtitle">
            Temukan bimbingan OSN terbaik di kota Anda. Kami hadir di berbagai
            kota besar untuk mendukung impian akademismu!
          </p>
        </div>

        <div className="lesprivat-kota__image-wrapper">
          <img
            loading="lazy"
            src="/images/map-les-privat-matrix.webp"
            alt="Peta Jangkauan Edumatrix Indonesia"
            className="lesprivat-kota__image"
          />
        </div>

        <div className="lesprivat-kota__list-wrapper">
          <div className="lesprivat-kota__list-box">
            <h3 className="lesprivat-kota__list-title">
              Jangkauan Seluruh Indonesia
            </h3>
            <ul className="lesprivat-kota__grid">
              {kotaList.map((kota) => (
                <li key={kota.id} className="lesprivat-kota__item">
                  <div className="lesprivat-kota__link">
                    <span className="lesprivat-kota__link-text">
                      {kota.nama_kota}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LesprivatKota;
