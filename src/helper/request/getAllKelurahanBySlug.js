// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getKelurahanBySlug(slug) {
  try {
    const response = await fetch(`${baseUrlClient}/kelurahan/${slug}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get kota");
    }

    return result;
  } catch (error) {
    console.error("Error get kota:", error);
    throw error;
  }
}
