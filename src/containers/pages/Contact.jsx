import React from "react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/navigation/Footer";
import WhatsAppIcon from "../../components/home/ContactWatsapp";
import ContactForm from "../../components/contact/ContactForm";
import TypeWritter from "../../components/contact/TypeWriter";

function Contact() {
  return (
    <div className="bg-olive-green">
      <Navbar />
      <div className="text-center">
        <TypeWritter />
      </div>
      <WhatsAppIcon />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
