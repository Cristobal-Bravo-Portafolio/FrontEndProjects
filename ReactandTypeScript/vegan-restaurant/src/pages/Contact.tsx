import React from "react";
import styles from "../styles/Contact.module.css"; // Import CSS module

// Página de contacto
const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.info}>Dirección: Calle Falsa 123, Ciudad Vegana</p>
      <p className={styles.info}>Teléfono: (555) 123-4567</p>
      <p className={styles.info}>Email: contacto@elvegano.com</p>
    </section>
  );
};

export default Contact;

