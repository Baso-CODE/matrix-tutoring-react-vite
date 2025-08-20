import CardInformasiContactUs from "./Components/CardInformasiContactUs/CardInformasiContactUs";
import FormRegist from "./Components/FormRegist/FormRegist";
import HeroSectionContactUs from "./Components/HeroSectionContactUs/HeroSectionContactUs";
import MapOffice from "./Components/MapOffice/MapOffice";
import "./ContactUsPage.css";
const ContactUsPage = () => {
  return (
    <div className="">
      <HeroSectionContactUs />
      <FormRegist />
      <CardInformasiContactUs />
      <MapOffice />
    </div>
  );
};

export default ContactUsPage;
