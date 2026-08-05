import "./OnlineLesOption.css";

const OnlineLesOptions = ({ location }) => {
  return (
    <div className="container-all">
      <div className="online-les-options">
        <div className="title-description-online-les-option">
          <h2>Saat Ini, Matrix Tutoring Juga Melayani Les Privat Online</h2>
          <p>
            Les Privat Online - Belajar dimana saja, kapan saja dengan kualitas
            dan layanan yang sama
          </p>
        </div>
        <div className="options">
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/zoom.webp"
              alt={`les privat Online Metode Zoom ${
                location ? `${location}` : "Indonesia"
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/google-meet.webp"
              alt={`les privat Online Metode Google Meet ${
                location ? `${location}` : "Indonesia"
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/whatsapp.webp"
              alt={`les privat Online Metode WhatsApp ${
                location ? `${location}` : "Indonesia"
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLesOptions;
