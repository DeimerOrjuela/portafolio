import React from "react";
import styles from "../../styles/ContactForm.module.css";

function ContactForm() {
  return (
    <div className={styles.divprincipal}>
      <form action="" className={styles.form}>
        <div className={styles.label}>
          <label className={styles.textlabel} htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre..."
            className={styles.input}
          />
        </div>
        <div className={styles.label}>
          <label className={styles.textlabel} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            className={styles.input}
          />
        </div>
        <div className={styles.label}>
          <label className={styles.textlabel} htmlFor="message">
            Mensaje
          </label>
          <input
            type="text"
            id="message"
            placeholder="Deje su mensaje..."
            className={styles.input}
          />
        </div>
        <div className={styles.label}>
          <label className={styles.textlabel} htmlFor="number">
            Numero Telefonico
          </label>
          <input
            type="number"
            id="telefono"
            placeholder="Deje su numero..."
            className={styles.input}
          />
        </div>
        <div className="pt-6">
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
