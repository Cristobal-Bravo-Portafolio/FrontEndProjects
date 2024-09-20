import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import styles from "./styles/App.module.css"; // Import CSS for app-wide styles

// Página principal con navegación en la parte superior y enlaces a las secciones
function App() {
  return (
    <Router>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Inicio</a>
          <a href="#about" className={styles.navLink}>Sobre Nosotros</a>
          <a href="#menu" className={styles.navLink}>Menú</a>
          <a href="#contact" className={styles.navLink}>Contacto</a>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Menu />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <a href="#home" className={styles.backToTop}>Volver arriba</a>
      </footer>
    </Router>
  );
}

export default App;


