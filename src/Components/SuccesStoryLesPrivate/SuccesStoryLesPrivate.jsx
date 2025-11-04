import { useEffect, useState } from "react";
import "./SuccessStoryLesPrivate.css";
import { getAllSuccessStory } from "../../helper/request/getAllSuccessStory";

const SuccessStoryLesPrivate = ({ location }) => {
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
                alt={`Success Story siswa ${data.name} - Matrix Tutoring ${
                  location ? `di ${location}` : "Indonesia"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoryLesPrivate;
