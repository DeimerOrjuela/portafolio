import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "../../styles/TypeWriter.module.css";

function TypeWritter() {
  return (
    <h1 className={styles.tittle}>
      <Typewriter
        words={["Mi Stack de Tecnologias"]}
        loop={0} // Número de repeticiones, o `0` para infinito
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={100}
      />
    </h1>
  );
}

export default TypeWritter;
