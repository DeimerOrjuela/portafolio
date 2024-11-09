import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/pages/Home";
import SobreMi from "./containers/pages/SobreMi";
import Contact from "./containers/pages/Contact";
import Tecnologies from "./containers/pages/Tecnologies";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobremi" element={<SobreMi />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/tecnologias" element={<Tecnologies />} />
    </Routes>
  );
}

export default AppRoutes;
