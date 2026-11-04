/* eslint-disable no-unused-vars */
import { Mail, MapPin } from "lucide-react";
import "./CardInformasiContactUs.css";

const ContactCardIcon = ({ icon: Icon, color }) => (
  <div
    className="contact-card-icon"
    style={{ backgroundColor: color, color: "white" }}>
    <Icon size={24} />
  </div>
);

const InfoCard = ({ icon, title, content, iconColor }) => (
  <div className="info-card">
    <ContactCardIcon icon={icon} color={iconColor} />
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);
const CardInformasiContactUs = () => {
  return (
    <div>
      <div className="cards-section">
        <InfoCard
          icon={MapPin}
          title="Address"
          content="Jl. Akses UI No.165, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat 16421"
          iconColor="#007bff"
        />
        {/* <InfoCard
          icon={Phone}
          title="Office Phone"
          content="021-2761-2993"
          iconColor="#007bff"
        /> */}
        <InfoCard
          icon={Mail}
          title="Email"
          content="matrixtutoringeducation@gmail.com"
          iconColor="#007bff"
        />
      </div>
    </div>
  );
};

export default CardInformasiContactUs;
