// File: src/components/FormRegist.js
import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import OurFeatures from "./OurFeatures/OurFeatures";
import "./FormRegist.css";

const FormRegist = () => {
  return (
    <div className="form-regist-container">
      <div className="main-section">
        <div className="form-section">
          {/* Komponen formulir kontak */}
          <ContactForm />
        </div>
        {/* Wadah baru untuk menumpuk image-section dan OurFeatures secara vertikal */}
        <div className="right-column-stack">
          <div className="image-section">
            <img
              src="/images/contact-us/hero-form.png"
              alt="A boy in a hat smiling"
            />
          </div>
          {/* Komponen OurFeatures yang sekarang berada di bawah image-section */}
          <OurFeatures />
        </div>
      </div>
    </div>
  );
};

export default FormRegist;
