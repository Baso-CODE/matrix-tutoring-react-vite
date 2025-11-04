import React, { useEffect, useState } from "react";
import "./PromoHomepage.css";
import { getAllPromo } from "../../helper/request/getAllPromo";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";

const PromoHomepage = ({ location }) => {
  const contactData = useAppSelector(selectContactCsData);
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
    <React.Fragment>
      {isMobileView ? (
        <div className="parent-promo-home-mobile">
          {promoMobile.length > 0 ? (
            promoMobile.map((promo, index) => (
              <a
                key={promo.id || index}
                href={contactData?.link_cta || "#"}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo mobile ${location ? `di ${location}` : ""} ${
                    promo.id || index + 1
                  }`}
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
                href={contactData?.link_cta || "#"}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  loading="lazy"
                  className="child-promo-home"
                  src={promo.url}
                  alt={`Promo desktop ${location ? `di ${location}` : ""} ${
                    promo.id || index + 1
                  }`}
                />
              </a>
            ))
          ) : (
            <p>Memuat promo desktop...</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default PromoHomepage;
