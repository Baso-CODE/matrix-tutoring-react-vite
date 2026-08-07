/* --- Container Hero --- */
.hero__tka {
  position: relative;
  min-height: 100vh;
  background-image: url("/images/les-private/ksm/bg-jumbotron-tka.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center; /* Teks di tengah secara vertikal */
  overflow: hidden; /* Mengunci gambar agar tidak keluar batas section */
}

/* Overlay gelap agar teks lebih jelas */
.hero__tka-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__tka-content {
  position: relative;
  z-index: 1;
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: #fff;
  height: 100%;
}

.hero__tka-text {
  flex: 0 0 55%;
  z-index: 2; /* Pastikan teks di atas gambar jika ada tumpang tindih */
  padding-bottom: 40px;
}

/* Title */
.hero__tka-title {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}

.hero__tka-title span {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 10px;
}

/* Deskripsi */
.hero__tka-description {
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 30px;
  color: #f0f0f0;
  font-family: "Poppins", sans-serif;
}

/* Tombol */
.hero__tka-buttons {
  display: flex;
  gap: 20px;
}

/* --- KUNCI: Gambar menempel mutlak ke bawah kanan --- */
.hero__tka-image {
  position: absolute;
  right: 5%;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
}

.hero__tka-image img {
  height: auto;
  max-height: 90vh; /* Batasi tinggi maksimal agar tidak melebihi layar */
  object-fit: contain;
  display: block;
}

/* --- Responsive --- */
@media (max-width: 1024px) {
  .hero__tka-title {
    font-size: 1.8rem;
  }
  .hero__tka-title span {
    font-size: 1.2rem;
  }
  .hero__tka-description {
    font-size: 0.9rem;
  }
  .hero__tka-image img {
    max-height: 75vh;
  }
}

@media (max-width: 768px) {
  .hero__tka {
    min-height: auto;
    padding: 60px 0 0 0;
  }

  .hero__tka-content {
    flex-direction: column;
    text-align: center;
    gap: 0px;
    padding-left: 3%;
    padding-right: 3%;
  }

  .hero__tka-text {
    flex: 0 0 100%;
    margin-top: 1rem;
    padding-bottom: 20px;
  }

  .hero__tka-title {
    font-size: 1.4rem;
  }
  
  .hero__tka-description {
    font-size: 0.9rem;
  }

  /* Di mobile, posisi absolute dilepas agar menjadi normal flow di bawah teks */
  .hero__tka-image {
    position: relative;
    right: auto;
    bottom: auto;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }

  .hero__tka-image img {
    max-height: 380px;
  }

  .hero__tka-buttons {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
}