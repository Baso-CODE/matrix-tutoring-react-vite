// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getAllRandomSlogans() {
  try {
    const response = await fetch(`${baseUrlClient}/slogans/random`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get Slogans");
    }

    return result;
  } catch (error) {
    console.error("Error get faq", error);
    throw error;
  }
}
