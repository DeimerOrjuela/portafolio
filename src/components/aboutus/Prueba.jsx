// Navbar.jsx
import React from "react";

function Prueba() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-semibold">
          MyWebsite
        </a>

        {/* Menú principal */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Menú hamburguesa para dispositivos pequeños */}
        <button className="block md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Prueba;
