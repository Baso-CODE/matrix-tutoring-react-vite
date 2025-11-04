import "./InformasiSeputarTKA.css";
const InformasiSeputarTKA = ({ location }) => {
  return (
    <section className="container-informasi_seputar_tka">
      <div className="centered-content-informationTKA">
        <div className="container-calistung-left-right">
          {/* TEXT */}
          <div className="program-calistung-text">
            <h2>Informasi Seputar Tes Kemampuan Akademik (TKA)</h2>
            <p>
              TKA dapat diikuti oleh semua siswa kelas akhir pada jenjang
              SD/MI/Sederajat, SMP/MTs/Sederajat, SMA/MA/Sederajat dan SMK/MAK
              dari jalur Pendidikan Formal, Nonformal dan Informal. Setiap siswa
              yang terdaftar pada basis data kementerian dan memiliki NISN valid
              dapat mengikuti TKA. Kesempatan siswa untuk mengikuti TKA hanya
              satu kali pada tiap jenjang, kecuali ketika siswa tidak lulus dari
              satuan pendidikan. TKA juga tidak menentukan kelulusan dari satuan
              pendidikan.
            </p>

            <h3>Mata Pelajaran yang diujikan pada TKA</h3>
            <p>
              Tes Kemampuan Akademik mengujikan beberapa mata pelajaran sebagai
              berikut:
            </p>
            <ol className="numbered-list">
              <li>SD/MI/SMP/MTs/sederajat: Bahasa Indonesia dan Matematika.</li>
              <li>
                SMA/MA/SMK/MAK/sederajat: Bahasa Indonesia, Matematika, Bahasa
                Inggris, dan 2 (dua) mata pelajaran pilihan.
              </li>
            </ol>
            <p>
              Dalam memilih 2 mata pelajaran pilihan, pihak sekolah diharapkan
              dapat memberi arahan agar pilihan sesuai dengan minat siswa dan
              rencana studi lanjut. Pemilihan mata pelajaran dilakukan saat
              pendaftaran TKA.
            </p>
            <p>
              Soal TKA akan berbentuk pilihan ganda biasa, yaitu soal dengan
              hanya 1 (satu) pilihan jawaban yang benar dan pilihan ganda
              kompleks, yaitu soal dengan pilihan jawaban benar bisa lebih dari
              satu. TKA tidak mengukur literasi/numerasi umum, melainkan
              kompetensi mata pelajaran sesuai kurikulum. Namun, soal TKA tetap
              menekankan pada penalaran dan pemecahan masalah.
            </p>
          </div>

          {/* IMAGE */}
          <div className="program-calistung-image">
            <img
              src="/images/les-private/ksm/Akademik-TKA.png"
              alt={`Informasi Seputar Tes Kemampuan Akademik (TKA) - Les Privat TKA - Matrix Tutoring ${
                location ? `di ${location}` : "Indonesia"
              }`}
              className="les-privat-sd-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x360/007bff/ffffff?text=PERSIAPAN+TKA";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformasiSeputarTKA;
