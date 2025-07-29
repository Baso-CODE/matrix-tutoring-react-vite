import { getHeroLesPrivateByProgram } from "../helper/request/getHeroLesPrivateByProgram";

const cache = {};

export const getHeroData = async (program, locationType) => {
  // Cek apakah data sudah ada di cache
  if (cache[program]) {
    return {
      image: cache[program][locationType]?.image || null,
      heading: cache[program].heading,
      description: cache[program].description,
    };
  }

  try {
    // Mengambil data hero berdasarkan program
    const response = await getHeroLesPrivateByProgram(program);
    const heroData = response.data;

    // Simpan data ke cache
    cache[program] = {
      heading: heroData.heading,
      description: heroData.description,
      kota: { image: heroData.imageKota },
      kabupaten: { image: heroData.imageKabupaten },
      kecamatan: { image: heroData.imageKecamatan },
      kelurahan: { image: heroData.imageKelurahan },
    };

    // Mengembalikan data sesuai dengan jenis lokasi yang dipilih
    return {
      image: cache[program][locationType]?.image || null,
      heading: heroData.heading,
      description: heroData.description,
    };
  } catch (error) {
    console.error("Failed to fetch hero data:", error);
    // Mengembalikan nilai default atau null jika terjadi kesalahan
    return {
      image: "/images/heroo.png",
      heading: "Data tidak tersedia",
      description: "Terjadi kesalahan saat mengambil data hero.",
    };
  }
};
