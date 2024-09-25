// Importa React para permitir el uso de JSX en este archivo
import React from "react";

// Importa el enrutador de React Router DOM para gestionar la navegación dentro de la aplicación
import { BrowserRouter as Router } from "react-router-dom";

// Importa los componentes que representan las diferentes páginas/secciones de la aplicación
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

// Importa el componente Weather desde la carpeta services
import Weather from "./services/Weather";

// Importa los estilos globales de la aplicación desde el archivo App.module.css
import styles from "./styles/App.module.css";

// Define el componente principal de la aplicación, que encapsula toda la funcionalidad
function App() {
  return (
    // Envuelve la aplicación con el componente `Router`, que habilita la navegación
    <Router>

      {/* Header: contiene la barra de navegación */}
      {/* Usa estilos modulares para garantizar que los estilos sean encapsulados */}
      <header className={styles.header}>

        {/* Barra de navegación con enlaces a las diferentes secciones de la página */}
        {/* Cada enlace usa el atributo href para hacer scroll a la sección correspondiente en la misma página */}
        <nav className={styles.nav}>
          <a href="#home" className={styles.navLink}>Inicio</a>
          <a href="#about" className={styles.navLink}>Sobre Nosotros</a>
          <a href="#menu" className={styles.navLink}>Menú</a>
          <a href="#contact" className={styles.navLink}>Contacto</a>
        </nav>
      </header>

      {/* Contenido principal */}
      <main>
        {/* Renderiza los componentes de las diferentes secciones */}
        <Home /> {/* Sección de inicio */}
        <Weather /> {/* Sección de clima */}
        <About /> {/* Sección "Sobre Nosotros" */}
        <Menu /> {/* Sección "Menú" */}
        <Contact /> {/* Sección "Contacto" */}
      </main>

      {/* Footer: contiene un enlace para volver al inicio de la página */}
      <footer className={styles.footer}>
        <a href="#home" className={styles.backToTop}>Volver arriba</a>
      </footer>
    </Router>
  );
}

// Exporta el componente App para que pueda ser utilizado en otras partes del proyecto
export default App;






