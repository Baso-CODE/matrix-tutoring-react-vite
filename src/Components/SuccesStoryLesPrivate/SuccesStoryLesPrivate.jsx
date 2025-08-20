import { useEffect, useState } from "react";
import "./SuccessStoryLesPrivate.css";
import { getAllSuccessStory } from "../../helper/request/getAllSuccessStory";

const SuccessStoryLesPrivate = () => {
  const [successStories, setSuccessStories] = useState([]);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await getAllSuccessStory();

        setSuccessStories(response.data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };
    fetchSuccessStories();
  }, []);
  return (
    <section className="container-all">
      <div className="success-story-container">
        <h2>Success Story</h2>
        <p className="success-story-description">
          Tim kami telah membantu siswa diterima di berbagai universitas
          berikut:
        </p>
        <div className="success-story-content">
          {successStories.map((data, index) => (
            <div className="success-story-item" key={index}>
              <img
                loading="lazy"
                src={data.link_image}
                alt="Success Story 1 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
              />
            </div>
          ))}
          {/* <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/A.webp"
            alt="Success Story 1 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/B.webp"
            alt="Success Story 2 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/C.webp"
            alt="Success Story 3 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/D.webp"
            alt="Success Story 4 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/E.webp"
            alt="Success Story 5 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/F.webp"
            alt="Success Story 6 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/G.webp"
            alt="Success Story 7 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div>
        <div className="success-story-item">
          <img
            loading="lazy"
            src="/images/succes-story/H.webp"
            alt="Success Story 8 les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          />
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryLesPrivate;
