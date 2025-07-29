import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";

const ListKabupatenLesPrivate = ({ title, program }) => {
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
    <div className=" container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          src="/images/daftar-kota.webp"
          alt="City Icon"
          className="icon-city"
        />
        <h2 className=" title-list">
          Daftar {title} di {kota.kota}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kabupaten.length > 0 ? (
          kabupaten.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              to={`/${program}/${kotaSlug}/${item.slug}`}>
              {item.kota_kabupaten}
            </Link>
          ))
        ) : (
          <div className="no-kelurahan">
            <p>No data kecamatan available for {kota.kota}</p>
          </div>
        )}
        {/* {kabupaten.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/${program}/${kotaSlug}/${item.slug}`}>
            {item.kota_kabupaten}
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default ListKabupatenLesPrivate;
