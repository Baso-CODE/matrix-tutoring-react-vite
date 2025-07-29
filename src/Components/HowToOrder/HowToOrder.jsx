// HowToOrder.jsx
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./HowToOrder.css";

const orderSteps = [
  {
    id: 1,
    title: "Pilih Program Belajar",
    description:
      "Tentukan program belajar yang sesuai dengan kebutuhan Anda, mulai dari TK/Calistung, SD, SMP, SMA, Mahasiswa, TKA, Bahasa Asing, hingga persiapan intensif untuk Simak UI dan SNBT.",
  },
  {
    id: 2,
    title: "Lengkapi Data Diri",
    description:
      "Setelah memilih program, lengkapi formulir pendaftaran dengan data diri dan kebutuhan belajar Anda. Tim kami siap membantu jika ada pertanyaan.",
  },
  {
    id: 3,
    title: "Konfirmasi Jadwal & Pembayaran",
    description:
      "Kami akan segera mengkonfirmasi pilihan program dan jadwal les yang sesuai. Setelah itu, lakukan pembayaran untuk memulai sesi belajar pertamamu bersama tutor terbaik Matrix Tutoring!",
  },
];

const HowToOrder = () => {
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <section className="how-to-order-section">
      <div className="how-to-order-container">
        {/* Left Column: Steps */}
        <div className="how-to-order-steps">
          {orderSteps.map((step) => (
            <div
              key={step.id}
              className="order-step-card"
              data-background-number={step.id < 10 ? `0${step.id}` : step.id}>
              <div className="step-header">
                <div className="step-number">
                  {step.id < 10 ? `0${step.id}` : step.id}
                </div>
                <div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="how-to-order-main">
          <p className="how-to-order-label">HOW TO ORDER</p>
          <h2 className="how-to-order-heading">
            Lakukan Pemesanan <br />
            dengan Mudah
          </h2>
          <Link
            to={finalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="start-order-link">
            <button className="start-order-button">
              Mulai pemesanan <span className="arrow-icon">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
