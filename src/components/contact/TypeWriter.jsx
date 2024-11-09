import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../styles/TypeWriter.module.css";

function TypeWritter() {
  return (
    <h1 className={styles.tittle}>
      <Typewriter
        words={["Contactame"]}
        loop={0} // Número de repeticiones, o `0` para infinito
        cursor
        cursorStyle="|"
        typeSpeed={140}
        deleteSpeed={100}
        delaySpeed={150}
      />
    </h1>
  );
}

export default TypeWritter;
