import { handleCsWhatsAppClick } from "../../helper/csRotationHelper";
import "./Floatingcta.css";

const Floatingcta = () => {
  return (
    <div className="box-float-main">
      <div className="main-parent-wa" onClick={() => handleCsWhatsAppClick()}>
        <span className="label-cta">Klik Untuk Konsultasi</span>

        <button
          type="button"
          className="parent-btn-wa"
          aria-label="Konsultasi via WhatsApp (membuka tab baru)">
          <span className="btn-float-wa">
            <span className="parent-icon-wa">
              <img
                src="/images/icon-wa.svg"
                alt="Ikon WhatsApp"
                className="icon-wa"
                loading="lazy"
              />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Floatingcta;
