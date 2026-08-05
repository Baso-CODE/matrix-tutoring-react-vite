import { Send } from "lucide-react";
import { useState } from "react";
import { handleCsWhatsAppClick } from "../../../../../helper/csRotationHelper";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    namaPanggilan: "",
    jenisKelamin: "",
    agama: "",
    noHpSiswa: "",
    emailSiswa: "",
    kelas: "",
    sekolah: "",
    kurikulum: "",
    mapel: "",
    jadwalLes: "",
    preferensiTutor: "",
    sistemLes: "",
    namaOrangTua: "",
    noHpOrangTua: "",
    emailOrangTua: "",
    alamatLengkap: "",
    catatanKhusus: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template pesan form pendaftaran
    // Kita kosongkan nama CS di awal karena helper handleCsWhatsAppClick
    // akan secara otomatis menyisipkan "Halo [Nama CS] https://apps.bimbelmatrix.com/..."
    const formDetailsMessage = `
Berikut data diri saya untuk pendaftaran les privat:
- Nama Lengkap: ${formData.namaLengkap}
- Nama Panggilan: ${formData.namaPanggilan}
- Jenis Kelamin: ${formData.jenisKelamin}
- Agama: ${formData.agama || "-"}
- No HP Siswa: ${formData.noHpSiswa || "-"}
- Email Siswa: ${formData.emailSiswa || "-"}
- Kelas: ${formData.kelas || "-"}
- Sekolah: ${formData.sekolah || "-"}
- Kurikulum: ${formData.kurikulum || "-"}
- Mapel yang Dileskan: ${formData.mapel || "-"}
- Jadwal Les: ${formData.jadwalLes || "-"}
- Preferensi Tutor: ${formData.preferensiTutor || "-"}
- Sistem Les: ${formData.sistemLes || "-"}
- Nama Orang Tua: ${formData.namaOrangTua || "-"}
- No HP Orang Tua: ${formData.noHpOrangTua || "-"}
- Email Orang Tua: ${formData.emailOrangTua || "-"}
- Alamat Lengkap: ${formData.alamatLengkap || "-"}
- Catatan Khusus: ${formData.catatanKhusus || "-"}`;

    // Ambil CS aktif saat ini dari helper untuk menyusun salam pembuka
    const savedIndex = localStorage.getItem("matrix_cs_rotation_index");
    const currentIndex = savedIndex ? parseInt(savedIndex, 10) % 4 : 0;
    const csNames = ["Ms. Dita", "Ms. Eka", "Ms. Linda", "Ms. Syifa"];
    const activeCsName = csNames[currentIndex];

    const fullCustomMessage = `Halo ${activeCsName} https://apps.bimbelmatrix.com/, saya ingin bertanya program belajar.${formDetailsMessage}`;

    // Panggil helper rotasi CS dengan pesan kustom data form
    handleCsWhatsAppClick(fullCustomMessage);
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Form Pendaftaran Les Privat</h2>
      <p className="contact-form-subtitle">
        Silakan isi data di bawah ini untuk pendaftaran.
      </p>

      <form onSubmit={handleSubmit} className="contact-form-form">
        <div className="contact-form-input-group">
          <label>
            <span>Nama Lengkap Siswa *</span>
            <input
              type="text"
              name="namaLengkap"
              value={formData.namaLengkap}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            <span>Nama Panggilan *</span>
            <input
              type="text"
              name="namaPanggilan"
              value={formData.namaPanggilan}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="contact-form-input-group">
          <label>
            <span>Jenis Kelamin *</span>
            <select
              name="jenisKelamin"
              value={formData.jenisKelamin}
              onChange={handleChange}
              required>
              <option value="">Pilih...</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </label>
          <label>
            <span>Agama</span>
            <input
              type="text"
              name="agama"
              value={formData.agama}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="contact-form-input-group">
          <label>
            <span>No HP Siswa</span>
            <input
              type="tel"
              name="noHpSiswa"
              value={formData.noHpSiswa}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Email Siswa</span>
            <input
              type="email"
              name="emailSiswa"
              value={formData.emailSiswa}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="contact-form-input-group">
          <label>
            <span>Kelas</span>
            <input
              type="text"
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Sekolah</span>
            <input
              type="text"
              name="sekolah"
              value={formData.sekolah}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="contact-form-input-group">
          <label>
            <span>Kurikulum</span>
            <input
              type="text"
              name="kurikulum"
              value={formData.kurikulum}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Mapel yang Dileskan</span>
            <input
              type="text"
              name="mapel"
              value={formData.mapel}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <span>Jadwal Les (Hari, Jam)</span>
          <input
            type="text"
            name="jadwalLes"
            value={formData.jadwalLes}
            onChange={handleChange}
          />
        </label>

        <div className="contact-form-input-group">
          <label>
            <span>Preferensi Tutor</span>
            <select
              name="preferensiTutor"
              value={formData.preferensiTutor}
              onChange={handleChange}>
              <option value="">Pilih...</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </label>
          <label>
            <span>Sistem Les</span>
            <select
              name="sistemLes"
              value={formData.sistemLes}
              onChange={handleChange}>
              <option value="">Pilih...</option>
              <option value="Privat Offline">Privat Offline (ke rumah)</option>
              <option value="Online">Online</option>
            </select>
          </label>
        </div>

        <div className="contact-form-input-group">
          <label>
            <span>Nama Orang Tua</span>
            <input
              type="text"
              name="namaOrangTua"
              value={formData.namaOrangTua}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>No HP Orang Tua</span>
            <input
              type="tel"
              name="noHpOrangTua"
              value={formData.noHpOrangTua}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <span>Email Orang Tua</span>
          <input
            type="email"
            name="emailOrangTua"
            value={formData.emailOrangTua}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>Alamat Lengkap</span>
          <textarea
            name="alamatLengkap"
            value={formData.alamatLengkap}
            onChange={handleChange}
            rows="3"></textarea>
        </label>

        <label>
          <span>Catatan Khusus</span>
          <textarea
            name="catatanKhusus"
            value={formData.catatanKhusus}
            onChange={handleChange}
            rows="3"></textarea>
        </label>

        <button type="submit" className="bouncy-button">
          <span>Send a Message</span>{" "}
          <Send size={25} className="icon-bouncy-button" />{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
