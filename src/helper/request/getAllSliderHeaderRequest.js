// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getAllSliderHeader() {
  try {
    const response = await fetch(`${baseUrlClient}/all/sliderheader`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get slider header");
    }

    return result;
  } catch (error) {
    console.error("Error get slider header", error);
    throw error;
  }
}
