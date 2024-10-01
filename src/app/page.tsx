import AiForAll from "@/components/AiForAll";
import Collaboration from "@/components/Collaboration";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Collaboration />
      <AiForAll/>
      <Testimonial/>
      <TestimonialSlider/>
    </>
  );
}
