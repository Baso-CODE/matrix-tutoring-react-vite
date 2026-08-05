import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleCsWhatsAppClick } from "../../helper/csRotationHelper";
import { getAllPromo } from "../../helper/request/getAllPromo";
import "./Promo.css";
const Promo = () => {
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
    <div>
      {isMobileView ? (
        <div className="parent-promo-home-mobile-promopage">
          {promoMobile.length > 0 ? (
            promoMobile.map((promo, index) => (
              <Link
                key={promo.id || index}
                onClick={() => handleCsWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo mobile ${promo.id || index + 1}`}
                />
              </Link>
            ))
          ) : (
            <p>Memuat promo mobile...</p>
          )}
        </div>
      ) : (
        <div className="parent-promo-home-promopage">
          {promoDesktop.length > 0 ? (
            promoDesktop.map((promo, index) => (
              <Link
                key={promo.id || index}
                onClick={() => handleCsWhatsAppClick()}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo desktop ${promo.id || index + 1}`}
                />
              </Link>
            ))
          ) : (
            <p>Memuat promo desktop...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Promo;
