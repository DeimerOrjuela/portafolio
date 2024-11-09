import React from "react";
import css from "../../assets/icons/css.svg";
import html from "../../assets/icons/html.svg";
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import java from "../../assets/icons/java.svg";
import django from "../../assets/icons/django.svg";
import python from "../../assets/icons/python.svg";
import postgresql from "../../assets/icons/postgresql.svg";
import mysql from "../../assets/icons/mysql.svg";
import github from "../../assets/icons/github.svg";
import styles from "../../styles/Stack.module.css";

function Stack() {
  return (
    <div className={styles.divprincipal}>
      <div className={styles.divsecundario}>
        <div className={styles.separador}>
          <p className={styles.parrafo}>Backend</p>
          <div className={styles.divicon}>
            <img src={python} alt="Python" className={styles.img} />
            <img src={django} alt="Django" className={styles.img} />
            <img src={java} alt="Java" className={styles.img} />
          </div>
        </div>

        {/* Sección Frontend */}
        <div className={styles.separador}>
          <p className={styles.parrafo}>Frontend</p>
          <div className={styles.divicon}>
            <img src={css} alt="CSS" className={styles.img} />
            <img src={html} alt="HTML" className={styles.img} />
            <img src={javascript} alt="JavaScript" className={styles.img} />
            <img src={react} alt="React" className={styles.img} />
          </div>
        </div>

        {/* Sección SGBD */}
        <div className={styles.separador}>
          <p className={styles.parrafo}>SGBD</p>
          <div className={styles.divicon}>
            <img src={postgresql} alt="PostgreSQL" className={styles.img} />
            <img src={mysql} alt="MySQL" className={styles.img} />
          </div>
        </div>

        {/* Sección Otros Conocimientos */}
        <div className={styles.separador}>
          <p className={styles.parrafo}>Otros Conocimientos</p>
          <div className={styles.divicon}>
            <img src={github} alt="GitHub" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
