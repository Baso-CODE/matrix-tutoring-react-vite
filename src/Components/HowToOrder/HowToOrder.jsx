// HowToOrder.jsx
import "./HowToOrder.css";

const orderSteps = [
  {
    id: 1,
    title: "Konsultasi (Hubungi CS)",
    description:
      "Calon siswa atau orang tua menghubungi kami melalui WhatsApp atau telepon untuk mendapatkan informasi program.",
  },
  {
    id: 2,
    title: "Pemilihan Program",
    description:
      "Tentukan jenis program privat, mata pelajaran yang ingin dileskan, dan jadwal belajar sesuai kebutuhan.",
  },
  {
    id: 3,
    title: "Pengisian Formulir Pendaftaran",
    description: "Lengkapi formulir pendaftaran siswa secara Online.",
  },
  {
    id: 4,
    title: "Penjadwalan",
    description:
      "Kami akan mencocokkan jadwal siswa dengan tutor yang sesuai dengan mata pelajaran dan kebutuhan belajar.",
  },
  {
    id: 5,
    title: "Mulai Belajar",
    description:
      "Program privat dimulai sesuai jadwal yang telah disepakati bersama.",
  },
  {
    id: 6,
    title: "Pembayaran",
    description:
      "Kemudahan pembayaran via transfer ke rekening lembaga. Biaya yang dibayarkan sesuai dengan jumlah sesi yang terlaksana pada bulan tersebut atau menggunakan sistem deposit.",
  },
];

const HowToOrder = () => {
  // const contactData = useAppSelector(selectContactCsData);

  // const finalUrl = contactData?.link_cta;
  return (
    <section className="how-to-order-section">
      <div className="how-to-order-container">
        <div className="how-to-order-main">
          <p className="how-to-order-label">CARA MENDAFTAR</p>
          <h2 className="how-to-order-heading">
            Alur Pendaftaran Siswa <br />
            Program Privat
          </h2>
        </div>
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
      </div>
    </section>
  );
};

export default HowToOrder;
