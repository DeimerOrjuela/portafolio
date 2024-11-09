import React from "react";
import whatsapp from "../../assets/img/whatsapp.png";
import styles from "../../styles/ContactWhatsapp.module.css";

const WhatsAppIcon = () => {
  return (
    <div className={styles.divprincipal}>
      <a
        href="https://wa.me/3017079111?text=Hola%me%gustaria%contactarte..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" className="w-84 h-24" />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
