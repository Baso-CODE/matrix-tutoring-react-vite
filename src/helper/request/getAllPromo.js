import { baseUrlClient } from "../config";

export async function getAllPromo(type = null) {
  try {
    let url = `${baseUrlClient}/promo/all`;

    if (type) {
      url = `${baseUrlClient}/promo/by-type?type=${type}`;
    }

    const response = await fetch(url, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal mengambil data promo");
    }

    return result;
  } catch (error) {
    console.error("Error mengambil promo:", error);
    if (error.message.includes("No promo found for type")) {
      return { message: error.message, data: [] };
    }
    throw error;
  }
}
