import { baseUrlClient } from "../config";

export async function getHeroLesPrivateByProgram(program) {
  try {
    const response = await fetch(`${baseUrlClient}/herolesprivate/${program}`, {
      method: "GET",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error("gagal  get kota" || result.message);
    }
    return result;
  } catch (error) {
    console.error("error get hero lesprivate", error);
    throw error;
  }
}
