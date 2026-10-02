import React from "react";
import HeroSection from "@/components/landing/about/HeroSection";
import OurMission from "@/components/landing/about/OurMission";
import PrinciplesSection from "@/components/landing/about/PrinciplesSection";
import OperationsSection from "@/components/landing/about/OperationsSection";
import NetworkSection from "@/components/landing/about/NetworkSection";
import TestimonialsSection from "@/components/landing/about/TestimonialsSection";
import CTASection from "@/components/landing/about/CTASection";

export default function page() {
  return (
    <div>
      <HeroSection />
      <OurMission />
      <PrinciplesSection />
      <OperationsSection/>
      <NetworkSection/>
      <TestimonialsSection/>
      <CTASection/>
    </div>
  );
}
