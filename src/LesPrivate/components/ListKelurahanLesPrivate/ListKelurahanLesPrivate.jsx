import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";

const ListKelurahanLesPrivate = ({ title, program }) => {
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
    <div className=" container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          src="/images/daftar-kota.webp"
          alt="City Icon"
          className="icon-city"
        />
        <h2 className=" title-list">
          Daftar {title} di {kecamatan.kecamatan}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kelurahan.length > 0 ? (
          kelurahan.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              to={`/${program}/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${item.slug}`}>
              {item.kelurahan}
            </Link>
          ))
        ) : (
          <div className="no-kelurahan">
            <p>No data Kelurahan available for {kecamatan.kecamatan}</p>
          </div>
        )}
        {/* {kelurahan.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/${program}/${kotaSlug}/${kabupatenSlug}/${kecamatanSlug}/${item.slug}`}>
            {item.kelurahan}
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default ListKelurahanLesPrivate;
