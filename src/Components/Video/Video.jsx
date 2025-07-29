import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <div className="video-container">
      <iframe
        className="video-supercamp"
        width="1200"
        height="675"
        src="https://www.youtube.com/embed/oQ1OhyfSEgU"
        title="SUPERCAMP UTBK SNBT 2024 || MATRIX GROUP || BATCH 2 - JOGJA"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  );
};

export default Video;
