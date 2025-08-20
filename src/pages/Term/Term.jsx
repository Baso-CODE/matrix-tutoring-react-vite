import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import "./Term.css";

const Term = () => {
  return (
    <>
      <div className="terms-page">
        <header className="terms-hero">
          <div className="terms-hero-content">
            <h1>Syarat & Ketentuan</h1>
            {/* <p>Ketentuan yang berlaku bagi siswa dan orang tua.</p> */}
          </div>
        </header>

        <main className="terms-main-content">
          <div className="terms-section">
            <h2 className="section-title-terms">
              Syarat dan Ketentuan bagi Siswa
            </h2>
            <ul className="terms-list">
              <li>
                Mengikuti les privat dengan baik sesuai dengan jadwal yang telah
                disepakati.
              </li>
              <li>Durasi belajar per sesi adalah 2 jam Efektif.</li>
              <li>Komunikatif dengan tutor.</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2 className="section-title-terms">
              Syarat dan Ketentuan bagi Orang Tua Siswa
            </h2>
            <ul className="terms-list">
              <li>
                Konfirmasi ke lembaga apabila siswa tidak bisa mengikuti les
                sesuai dengan jadwal yang telah ditentukan (baik akan
                ditiadakan/ganti hari) minimal H-1 Jadwal. Apabila pembatalan
                dilakukan pada saat tutor sudah dalam perjalanan maka akan
                dikenakan biaya transport.
              </li>
              <li>
                Membayar biaya les. Pembayaran dilaksanakan tanggal 1, via
                transfer ke rekening lembaga yang akan diinfokan bersamaan
                dengan invoice. Tagihan dilaksanakan berdasarkan sesi les privat
                yang telah berjalan pada bulan sebelumnya.
              </li>
              <li>
                Pembayaran hanya dapat dilakukan melalui transfer, tidak
                diperkenankan untuk dititipkan melalui tutor.
              </li>
              <li>
                Konfirmasi pembayaran dapat dilakukan via WA/telepon dan kami
                akan segera konfirmasi jika transfer telah diterima.
              </li>
              <li>
                Apabila terdapat hal yang kurang sesuai terkait tutor dan proses
                belajar, orang tua diharapkan berkomunikasi ke lembaga sehingga
                diberikan solusi terbaik secepatnya oleh lembaga.
              </li>
            </ul>
          </div>

          <div className="terms-acknowledgement">
            <p>
              Terima kasih atas kepercayaan Anda. Kami menyadari betul
              Putra/Putri Anda begitu berarti dan merupakan amanah besar bagi
              kami. Suatu pencapaian dan kebanggaan tersendiri bagi kami dapat
              menjadi bagian dari kesuksesan pendidikan putra/putri Anda.
            </p>
          </div>

          <div className="cta-section">
            <a href="#" className="cta-button">
              DAFTAR SEKARANG !
            </a>
            <p className="cta-note">*Gratis Biaya Pendaftaran</p>
          </div>
        </main>
      </div>
      <CTABottomHome />
    </>
  );
};

export default Term;
