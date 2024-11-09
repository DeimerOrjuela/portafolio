import React from "react";
import styles from "../../styles/Footer.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaStackOverflow,
  FaBitbucket,
} from "react-icons/fa"; // Importa los íconos

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.primerdiv}>
        {/* Sección superior del footer */}
        <div>
          {/* Redes Sociales */}
          <div className={styles.divsotials}>
            <div className={styles.divsotials}>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stackoverflow"
              >
                <FaStackOverflow className={styles.iconssotials} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FaGithub className={styles.iconssotials} />
              </a>
              <a
                href="https://bitbucket.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bitbucket"
              >
                <FaBitbucket className={styles.iconssotials} />
              </a>
              <a
                href="https://Linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
              >
                <FaLinkedin className={styles.iconssotials} />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <FaWhatsapp className={styles.iconssotials} />
              </a>
            </div>
          </div>
        </div>

        {/* Ubicación Sevilla */}

        {/* Línea divisoria */}
        <div className={styles.linetop}></div>

        {/* Sección inferior con derechos reservados y enlaces legales */}
        <div className={styles.textfooter}>
          <p>© DeimerOrjuela - Todos los derechos reservados 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
