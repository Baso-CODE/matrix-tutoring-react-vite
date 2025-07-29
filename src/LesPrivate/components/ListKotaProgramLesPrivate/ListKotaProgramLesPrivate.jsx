import React, { useEffect, useState } from "react";
import { getAllKotaJabodatabek } from "../../../helper/request/getAllKotaJabodatabek";
import { Link } from "react-router-dom";

const ListKotaProgramLesPrivate = ({ title, program }) => {
  const [kota, setKota] = useState([]);

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const result = await getAllKotaJabodatabek();
        setKota(result.data);
      } catch (error) {
        console.error("failed to fetch kota", error);
      }
    };
    fetchKota();
  }, []);
  return (
    <div className=" container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          src="/images/daftar-kota.webp"
          alt="City Icon"
          className="icon-city"
        />
        <h2 className=" title-list"> Daftar {title} di kota indonesia</h2>
      </div>
      <div className="parent-list-kota">
        {kota.map((item, index) => (
          <Link
            className="btn-kota"
            key={index}
            to={`/${program}/${item.slug}`}>
            {item.kota}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListKotaProgramLesPrivate;
