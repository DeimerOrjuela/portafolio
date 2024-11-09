import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import HeroSection from "../../components/home/HeroSection";
import TypeWritter from "../../components/home/TypeWriter";
import WhatsAppIcon from "../../components/home/ContactWatsapp";

function Home() {
  return (
    <div>
      <Navbar />
      <TypeWritter />
      <HeroSection />
      <WhatsAppIcon />
      <Footer />
    </div>
  );
}

export default Home;
