import { useEffect, useState } from "react";
import { FiX, FiZoomIn } from "react-icons/fi";

import { getAllSuccessStory } from "../../helper/request/getAllSuccessStory";
import "./SuccessStoryLesPrivate.css";

const SuccessStoryLesPrivate = ({ location }) => {
  const [successStories, setSuccessStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    const fetchSuccessStories = async () => {
      try {
        const response = await getAllSuccessStory();

        setSuccessStories(response.data || []);
      } catch (error) {
        console.error("Error fetching success stories:", error);
      }
    };

    fetchSuccessStories();
  }, []);

  useEffect(() => {
    if (!selectedStory) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedStory(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedStory]);

  return (
    <>
      <section className="container-all">
        <div className="success-story-container">
          <h2>Success Story</h2>

          <p className="success-story-description">
            Tim kami telah membantu siswa diterima di berbagai universitas
            berikut:
          </p>

          <div className="success-story-content">
            {successStories.map((data, index) => (
              <button
                type="button"
                className="success-story-item"
                key={data.id || index}
                onClick={() => setSelectedStory(data)}
                aria-label={`Lihat Success Story ${
                  data.name || `siswa ${index + 1}`
                }`}>
                <img
                  loading="lazy"
                  src={data.link_image}
                  alt={`Success Story siswa ${
                    data.name || ""
                  } - Matrix Tutoring ${
                    location ? `di ${location}` : "Indonesia"
                  }`}
                />

                <span className="success-story-zoom">
                  <FiZoomIn />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedStory && (
        <div
          className="success-story-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`Success Story ${selectedStory.name || "Matrix Tutoring"}`}
          onClick={() => setSelectedStory(null)}>
          <button
            type="button"
            className="success-story-modal-close"
            onClick={() => setSelectedStory(null)}
            aria-label="Tutup">
            <FiX />
          </button>

          <div
            className="success-story-modal-content"
            onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedStory.link_image}
              alt={`Success Story siswa ${
                selectedStory.name || ""
              } - Matrix Tutoring ${location ? `di ${location}` : "Indonesia"}`}
              className="success-story-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessStoryLesPrivate;
