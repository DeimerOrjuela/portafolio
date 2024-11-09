import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Header from "../../components/aboutus/Header";
import WhatsAppIcon from "../../components/home/ContactWatsapp";
import Prueba from "../../components/aboutus/Prueba";

function SobreMi() {
  return (
    <div>
      <Navbar />
      <WhatsAppIcon />
      <Header />
      <Footer />
    </div>
  );
}

export default SobreMi;
