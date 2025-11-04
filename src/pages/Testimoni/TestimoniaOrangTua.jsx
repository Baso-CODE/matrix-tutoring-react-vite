import { useEffect, useState } from "react";
import { getAllTestimoniSiswaOrangTua } from "../../helper/request/getAllTestimoniSiswaOrangTua";
import TestimoniCardOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniCardOrtuSiswa";

const TestimoniOrangTuaNotSlide = () => {
  const [dataTestimoniSiswa, setDataTestimoniSiswa] = useState([]);

  useEffect(() => {
    const fetchTestimoniSiswa = async () => {
      try {
        const response = await getAllTestimoniSiswaOrangTua();
        setDataTestimoniSiswa(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimoniSiswa();
  }, []);
  return (
    <section className="container-all">
      <div className="">
        <div className="testimonials-siswa-container">
          <h2 className="title-testimonial-orang-tua-siswa">
            Testimoni Orang Tua Siswa
          </h2>
          <div className="testimonials-siswa-grid">
            {dataTestimoniSiswa.map((data, index) => (
              <div className="testimonial-ortu-siswa-notSlider" key={index}>
                <TestimoniCardOrtuSiswa data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimoniOrangTuaNotSlide;
