import { useState } from "react";
import "./MatrixFeature.css";
import ReusableButton from "../../helper/Button/ReusableButton/ReusableButton";
// Ganti path ke gambar Anda

const whyMatrixFeatures = [
  {
    title: "1. Guru Profesional & Berpengalaman",
    description:
      "Semua guru privat Matrix adalah tenaga pengajar terpilih yang ahli di bidangnya, berpengalaman mengajar, dan memiliki metode pembelajaran efektif yang terbukti meningkatkan hasil belajar siswa. Guru Privat Matrix Tutoring berasal dari UI, UGM, ITB, IPB, STAN, STIS dan Perguruan Tinggi lainnya. Anda memiliki kebebasan penuh untuk memilih guru yang sesuai dengan kriteria dan gaya belajar Anda.",
  },
  {
    title: "2. Program Belajar Terlengkap",
    description:
      "Kami menyediakan program untuk berbagai jenjang, mulai dari TK, SD, SMP, SMA, Mahasiswa, hingga persiapan TKA, UTBK SNBT, OSN, CPNS, Kedinasan, dan program khusus lainnya.",
  },
  {
    title: "3. Pendekatan Personal dan Interaktif",
    description:
      "Setiap sesi belajar dirancang agar siswa berani bertanya, berdiskusi, dan berlatih, sehingga siswa bisa lebih percaya diri dan cepat memahami materi.",
  },
  {
    title: "4. Sistem Monitoring dan Laporan Perkembangan Belajar",
    description:
      "Matrix Tutoring menyediakan laporan perkembangan belajar yang bisa Anda akses kapan saja melalui admin kami. Dengan sistem ini, orang tua dan siswa dapat mengevaluasi hasil belajar secara terukur sesuai kebutuhan.",
  },
  {
    title: "5. Customer Service Responsif dan Solutif",
    description:
      "Tim admin kami siap membantu dengan fast response, ramah, dan memberikan solusi terbaik untuk setiap kebutuhan dan pertanyaan.",
  },
  {
    title: "6. Jadwal Belajar Fleksibel",
    description:
      "Atur jadwal belajar sesuai dengan waktu luang siswa atau melalui kesepakatan bersama, membuat proses belajar lebih efisien.",
  },
  {
    title: "7. Pilihan Belajar Online dan Offline",
    description:
      "Siswa dapat memilih belajar tatap muka langsung di rumah atau secara online atau kombinasi keduanya, sesuai kenyamanan dan kebutuhan.",
  },
  {
    title: "8. Harga Kompetitif dengan Kualitas Terbaik",
    description:
      "Investasi belajar yang sebanding dengan hasil yang didapatkan, karena kualitas adalah prioritas utama kami.",
  },
  {
    title: "9. Komitmen pada Hasil dan Kepuasan",
    description:
      "Matrix Tutoring selalu berorientasi pada kualitas dan keberhasilan siswa, memastikan setiap proses belajar membawa perubahan positif.",
  },
  {
    title: "10. GRATIS Biaya Pendaftaran + PROMO Menarik",
    description:
      "Daftar sekarang tanpa biaya pendaftaran, plus nikmati promo spesial yang selalu hadir setiap hari.",
  },
  {
    title: "11. Kemudahan Pembayaran",
    description:
      "Lakukan pembayaran dengan mudah melalui transfer ke rekening lembaga. Biaya yang dibayarkan sesuai dengan jumlah sesi yang terlaksana pada bulan tersebut atau menggunakan sistem deposit.",
  },
];

const availableSubjects = [
  "Matematika",
  "Bahasa Indonesia",
  "Bahasa Inggris",
  "Fisika",
  "Kimia",
  "Biologi",
  "Ekonomi",
  "Sejarah",
  "Geografi",
  "Sosiologi",
  "Tes Potensi Skolastik (TPS)",
  "Tes Literasi",
  "Tes Potensi Akademik (TPA)",
  "Tes Wawasan Kebangsaan (TWK)",
  "Tes Intelegensi Umum (TIU)",
  "Tes Karakteristik Pribadi (TKP)",
  "Psikotest",
  "GMST",
  "AcEPT",
  "MMPI",
  "SJT",
  "TOEFL",
  "IELTS",
  "TKBI",
  "Logical Reasoning",
  "Quantitative Reasoning",
];

const availableSubjects2 = [
  "Numeric",
  "Pendidikan Pancasila dan Kewarganegaraan",
  "Kalkulus",
  "Kimia Organik",
  "Aljabar Linear",
  "Matematika Teknik",
  "Matematika Diskrit",
  "Algoritma dan Pemrograman",
  "Pengantar Akuntansi",
  "Ekonomi Mikro & Makro",
  "Manajemen Keuangan",
  "Anatomi dan Fisiologi",
  "Mikrobiologi",
  "Ilmu Biomedik Dasar",
  "Matematika Akuntansi",
  "Statistika",
  "Bahasa Jepang",
  "Bahasa Korea",
  "Bahasa Mandarin",
  "English Conversation",
  "Bahasa Arab",
  "Bahasa Perancis",
  "Bahasa Jerman",
  "Coding",
  "dan berbagai mata pelajaran, subtest, atau mata kuliah lain sesuai kebutuhan Anda.",
];

const MatrixFeatures = () => {
  const [activeContent, setActiveContent] = useState("whyUs");

  const showWhyUs = () => setActiveContent("whyUs");
  const showSubjects = () => setActiveContent("subjects");

  const commonButtonStyle = {
    bgColor: "transparent",
    borderColor: "#fcd201",
    textColor: "#fcd201",
  };

  const activeButtonStyle = {
    bgColor: "#fcd201",
    borderColor: "#fcd201",
    textColor: "#ffffff",
  };

  return (
    <section className="container-matrix-features">
      <div className="features-wrapper">
        <div className="image-column">
          <h2 className="image-title">MATRIX TUTORING FEATURES</h2>
          <div className="button-group">
            <ReusableButton
              text="Alasan Memilih Matrix"
              onClick={showWhyUs}
              {...(activeContent === "whyUs"
                ? activeButtonStyle
                : commonButtonStyle)}
            />
            <ReusableButton
              text="Mata Pelajaran Matrix"
              onClick={showSubjects}
              {...(activeContent === "subjects"
                ? activeButtonStyle
                : commonButtonStyle)}
            />
          </div>
        </div>
        <div className="content-column">
          <div className="feature-content">
            {activeContent === "whyUs" ? (
              <div className="matrix-why-us">
                <h2 className="matrix-heading">
                  Mengapa Memilih{" "}
                  <span className="underline-text">Matrix Tutoring</span>
                </h2>
                <p className="matrix-description">
                  Matrix Tutoring bukan sekadar les privat, melainkan investasi
                  pendidikan yang akan mendukung Anak meraih prestasi akademik
                  dan masa depan gemilang. Apapun kebutuhan belajarnya, Matrix
                  siap menjadi partner belajar terbaik dan terpercaya. Berikut
                  Keunggulan Matrix Tutoring yang akan menjadikan setiap sesi
                  belajar Anda sebagai investasi berharga.
                </p>
                <div className="why-us-grid">
                  {whyMatrixFeatures.map((feature, index) => (
                    <div className="card-alasan-memilih-matrix" key={index}>
                      <div className="content-mengapa-memilih">
                        <p className="heading-mengapa-memilih">
                          {feature.title}
                        </p>
                        <p className="para-v2">{feature.description}</p>

                        {/* <button className="btn-v2">Lihat Detail</button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="matrix-subjects-offered">
                <h2 className="matrix-heading">
                  Semua Mata Pelajaran{" "}
                  <span className="underline-text">Tersedia</span>
                </h2>
                <p className="matrix-description">
                  Matrix Tutoring siap menjadi partner belajar Anda. Dengan guru
                  privat berkompeten dan berpengalaman, kami menyediakan
                  bimbingan privat untuk berbagai mata pelajaran sekolah hingga
                  kebutuhan lainnya.
                </p>
                <div className="subjects-grid">
                  <ul className="subject-offered-list">
                    {availableSubjects.map((subject, index) => (
                      <li key={index} className="subject-offered-item">
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <ul className="subject-offered-list">
                    {availableSubjects2.map((subject, index) => (
                      <li key={index} className="subject-offered-item">
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixFeatures;
