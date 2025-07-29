import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllKotaKabupatenBySlug } from "../../helper/request/getAllKotaKabupatenBySlug";

const ListKecamatan = () => {
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
    <div className="container-all-tab">
      <div className="title-container">
        <img
          loading="lazy"
          className="icon-city"
          src={"/images/daftar-kota.webp"}
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
        />
        <h2 className="title-list">
          {`Daftar Kecamatan di ${kabupaten.kota_kabupaten}`}{" "}
        </h2>
      </div>
      <div className="parent-list-kota">
        {kecamatan.length > 0 ? (
          kecamatan.map((item, index) => (
            <Link
              to={`/les-privat-di-kota/${kotaSlug}/${kabupatenSlug}/${item.slug}`}
              className="btn-kota">
              {item.kecamatan}
            </Link>
          ))
        ) : (
          <p className="no-kelurahan">No Kecamatan</p>
        )}

        {/* {kecamatan.map((item, index) => (
        //   <Link
        //     className="btn-kota"
        //     key={index}
        //     onClick={() => {
        //       window.location.href = `/les-privat-di/kecamatan/${item.slug}`;
        //     }}>
        //     {item.kecamatan}
        //   </Link>
        // ))} */}
      </div>
    </div>
  );
};

export default ListKecamatan;
