/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../../helper/ImageModal/ImageModal";
import { getAllRandomSlogans } from "../../helper/request/getAllSloganSRequest";
import "./HeroHome.css";
import { ArrowRightCircleIcon, MoveRight } from "lucide-react";
import ReusableButton from "../../helper/Button/ReusableButton/ReusableButton";

const HeroHome = ({ contactData }) => {
  const [dataSlogan, setDataSlogan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

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

  // Pisahkan slogan untuk menyorot kata terakhir
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

  // Fungsi untuk memulai timer
  const startTimer = () => {
    // Pastikan hanya satu interval yang berjalan
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    // Reset endTime di localStorage jika sudah habis atau belum ada
    if (
      !localStorage.getItem(END_TIME_STORAGE_KEY) ||
      Object.keys(calculateTimeLeft()).length === 0
    ) {
      const now = new Date().getTime();
      const newEndTime = now + PROMO_DURATION_MINUTES * 60 * 1000;
      localStorage.setItem(END_TIME_STORAGE_KEY, newEndTime);
    }

    setTimerVisible(true);
    setTimeLeft(calculateTimeLeft()); // Update waktu segera setelah memulai

    timerIntervalRef.current = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timerIntervalRef.current); // Hentikan timer jika waktu habis
        setTimerVisible(false); // Sembunyikan timer setelah habis
        localStorage.removeItem(END_TIME_STORAGE_KEY); // Pastikan dibersihkan
      }
      setTimeLeft(newTimeLeft);
    }, 1000);
  };

  // Efek samping untuk membersihkan interval saat komponen di-unmount
  useEffect(() => {
    // Inisialisasi timer jika ada waktu tersisa dari sesi sebelumnya
    if (localStorage.getItem(END_TIME_STORAGE_KEY)) {
      const initialTimeLeft = calculateTimeLeft();
      if (Object.keys(initialTimeLeft).length > 0) {
        // Hanya mulai jika waktu tersisa
        startTimer();
      } else {
        localStorage.removeItem(END_TIME_STORAGE_KEY); // Hapus jika sudah habis saat dimuat
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
    // Hanya tampilkan komponen timer jika timerVisible true
    Object.keys(timeLeft).forEach((interval) => {
      // Pastikan untuk menampilkan 0 jika nilainya 0 (misal: 00:05:30)
      if (timeLeft[interval] === undefined && interval !== "seconds") {
        return;
      }
      timerComponents.push(
        <span key={interval}>
          {String(timeLeft[interval]).padStart(2, "0")}
          {interval === "hours" ? ":" : interval === "minutes" ? ":" : ""}
        </span>
      );
    });
  }

  // Fungsi handler untuk membuka modal
  const handleImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  // Fungsi handler untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <div className="hero-section-container">
      <div className="hero-content-wrapper">
        <div className="hero-left-section">
          <h1 className="hero-title">
            {mainText}
            <span className="hero-highlight-bimbel">{highlightWord}</span>
          </h1>
          <p className="hero-subtitle">
            Dapatkan bimbingan intensif online & offline dengan{" "}
            <span className="hero-highlight-discount">
              Diskon Spesial hingga 20%
            </span>
            !
          </p>

          <ul className="hero-feature-list">
            <li>
              <svg
                className="check-icon"
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
                className="check-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                w
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
                className="check-icon"
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
                className="check-icon"
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
                className="check-icon"
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
                className="check-icon"
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
                className="check-icon"
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

          <div className="hero-pricing">
            <span className="hero-price">Mulai Rp 100.000</span>
            <span className="hero-per-month">/sesi</span>
          </div>
          {/* <p className="hero-bonus">
            Gratis sesi percobaan untuk pendaftar baru!
          </p> */}

          <div className="hero-cta-section-wrapper">
            <Link
              to={contactData?.link_cta || "#"}
              className="link_cta_decoration">
              {/* <svg
                className="icon-button-how-to-order"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"></path>
              </svg> */}
              <ReusableButton
                text="Ambil Promo Sekarang!"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                // onClick={handleConsultationClick}
                icon={<ArrowRightCircleIcon />}
              />
            </Link>

            <button className="button-how-to-order">
              {timerVisible && timerComponents.length ? (
                // Jika timer terlihat dan berjalan, tampilkan timer
                <span className="hero-timer-display">{timerComponents}</span>
              ) : (
                // Jika tidak, tampilkan teks awal dengan ikon
                <>
                  Lihat Promo & Waktu!
                  <svg
                    className="icon-button-how-to-order"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"></path>
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* <p className="hero-guarantee">Garansi kepuasan belajar</p> */}
        </div>

        {/* Right Section: Illustrations / Graphics for Bimbel */}
        <div className="hero-right-section">
          <div className="hero-illustration-main">
            {/* Top Bar for Learning Dashboard */}
            <div className="illustration-top-bar">
              <span className="lock-icon">📚</span>
              <span className="domain-text">Dashboard Murid</span>
            </div>
            {/* Online Learning UI Placeholder */}
            <div className="website-ui-placeholder">
              <div className="ui-sidebar">
                <div className="ui-icon-btn">🎯</div>
                <div className="ui-icon-btn">📝</div>
                <div className="ui-icon-btn">📈</div>
                <div className="ui-icon-btn">💬</div>
              </div>
              <div className="ui-content">
                <div className="container-text-block">
                  <div className="ui-text-block">Pelajaran</div>
                  <div className="ui-text-block">Matematika</div>
                </div>
                <div className="ui-headline">Memahami Persamaan Kuadrat</div>
                <div className="ui-gallery-label">Materi & Contoh Soal</div>
                <div className="ui-image-grid">
                  <div
                    className="ui-image-item materi-img-1"
                    onClick={() =>
                      handleImageClick("/images/materi-matematika.webp")
                    }
                    style={{ cursor: "pointer" }} // Opsional: tambahkan kursor pointer
                  ></div>
                  <div
                    className="ui-image-item materi-img-2"
                    onClick={() =>
                      handleImageClick("/images/materi-matematika2.webp")
                    }
                    style={{ cursor: "pointer" }} // Opsional: tambahkan kursor pointer
                  ></div>
                </div>
              </div>
            </div>
            {/* Student/Teacher Profile Card */}
            <div className="client-profile-card">
              <img
                src="/images/siswa_mening.webp"
                alt="Siswa Berprestasi"
                className="client-avatar"
                loading="eager"
              />
              <div className="client-info">
                <p className="client-name">Siswa: Wening</p>
                <p className="client-description">
                  Meningkat 90% di Matematika!
                </p>
              </div>
            </div>
            {/* Score/Improvement Badge */}
            <div className="pagespeed-badge">
              <span className="pagespeed-label">Peningkatan Nilai</span>
              <div className="pagespeed-score-circle"></div>
            </div>
            {/* Subject/Level Icons */}
            <div className="small-icons">
              <div className="icon-box">
                <img
                  src="/images/matematika.webp"
                  alt="Matematika"
                  loading="eager"
                />
              </div>
              <div className="icon-box">
                <img
                  src="/images/sainsbocil.webp"
                  alt="Sains"
                  loading="eager"
                />
              </div>
              <div className="icon-box">
                <img
                  src="/images/bahasa.webp"
                  alt="Bahasa Inggris"
                  loading="eager"
                />
              </div>
            </div>
          </div>
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

export default HeroHome;
