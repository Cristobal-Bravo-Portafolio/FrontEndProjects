import React from "react";
import styles from "../styles/Home.module.css"; // Import CSS module

// Página de inicio con el nombre del restaurante
const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <h1 className={styles.title}>Bienvenidos a El Vegano</h1>
      <p className={styles.description}>¡El mejor lugar para disfrutar de la comida vegana más deliciosa y saludable!</p>
    </section>
  );
};

export default Home;

