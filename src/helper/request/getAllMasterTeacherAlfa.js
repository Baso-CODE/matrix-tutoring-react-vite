// src/services/kotaService.js

import { baseUrlClientAlfa } from "../config";

export async function getAllMasterTeacherAlfa() {
  try {
    const response = await fetch(`${baseUrlClientAlfa}/tutors/all`, {
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
