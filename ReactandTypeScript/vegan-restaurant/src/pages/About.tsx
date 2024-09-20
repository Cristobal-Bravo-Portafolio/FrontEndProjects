import React from "react";
import styles from "../styles/About.module.css"; // Import CSS module

// Página de "Sobre nosotros"
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>Sobre Nosotros</h2>
      <p className={styles.description}>
        En El Vegano, nos apasiona ofrecer comidas que no solo son deliciosas, sino también buenas para tu salud y el planeta. 
        Nuestros platillos son preparados con ingredientes 100% orgánicos y libres de crueldad.
      </p>
    </section>
  );
};

export default About;

  
  