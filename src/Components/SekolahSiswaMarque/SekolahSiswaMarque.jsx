import { useEffect, useState } from "react";
import "./SekolahSiswaMarque.css";
import Marquee from "react-fast-marquee";
import { getIsDeletedAsalSekolahSiswaRequest } from "../../helper/request/getIsDeletedAsalSekolahSiswaRequest";

const AsalSekolahSiswaMarque = () => {
  const [schoolImages, setSchoolImages] = useState([]);

  useEffect(() => {
    const fetchSchoolImages = async () => {
      try {
        const response = await getIsDeletedAsalSekolahSiswaRequest();
        setSchoolImages(response.data);
      } catch (error) {
        console.error("error fetching data asal sekolah siswa", error);
      }
    };
    fetchSchoolImages();
  }, []);

  return (
    <section className="container-all">
      <div className="container-asal-sekolah-siswa-marque">
        <div className="">
          <div className="">
            {/* Horizontal Marquee */}
            <Marquee
              direction="left"
              speed={55}
              gradient={true}
              className="marquee-grid">
              {schoolImages.map((image, index) => (
                <img
                  loading="lazy"
                  key={index}
                  src={`https://node-osn.edusmart-indonesia.com/asalSekolahSiswa-images/${image.foto_sekolah}`}
                  alt={`asal sekolah siswa les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) ${
                    index + 1
                  } - Matrix Tutoring `}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsalSekolahSiswaMarque;
