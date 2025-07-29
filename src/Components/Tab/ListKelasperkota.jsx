/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Tab from "./Tab";
import "./Tab.css";
import Tabs from "./Tabs";

const Listkelasperkota = () => {
  const [kelasperkota, setKelasPerKota] = useState([]);
  const [kelas, setKelas] = useState([]);
  const [mapel, setMapel] = useState([]);
  const { id } = useParams();

  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const query = useQuery();
  const axiosJWT = axios.create();

  useEffect(() => {
    fetchKelasperKota();
    fetchKelas();
    fetchMapel();
  }, []);

  const fetchKelasperKota = () => {
    fetch(`https://api.edulink-indonesia.com/kelasperkota/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setKelasPerKota(data);
        "data kelasperkota", data;
      });
  };

  const fetchKelas = () => {
    fetch(`https://api.edulink-indonesia.com/kelas`)
      .then((res) => res.json())
      .then((data) => {
        setKelas(data);
      });
  };

  const fetchMapel = () => {
    fetch("https://api.edulink-indonesia.com/matapelajaran")
      .then((res) => res.json())
      .then((data) => {
        setMapel(data);
      });
  };

  return (
    <div className="container-all-tab">
      <Tabs>
        <Tab title="PROGRAM">
          <div className="parent-list-kelas">
            {kelas.map((item, index) => (
              <Link
                // to={`/les-privat/${item.slug.toLowerCase()}-terbaik?data=${
                //   item.id
                // }`}
                className="btn-kelas"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat/program/${item.slug}`;
                }}>
                {item.name}
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="MAPEL">
          <div className="parent-list-mapel">
            {mapel.map((item, index) => (
              <Link
                // to={`/mata-pelajaran/${item.name.toLowerCase()}?data=${
                //   item.id
                // }`}
                className="btn-mapel"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat/mata-pelajaran/${item.slug}`;
                }}>
                <div className="combine-icon-text">
                  <img
                    loading="lazy"
                    className="icon-mapel"
                    src={
                      "https://api.edulink-indonesia.com/images/" + item.image
                    }
                    alt="Bimbel Berkualitas"
                  />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </Tab>
        <Tab title="WILAYAH">
          <div className="parent-list-kota">
            {kelasperkota.map((item, index) => (
              <Link
                // to={`/program/${item.kelasId}/kota/${item.namaKota}?data=${item.kelasId}`}
                className="btn-kota"
                key={index}
                onClick={() => {
                  window.location.href = `/les-privat/program/${item.slugKelas}/kota/${item.slugKota}`;
                }}>
                {item.namaKota}
              </Link>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Listkelasperkota;
