import React from "react";
import "./LesPrivateBahasaHeader.css";
import LesPrivateBahasaList from "./LesPrivateBahasaList";

const LesPrivateBahasaHeader = () => {
  return (
    <section className="centered-content-lesPrivate-bahasa">
      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/bahasa-asing/bahasa-asing.webp"
          alt="Les Privat Bahasa"
        />
      </div>{" "}
      <h1 id="les-privat-bahasa">
        Guru Privat Bahasa Asing dan BIPA untuk Anak dan Dewasa – Les Privat
        Inggris Conversation dan Bahasa Asing
      </h1>
      <p>
        Anda sedang mencari guru les privat bahasa Mandarin (Cina) ke rumah
        untuk orang dewasa? Atau sedang membutuhkan les privat bahasa Inggris
        Conversation online untuk anak? Ataukah sedang mencari tutor bahasa
        Indonesia untuk penutur asing? Saat ini Anda sedang berada di halaman
        yang tepat. MATRIX Education yang sudah berpengalaman sebagai lembaga
        privat terpercaya sejak tahun 2010 memiliki banyak Program Unggulan,
        yang salah satunya adalah Les Privat Bahasa Asing dan BIPA.
      </p>
      {/* Section 1 */}
      <h2 id="program-les-privat-bahasa">
        Program Les Privat Bahasa Asing dan BIPA
      </h2>
      <p className="">
        Program Les Privat Bahasa Asing dan BIPA kami bisa diikuti oleh anak –
        anak dari usia TK/SD, remaja SMP/SMA, maupun untuk Mahasiswa, Karyawan
        dan Orang Dewasa pada umumnya. Tidak ada batasan usia dalam belajar
        bahasa hanya sebagaimana tidak ada batasan usia dalam menuntut ilmu.
        Program Les Privat Bahasa Asing dan BIPA terbuka untuk masyarakat umum,
        baik WNI (Warga Negara Indonesia) maupun WNA (Warga Negara Asing).
      </p>
      <p>
        Dengan jadwal yang fleksibel menyesuaikan kebutuhan dan waktu luang
        Anda, kami siap mengirimkan tutor – tutor terbaik Matrix yang ahli pada
        bidang bahasa yang ditekuninya. Anda tidak perlu ragu karena para tutor
        bahasa dari MATRIX merupakan lulusan terbaik Program Bahasa dan Sastra
        dari Universitas Terkemuka di Indonesia seperti UI, UGM, Unpad, UNJ,
        Undip, Unair, UB, UIN, Unsoed, dan PTN terbaik.
      </p>
      {/* Section 2 */}
      <h2 id="les-privat-bahasa-inggris">
        Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing
        Offline dan Online
      </h2>
      <p className="">
        MATRIX siap melayani permintaan untuk guru les bahasa asing dengan
        pilihan program berbasis privat, yaitu Les Privat Offline dan Les Privat
        Online. Les Privat Offline (tatap muka) adalah layanan les privat bagi
        Anda yang ingin mendatangkan guru les privat ke rumah. Pada Les Privat
        Offline, proses pembelajaran kami rekomendasikan untuk belajar di rumah
        siswa tinggal atau lokasi lain yang disepakati. Guru les privat bahasa
        datang ke rumah hanya bisa menjangkau daerah Jakarta, Bogor, Depok,
        Tangerang, Tangsel, Bekasi, BSD, Bintaro, Cibubur dan sekitarnya. Lokasi
        lain yang dekat akan kami bantu upayakan.
      </p>
      <p>
        Sementara itu, Program Les Privat Online adalah layanan les privat
        berupa komunikasi dan pembelajaran dua arah (antara siswa dan guru)
        menggunakan bantuan aplikasi Zoom, Skype, dan Google Meet dan aplikasi
        lain yang mendukung siswa belajar online. Meskipun proses belajarnya
        dilakukan secara online, kami memastikan bahwa kegiatan belajar mengajar
        dapat berjalan efektif dan sesuai target pembelajaran. Les Privat Bahasa
        Asing Online dapat menjangkau seluruh wilayah Indonesia.
      </p>
      <h2 id="les-privat-bahasa-setiap-hari">
        Belajar Bahasa Setiap Hari, Dimana Saja, Kapan Saja dengan Diskon Khusus
        Program Privat Online
      </h2>
      <div className="image-lesPrivate">
        <img
          loading="lazy"
          src="/images/les-private/bahasa-asing/bahasa-content.webp"
          alt="Guru Les Privat Bahasa Asing Berpengalaman"
        />
      </div>
      <p className="description-lesPrivate indent">
        Bagi Anda yang saat ini membutuhkan Les Privat Intensif Bahasa Asing, di
        MATRIX Anda bisa memilih waktu belajar yang sesuai dengan waktu kosong
        Anda. Belajar setiap hari? BISA. Belajar 1 sampai 3 kali pertemuan dalam
        seminggu? BISA. Belajar di hari minggu, tanggal merah dan hari cuti
        bersama? Sangat BISA. Kapan pun Anda siap belajar, kami siap
        mendampingi. Dengan tim admin yang selalu responsif dan tutor – tutor
        ahli bahasa yang hebat, kami siap mendukung Anda belajar bahasa Inggris,
        Jepang, Korea, Mandarin (Cina), Jerman, Prancis, Arab, dan bahasa
        lainnya dengan mudah dan tertarget.
      </p>
      <p className="description-lesPrivate">
        Bagi Anda yang memilih Program Les Privat Online, ada keuntungan yang
        bisa Anda peroleh. Khusus Program Les Privat Online, biaya les privat
        bahasa lebih terjangkau dibanding offline karena ada diskon (pemotongan
        biaya dari biaya normal). Info selengkapnya terkait biaya les privat
        bahasa asing silakan untuk menghubungi kami di (0857 4728 1466).
      </p>
      {/* section 3 */}
      <div id="list-lest-private-bahasa">
        <LesPrivateBahasaList />
      </div>
    </section>
  );
};

export default LesPrivateBahasaHeader;
