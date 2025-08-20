import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllKotaJabodatabek } from "../../helper/request/getAllKotaJabodatabek";
import "./Tab.css";

const Listkota = () => {
  const [kota, setKota] = useState([]);

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotaJabodatabek();

        setKota(response.data);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchKota();
  }, []);

  return (
    <section className="container-all">
      <div className="container-all-tab">
        <div className="title-container">
          <img
            loading="lazy"
            className="icon-city"
            src={"/images/daftar-kota.webp"}
            alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
          {/* Gambar di sebelah kiri */}
          <h2 className="title-list">Daftar Kota Indonesia</h2>
        </div>
        <div className="parent-list-kota">
          {kota.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              onClick={() => {
                window.location.href = `/les-privat-di-kota/${item.slug}`;
              }}>
              {item.kota}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listkota;
