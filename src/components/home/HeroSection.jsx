import React from "react";
import styles from "../../styles/HeroSection.module.css";
import DeimerOrjuela from "../../assets/img/DeimerOrjuela.png";
import CV from "../../assets/documents/CV.pdf";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.divcontent}>
        <img src={DeimerOrjuela} className={styles.imagen} />
        <div>
          <h3 className={styles.texto}>Hola, mi nombre es Deimer Orjuela</h3>
          <p className={styles.paragph}>
            Ingeniero de sistemas con pasión por el desarrollo web y la creación
            de soluciones innovadoras, con conocimientos en Backend usando
            lenguajes como Java y Python y frontend bajo tecnologias como
            JavaScript, React, HTML, CSS y Tailwind CSS.
          </p>
          <a href={CV} download>
            <button className={styles.button}>Descargar CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
