import React from 'react';
import styles from '../styles/Home.module.css';
const logo = "/assets/pics/logo.jpg";

const Home: React.FC = () => {
  return (
    <section id="home" className={styles.home}>
      <img src={logo} alt="ElVegano Logo" className={styles.logo} />
      <h1 className={styles.title}>Bienvenido a ElVegano</h1>
      <p className={styles.subtitle}>Comida vegana deliciosa, saludable y sostenible.</p>
    </section>
  );
};

export default Home;


