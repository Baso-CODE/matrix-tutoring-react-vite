import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Impor ClipLoader
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <ClipLoader color="#3498db" loading={true} size={50} />{" "}
      {/* Ukuran dan warna bisa disesuaikan */}
    </div>
  );
};

export default LoadingSpinner;
