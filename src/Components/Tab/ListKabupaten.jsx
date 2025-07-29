import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotBySlug } from "../../helper/request/getAllKotaBySlug";

const ListKabupaten = () => {
  const [kabupaten, setKabupaten] = useState([]);
  const [kota, setKota] = useState([]);
  const { kotaSlug } = useParams();
  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotBySlug(kotaSlug);

        setKota(response.data);

        setKabupaten(response.data.ibukotakabupaten);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchKota();
  }, [kotaSlug]);

  return (
    <div className="container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          className="icon-city"
          src={"/images/daftar-kota.webp"}
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
        />
        <h2 className="title-list">{`Daftar Kabupaten di ${kota.kota}`} </h2>
      </div>
      <div className="parent-list-kota">
        {kabupaten.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/les-privat-di-kota/${kotaSlug}/${item.slug}`}>
            {item.kota_kabupaten}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKabupaten;
