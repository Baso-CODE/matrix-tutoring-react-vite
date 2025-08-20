import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import "./Testimoni.css";
import TestimoniOrangTuaNotSlide from "./TestimoniaOrangTua";
import TestimoniSuccessStoryHero from "./TestimoniSuccessStoryHero/TestimoniSuccessStoryHero";
const Testimoni = () => {
  return (
    <div>
      <TestimoniSuccessStoryHero />
      <SuccessStoryLesPrivate />
      <TestimonialSiswa />
      <TestimoniOrangTuaNotSlide />
    </div>
  );
};

export default Testimoni;
