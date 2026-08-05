import { useEffect, useState } from "react";
import { handleCsWhatsAppClick } from "../../helper/csRotationHelper";
import { getAllPromo } from "../../helper/request/getAllPromo";
import "./PromoHomepage.css";

const PromoHomepage = ({ location }) => {
  const [promoMobile, setPromoMobile] = useState([]);

  const [promoDesktop, setPromoDesktop] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const mobileResult = await getAllPromo("mobile");
        if (mobileResult && mobileResult.data) {
          setPromoMobile(mobileResult.data);
        } else {
          setPromoMobile([]);
        }

        const desktopResult = await getAllPromo("desktop");
        if (desktopResult && desktopResult.data) {
          setPromoDesktop(desktopResult.data);
        } else {
          setPromoDesktop([]);
        }
      } catch (err) {
        console.error("Error fetching promos:", err);
        setPromoMobile([]);
        setPromoDesktop([]);
      }
    };

    fetchPromos();
  }, []);

  const isMobileView = windowWidth < 768;

  return (
    <>
      {isMobileView ? (
        <div className="parent-promo-home-mobile">
          {promoMobile.length > 0 ? (
            promoMobile.map((promo, index) => (
              <a
                key={promo.id || index}
                onClick={() => handleCsWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat promo mobile ${
                  location ? `di ${location}` : ""
                } ${promo.id || index + 1} (membuka tab baru)`}>
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo mobile ${
                    location ? `di ${location}` : ""
                  } ${promo.id || index + 1}`}
                />
              </a>
            ))
          ) : (
            <p>Memuat promo mobile...</p>
          )}
        </div>
      ) : (
        <div className="parent-promo-home">
          {promoDesktop.length > 0 ? (
            promoDesktop.map((promo, index) => (
              <a
                key={promo.id || index}
                onClick={() => handleCsWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat promo desktop ${
                  location ? `di ${location}` : ""
                } ${promo.id || index + 1} (membuka tab baru)`}>
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo desktop ${
                    location ? `di ${location}` : ""
                  } ${promo.id || index + 1}`}
                />
              </a>
            ))
          ) : (
            <p>Memuat promo desktop...</p>
          )}
        </div>
      )}
    </>
  );
};

export default PromoHomepage;
