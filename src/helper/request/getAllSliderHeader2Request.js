// src/services/kotaService.js

import { baseUrlClient } from "../config";

export async function getAllSliderHeader2() {
  try {
    const response = await fetch(`${baseUrlClient}/all/sliderheader2`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Gagal get slider header2");
    }

    return result;
  } catch (error) {
    console.error("Error get slider header2", error);
    throw error;
  }
}
