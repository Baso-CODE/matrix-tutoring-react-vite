import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKecamatanBySlug } from "../../helper/request/getAllKecamatanBySlug";

const ListKelurahan = () => {
  const [kelurahan, setKelurahan] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const { kecamatanSlug, kabupatenSlug, kotaSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKecamatanBySlug(kecamatanSlug);
        setKelurahan(response.data.kelurahan);

        setKecamatan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    fetchKota();
  }, [kecamatanSlug]);

  return (
    <div className="container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          className="icon-city"
          src={"/images/daftar-kota.webp"}
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
        />
        <h2 className="title-list">
          {`Daftar Kelurahan di ${kecamatan.kecamatan || "..."}`}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kelurahan.length > 0 ? (
          kelurahan.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              to={`/les-privat-di-kota/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${item.slug}`}>
              {item.kelurahan}
            </Link>
          ))
        ) : (
          <p className="no-kelurahan">No Kelurahan</p>
        )}
      </div>
    </div>
  );
};

export default ListKelurahan;
