import { baseUrlClientOSN } from "../config";

export async function getIsDeletedAsalSekolahSiswaRequest() {
  try {
    const asalSekolahSiswas = await fetch(
      `${baseUrlClientOSN}/asalSekolahSiswas/isDeleted/all`
    );
    const result = await asalSekolahSiswas.json();
    return result;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
}
