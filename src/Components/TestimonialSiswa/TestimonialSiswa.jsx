import { useEffect, useState } from "react";
import { getAllTestimoniSiswa } from "../../helper/request/getAllTestimoniSiswa";
import "./TestimonialSiswa.css";
const TestimonialSiswa = () => {
  const [dataTestimoniSiswa, setDataTestimoniSiswa] = useState([]);

  useEffect(() => {
    const fetchTestimoniSiswa = async () => {
      try {
        const response = await getAllTestimoniSiswa();
        setDataTestimoniSiswa(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimoniSiswa();
  }, []);
  return (
    <div className="testimonials-siswa-container">
      <h2>Testimoni Siswa</h2>
      <div className="testimonials-siswa-grid">
        {dataTestimoniSiswa.map((image, index) => (
          <div className="testimonial-siswa-item" key={index}>
            <img
              loading="lazy"
              src={image.link_image}
              alt={`Testimonial ${image.name}`}
              className="testimonial-siswa-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestimonialSiswa;
