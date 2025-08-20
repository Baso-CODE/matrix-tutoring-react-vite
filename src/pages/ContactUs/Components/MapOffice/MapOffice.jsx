import "./MapOffice.css";
const MapOffice = () => {
  return (
    <div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.05610168974!2d106.83223697480466!3d-6.386761793603672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec3954aca111%3A0xec38547dc91b37!2s%F0%9F%93%8CLes%20Privat%20Matrix%20%7C%20Guru%20Privat%20ke%20Rumah%20TK%20SD%20SMP%20SMA%20OSN%20TOEFL%20IELTS%20UTBK%20SNBT%20Mahasiswa!5e0!3m2!1sen!2sid!4v1755139540516!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default MapOffice;
