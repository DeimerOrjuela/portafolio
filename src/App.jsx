import React from "react";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import HeroSection from "./components/home/HeroSection";
import TypeWritter from "./components/home/TypeWriter";
import WhatsAppIcon from "./components/home/ContactWatsapp";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
