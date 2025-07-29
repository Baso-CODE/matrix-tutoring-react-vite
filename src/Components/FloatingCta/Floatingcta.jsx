import React from "react";
import "./Floatingcta.css";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";

const Floatingcta = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <label className="label-cta" htmlFor="">
          Chat With Us
        </label>
        <a
          className="parent-btn-wa"
          href={contactData?.link_cta}
          target="_blank"
          rel="noopener noreferrer">
          <button className="btn-float-wa">
            <span className="parent-icon-wa">
              <img
                src="/images/icon-wa.svg"
                alt=""
                className="icon-wa"
                loading="lazy"
              />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
