/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

import "./ImpactStatistics.css";
import useCountingAnimation from "../../../../helper/useCountingAnimation";

const StatCard = ({ stat }) => {
  const IconComponent = stat.icon;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const animatedCount = useCountingAnimation(
    stat.numericValue,
    2500,
    0,
    stat.isDecimal,
    isVisible
  );

  return (
    <div className="stat-card" ref={cardRef}>
      {/* Background Blob */}
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="stat-card-blob">
        <path
          transform="translate(100 100)"
          d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"></path>
      </svg>

      {/* Content */}
      <div className="stat-card-content">
        <img src={stat.icon} alt={stat.unit} className="stat-icon" />
        {/* {IconComponent && <IconComponent className="stat-icon" />} */}
        <span className="stat-value">
          {animatedCount}
          {stat.displaySuffix}
        </span>
        <p className="stat-unit">{stat.unit}</p>
      </div>
    </div>
  );
};

export default StatCard;
