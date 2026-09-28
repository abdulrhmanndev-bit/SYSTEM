import React from "react";
import HeroSection from "@/components/about/HeroSection";
import OurMission from "@/components/about/OurMission";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import OperationsSection from "@/components/about/OperationsSection";
import NetworkSection from "@/components/about/NetworkSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <OurMission />
      <PrinciplesSection />
      <OperationsSection/>
      <NetworkSection/>
      <TestimonialsSection/>
    </div>
  );
}
