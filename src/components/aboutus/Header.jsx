import React from "react";
import styles from "../../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.contenedorprincipal}>
      <div>
        <h2 className={styles.h2}>Quien soy?</h2>
      </div>
      <div>
        <p className={styles.parrafo}>
          Soy ingeniero de sistemas, comprometido y apasionado por la tecnología
          y el desarrollo de soluciones óptimas para enfrentar desafíos de alta
          complejidad. <br />
          Orientado a obtener resultados efectivos y eficientes, con bases
          fuertes en desarrollo de software, tanto en el frontend como en el
          backend. <br />
        </p>
      </div>
      <div>
        <h2 className={styles.h2}>Formacion Academica</h2>
      </div>
      <div>
        <p className={styles.parrafo}>
          Técnico en Análisis y Diseño de Bases de Datos, egresado de la
          Fundación Universitaria Unicompensar. <br />
          Ingeniero de Sistemas otorgado por la Institución Universitaria de
          Colombia.
        </p>
      </div>
      <div>
        <h2 className={styles.h2}>Otros Estudios</h2>
      </div>
      <div>
        <p className={styles.parrafo}>
          Cuento con una certificación en inglés básico, lo que me permite tener
          comprensión del idioma en entornos profesionales. cuento con
          certificacion en metodologías ágiles, incluyendo Scrum Foundation, lo
          cual me brinda herramientas para gestionar proyectos de manera
          eficiente y colaborativa. También tengo conocimientos sólidos en
          GitHub, lo que me permite trabajar en equipo y gestionar el control de
          versiones en proyectos de desarrollo.
        </p>
      </div>
      <div>
        <h2 className={styles.h2}>Tecnologias</h2>
      </div>
      <div>
        <p className={styles.parrafo}>
          Tengo conocimientos en lenguajes de backend como lo son Java, Python y
          su framework para web Django, tecnologias para el front como lo son
          HTML, CSS, JavaScript y su libreria React JS. tengo solidos
          conocimientos en SGBD relacionales como MySQL, PostgreSQL, SQL Server,
          entre otros que comparten sintaxis SQL
        </p>
      </div>
    </div>
  );
}

export default Header;
