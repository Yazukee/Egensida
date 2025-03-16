import React from "react";
import Kontakt from "./components/ui/Kontakt";
import OmMig from "./components/ui/OmMig";
import HeroSection from "./components/ui/HeroSection";
import Navbar from "./components/ui/Navbar";
import Forelasning from "./components/ui/Forelasning";
import BokaMig from "./components/ui/BokaMig";

function InspirationSpeakerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <OmMig />
      <Forelasning />
      <BokaMig />
      <Kontakt />
    </div>
  );
}

export default InspirationSpeakerPage;
