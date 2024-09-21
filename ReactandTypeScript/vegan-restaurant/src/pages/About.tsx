import React from 'react';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>Sobre Nosotros</h2>
      <p>
        En ElVegano, creemos en la importancia de la comida sostenible. Todos nuestros platos
        son 100% veganos y preparados con los ingredientes más frescos y saludables. Nuestro
        objetivo es proporcionar una experiencia culinaria deliciosa, sin comprometer el
        bienestar del planeta.
      </p>
    </section>
  );
};

export default About;

  
  