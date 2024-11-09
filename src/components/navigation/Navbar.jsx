import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import styles from "../../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>

        {/* Botón de menú solo visible en móviles */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Lista de navegación (responsive) */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 mt-4 md:mt-0 space-y-4 md:space-y-0`}
        >
          <li>
            <NavLink to="/" className={styles.link}>
              Inicio
              <span className={styles.linkUnderline}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobremi" className={styles.link}>
              Sobre mí
              <span className={styles.linkUnderline}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tecnologias" className={styles.link}>
              Tecnologías
              <span className={styles.linkUnderline}></span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={styles.link}>
              Contacto
              <span className={styles.linkUnderline}></span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
