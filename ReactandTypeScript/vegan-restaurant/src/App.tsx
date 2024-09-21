// Importa React para poder usar JSX en este archivo
import React from "react";

// Importa el enrutador de React Router DOM, renombrándolo como "Router"
// Esto es necesario para que la aplicación tenga capacidad de navegación
import { BrowserRouter as Router } from "react-router-dom";

// Importa los componentes que representan las diferentes páginas/secciones de la aplicación
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

// Importa los estilos globales de la aplicación desde el archivo App.module.css
import styles from "./styles/App.module.css"; // Importa estilos globales para la aplicación

// Define el componente principal de la aplicación
function App() {
  return (
    // El componente Router de React Router se usa para envolver la aplicación
    // Esto proporciona la funcionalidad de navegación en la aplicación
    <Router>

      {/* Header: Contiene la barra de navegación */}
      {/* Usa los estilos de CSS modules, garantizando que sean encapsulados */}
      <header className={styles.header}>

        {/* Barra de navegación que contiene los enlaces para las secciones de la página */}
        {/* Los enlaces son de tipo ancla (href="#"), lo que significa que no redirigen a otra página */}
        {/* Solo hacen scroll a la sección correspondiente dentro de la misma página */}
        <nav className={styles.nav}>
          {/* Enlace que lleva a la sección "Inicio" */}
          <a href="#home" className={styles.navLink}>Inicio</a>

          {/* Enlace que lleva a la sección "Sobre Nosotros" */}
          <a href="#about" className={styles.navLink}>Sobre Nosotros</a>

          {/* Enlace que lleva a la sección "Menú" */}
          <a href="#menu" className={styles.navLink}>Menú</a>

          {/* Enlace que lleva a la sección "Contacto" */}
          <a href="#contact" className={styles.navLink}>Contacto</a>
        </nav>
      </header>

      {/* El contenido principal de la aplicación */}
      {/* Aquí se renderizan los componentes de las diferentes secciones de la página */}
      <main>
        {/* Renderiza el componente Home (sección de inicio) */}
        <Home />

        {/* Renderiza el componente About (sección sobre nosotros) */}
        <About />

        {/* Renderiza el componente Menu (sección del menú del restaurante) */}
        <Menu />

        {/* Renderiza el componente Contact (sección de contacto) */}
        <Contact />
      </main>

      {/* Footer: Contiene el enlace para volver al inicio de la página */}
      <footer className={styles.footer}>
        {/* Enlace que lleva de vuelta a la sección "Inicio" */}
        <a href="#home" className={styles.backToTop}>Volver arriba</a>
      </footer>
    </Router>
  );
}

// Exporta el componente App para que pueda ser utilizado en otras partes del proyecto
export default App;



