/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRightCircleIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReusableButton from "../../helper/Button/ReusableButton/ReusableButton";
import ImageModal from "../../helper/ImageModal/ImageModal";
import { getAllRandomSlogans } from "../../helper/request/getAllSloganSRequest";
import "./HeroHomeV2.css";

const HeroHomeV2 = () => {
  const [dataSlogan, setDataSlogan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  // Data 4 CS Lokal
  const csList = [
    {
      name: "Ms. Dita",
      phone: "6285817279118",
    },
    {
      name: "Ms. Eka",
      phone: "6287783999349",
    },
    {
      name: "Ms. Linda",
      phone: "6285747281466",
    },
    {
      name: "Ms. Syifa",
      phone: "628131971916",
    },
  ];

  // State indeks CS aktif
  const [currentCsIndex, setCurrentCsIndex] = useState(0);

  // 1. ROTASI VIA REFRESH / INITIAL LOAD
  useEffect(() => {
    const savedIndex = localStorage.getItem("matrix_cs_rotation_index");
    if (savedIndex !== null) {
      const nextIndex = (parseInt(savedIndex, 10) + 1) % csList.length;
      setCurrentCsIndex(nextIndex);
      localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    } else {
      localStorage.setItem("matrix_cs_rotation_index", "0");
      setCurrentCsIndex(0);
    }
  }, [csList.length]);

  // 2. ROTASI VIA KLIK BUTTON PROMO
  const handlePromoClick = () => {
    const activeCs = csList[currentCsIndex];

    const messageTemplate = `Halo ${activeCs.name} https://apps.bimbelmatrix.com/, saya ingin tanya program belajar untuk\n\nKelas : \nMapel : \nKurikulum : \nWilayah : `;
    const finalUrl = `https://api.whatsapp.com/send?phone=${activeCs.phone}&text=${encodeURIComponent(messageTemplate)}`;

    // Geser giliran ke CS berikutnya untuk klik/refresh selanjutnya
    const nextIndex = (currentCsIndex + 1) % csList.length;
    localStorage.setItem("matrix_cs_rotation_index", nextIndex.toString());
    setCurrentCsIndex(nextIndex);

    // Buka WhatsApp di tab baru
    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  const splitSlogan = (slogan) => {
    if (!slogan) {
      return { mainText: "", highlightWord: "" };
    }
    const words = slogan.split(" ");
    if (words.length <= 1) {
      return {
        mainText: "",
        highlightWord: slogan,
      };
    }
    const lastWord = words.pop();
    const mainText = words.join(" ");
    return { mainText, highlightWord: lastWord };
  };

  useEffect(() => {
    const fetchDataSlogan = async () => {
      try {
        const response = await getAllRandomSlogans();
        setDataSlogan(response.data || null);
      } catch (error) {
        console.error("Error fetching slogan data:", error);
        setDataSlogan({
          content: "Bimbel Les Privat Terbaik untuk Semua Jenjang",
        });
      }
    };
    fetchDataSlogan();
  }, []);

  const currentSloganText =
    dataSlogan?.content || "Bimbel Les Privat Terbaik untuk Semua Jenjang";

  const { mainText, highlightWord } = splitSlogan(currentSloganText);

  const PROMO_DURATION_MINUTES = 120;
  const END_TIME_STORAGE_KEY = "promoEndTime";

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    let endTime = localStorage.getItem(END_TIME_STORAGE_KEY);

    if (!endTime) {
      const newEndTime = now + PROMO_DURATION_MINUTES * 60 * 1000;
      localStorage.setItem(END_TIME_STORAGE_KEY, newEndTime);
      endTime = newEndTime;
    } else {
      endTime = parseInt(endTime, 10);
    }

    const difference = endTime - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      localStorage.removeItem(END_TIME_STORAGE_KEY);
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [timerVisible, setTimerVisible] = useState(false);
  const timerIntervalRef = useRef(null);

  const startTimer = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    if (
      !localStorage.getItem(END_TIME_STORAGE_KEY) ||
      Object.keys(calculateTimeLeft()).length === 0
    ) {
      const now = new Date().getTime();
      const newEndTime = now + PROMO_DURATION_MINUTES * 60 * 1000;
      localStorage.setItem(END_TIME_STORAGE_KEY, newEndTime);
    }

    setTimerVisible(true);
    setTimeLeft(calculateTimeLeft());

    timerIntervalRef.current = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timerIntervalRef.current);
        setTimerVisible(false);
        localStorage.removeItem(END_TIME_STORAGE_KEY);
      }
      setTimeLeft(newTimeLeft);
    }, 1000);
  };

  useEffect(() => {
    if (localStorage.getItem(END_TIME_STORAGE_KEY)) {
      const initialTimeLeft = calculateTimeLeft();
      if (Object.keys(initialTimeLeft).length > 0) {
        startTimer();
      } else {
        localStorage.removeItem(END_TIME_STORAGE_KEY);
        setTimerVisible(false);
      }
    }
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  const timerComponents = [];
  if (timerVisible) {
    Object.keys(timeLeft).forEach((interval) => {
      if (timeLeft[interval] === undefined && interval !== "seconds") {
        return;
      }
      timerComponents.push(
        <span key={interval}>
          {String(timeLeft[interval]).padStart(2, "0")}
          {interval === "hours" ? ":" : interval === "minutes" ? ":" : ""}
        </span>,
      );
    });
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <div className="hero-section-container-v2">
      <div className="hero-content-wrapper-v2">
        <div className="hero-left-section-v2">
          <h1 className="hero-title-v2">
            {mainText}
            <span className="hero-highlight-bimbel-v2">{highlightWord}</span>
          </h1>
          <p className="hero-subtitle-v2">
            Dapatkan bimbingan intensif online & offline dengan{" "}
            <span className="hero-highlight-discount-v2">
              Diskon Spesial hingga 20%
            </span>
            !
          </p>

          <ul className="hero-feature-list-v2">
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Guru Profesional & Berpengalaman
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Bebas pilih guru sesuai kriteria
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Kemudahan pembayaran via transfer ke Rekening Lembaga
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Materi Lengkap: TK, SD, SMP, SMA, TKA, UTBK, OSN, Mahasiswa, &
              Lainnya
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sistem belajar: pilih Privat Online, Guru Privat Datang ke Rumah
              atau keduanya
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Kemudahan penjadwalan: bisa atur jadwal sesuai dengan waktu luang
              siswa
            </li>
            <li>
              <svg
                className="check-icon-v2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.5 12.75L9 17.25L19.5 6.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Free Biaya Pendaftaran
            </li>
          </ul>

          <div className="hero-pricing-v2">
            <span className="hero-price-v2">Mulai Rp 100.000</span>
            <span className="hero-per-month-v2">/sesi</span>
          </div>

          <div className="hero-cta-section-wrapper-v2">
            <div
              onClick={handlePromoClick}
              className="link_cta_decoration-v2"
              style={{ cursor: "pointer" }}>
              <ReusableButton
                text="Dapatkan promo, chat sekarang!"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                icon={<ArrowRightCircleIcon />}
              />
            </div>
          </div>
        </div>

        <div className="hero-right-section-v2">
          <img
            src="/images/jumbotron_homepage.webp"
            className="image-jumbotron-right-home-v2"
            alt="Ilustrasi Bimbel Matrix"
            loading="eager"
            fetchpriority="high"
            width="600"
            height="500"
          />
        </div>
      </div>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default HeroHomeV2;
