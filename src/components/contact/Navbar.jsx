import React from "react";
import logo from "../../assets/img/logo.png";
import styles from "../../styles/Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={styles.link}>
              Inicio
              <span className={styles.linkUnderline}></span> {/* Subrayado */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobremi" className={styles.link}>
              Sobre mi
              <span className={styles.linkUnderline}></span> {/* Subrayado */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/tecnologias" className={styles.link}>
              Tecnologías
              <span className={styles.linkUnderline}></span> {/* Subrayado */}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={styles.link}>
              Contacto
              <span className={styles.linkUnderline}></span> {/* Subrayado */}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
