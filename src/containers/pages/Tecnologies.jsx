import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import Stack from "../../components/tecnologies/Stack";
import WhatsAppIcon from "../../components/home/ContactWatsapp";
import TypeWritter from "../../components/tecnologies/TypeWriter";

function Tecnologies() {
  return (
    <div>
      <Navbar />
      <div className="text-center">
        <TypeWritter />
      </div>
      <WhatsAppIcon />
      <Stack />
      <Footer />
    </div>
  );
}

export default Tecnologies;
