import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contáctanos</h2>
      <p>
        Dirección: Calle 123, Santiago, Chile<br />
        Teléfono: +56 9 8765 4321<br />
        Correo: contacto@elvegano.cl
      </p>
    </section>
  );
};

export default Contact;


