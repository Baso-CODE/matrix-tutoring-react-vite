import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../helper/Button/ReusableButton/ReusableButton";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import "./HeroLesPrivate.css";

const HeroLesPrivate = ({ heading, desc, images, location }) => {
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <section className="container-all">
      <div className=" container-halaman-hero-lesprivate">
        <div className="content-hero-lesprivate">
          <div className=" isi-content-hero-lesprivate">
            <h1 className="title-halaman-hero-lesprivate">{heading}</h1>
            <div className="">
              <p className="child-paragraf-hero-lesprivate">{desc}</p>
              <p className="child-paragraf-hero-lesprivate-2">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix Tutoring yang siap
                memberikan pelayanan terbaik.
              </p>
            </div>
            <div className="btn-and-icons">
              <Link to={finalUrl || "#"} className="link_cta_decoration">
                <ReusableButton
                  text="Konsultasi Sekarang!"
                  bgColor="#ffffff"
                  borderColor="#007bff"
                  textColor="#007bff"
                  icon={<ArrowRightCircleIcon />}
                />
              </Link>
            </div>
          </div>
          <img
            loading="lazy"
            className="rumah-adat-hero-lesprivate"
            src={images}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${
              location ? `${location}` : "Indonesia"
            } - Matrix Tutoring`}
            width="1880"
            height="1075"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroLesPrivate;
