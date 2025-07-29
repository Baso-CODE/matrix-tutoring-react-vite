import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";

const ListKecamatanLesPrivate = ({ title, program }) => {
  const [kecamatan, setKecamatan] = useState([]);
  const [kabupaten, setKabupaten] = useState([]);
  const { kabupatenSlug, kotaSlug } = useParams();

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKotaKabupatenBySlug(kabupatenSlug);
        setKecamatan(response.data.kecamatan);

        setKabupaten(response.data);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
      }
    };

    fetchKota();
  }, [kabupatenSlug]);

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
          Daftar {title} di {kabupaten.kota_kabupaten}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kecamatan.length > 0 ? (
          kecamatan.map((item, index) => (
            <Link
              className="btn-kota"
              key={index}
              to={`/${program}/${kotaSlug}/${kabupatenSlug}/${item.slug}`}>
              {item.kecamatan}
            </Link>
          ))
        ) : (
          <div className="no-kelurahan">
            <p>No data kecamatan available for {kabupaten.kota_kabupaten}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListKecamatanLesPrivate;
