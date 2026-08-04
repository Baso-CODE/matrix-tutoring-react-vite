import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./Floatingcta.css";

const Floatingcta = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <div className="box-float-main">
      <div className="main-parent-wa">
        <span className="label-cta">Klik Untuk Konsultasi</span>

        <a
          className="parent-btn-wa"
          href={contactData?.link_cta}
          target="_blank"
          rel="noopener noreferrer"
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
        </a>
      </div>
    </div>
  );
};

export default Floatingcta;
