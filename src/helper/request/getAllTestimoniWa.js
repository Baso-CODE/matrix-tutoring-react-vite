import { baseUrlClient } from "../config";

export async function getAllTestimoniWa() {
  try {
    const response = await fetch(`${baseUrlClient}/testimoni-wa/all`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get faq");
    }

    return result;
  } catch (error) {
    console.error("Error get faq", error);
    throw error;
  }
}
