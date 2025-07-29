import { useEffect, useRef, useState } from "react";
import { getAllFAQ } from "../../helper/request/getAllfaq";
import "./AccordionFAQ.css";

const Accordion = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion-container-faq">
      <button
        className={`accordion-button-faq ${isOpen ? "rotate" : ""}`}
        onClick={onClick}>
        <span>{title}</span>
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight:
            isOpen && contentRef.current
              ? `${contentRef.current.scrollHeight}px`
              : "0px",
        }}>
        <div className="accordion-content-inner">{content}</div>
      </div>
    </div>
  );
};

const AccordionFAQ = () => {
  const [dataFaq, setDataFaq] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFaq = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const faqData = await getAllFAQ();
        if (faqData && Array.isArray(faqData.data)) {
          setDataFaq(faqData.data);
          if (faqData.data.length > 0) {
            setActiveIndex(0);
          } else {
            setActiveIndex(null);
          }
        } else {
          const errorMessage =
            faqData.message ||
            "Data FAQ tidak tersedia atau format tidak sesuai.";
          console.error("API error for FAQ data:", errorMessage);
          setError(errorMessage);
          setDataFaq([]);
          setActiveIndex(null);
        }
      } catch (err) {
        console.error("Error fetching FAQ:", err);
        setError("Gagal memuat data FAQ. Silakan coba lagi nanti.");
        setDataFaq([]);
        setActiveIndex(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFaq();
  }, []);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="main-container-faq">
        <div className="main-wrapper-faq">
          <div className="accordion-title-faq">Frequently Asked Question</div>
          <div className="accordion-wrapper-faq">
            {isLoading ? (
              <p className="text-center text-gray-600">Memuat FAQ...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : dataFaq.length > 0 ? (
              dataFaq.map((item, index) => (
                <Accordion
                  key={item.id || index}
                  title={item.pertanyaan}
                  content={item.jawaban}
                  isOpen={index === activeIndex}
                  onClick={() => handleAccordionClick(index)}
                />
              ))
            ) : (
              <p className="text-center text-gray-600">
                Tidak ada FAQ yang tersedia saat ini.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionFAQ;
