import "./PromoFree.css";

const PromoFree = () => {
  const phone = "6285747281466"; // Nomor telepon
  const baseUrl = `https://api.whatsapp.com/send?phone=${phone}&text=Halo%20Kak%20Linda%20https://apps.bimbelmatrix.com/,%20saya%20ingin%20tanya%20program%20belajar%20untuk%0A`;

  const message = `
Kelas : 
Mapel : 
Kurikulum : 
Wilayah : 
`.trim(); // Placeholder untuk pesan yang diinginkan

  const finalUrl = `${baseUrl}${encodeURIComponent(message)}`;
  return (
    <div className="promo-free">
      <a href={finalUrl} target="_blank" rel="noopener noreferrer">
        <img
          src="/images/promo.webp"
          alt="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, AKM, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) - Matrix Tutoring"
          width="1600"
          height="900"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default PromoFree;
