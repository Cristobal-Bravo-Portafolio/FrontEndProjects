// Importamos React para utilizar JSX y funcionalidades de React.
// Aunque desde React 17 no es estrictamente necesario, es buena práctica para mantener compatibilidad.
import React from 'react';

// Importamos los estilos específicos de este componente desde el archivo About.module.css.
// Esto asegura que los estilos sean únicos para este componente, evitando conflictos de clases.
import styles from '../styles/About.module.css';

// Definimos el componente funcional About utilizando React.FC (Functional Component).
// React.FC también agrega tipado en TypeScript, lo que nos permite tener mejores advertencias y autocompletado.
const About: React.FC = () => {

  // Retornamos el JSX, que define el contenido visual de este componente.
  // Este JSX describe cómo será renderizada la sección "Sobre Nosotros" en la página.
  return (
    // La sección principal de "Sobre Nosotros". 
    // El atributo `id="about"` se usa para el enlace de navegación (en el navbar), 
    // permitiendo a los usuarios desplazarse a esta sección al hacer clic en "About".
    <section id="about" className={styles.about}>

      {/* Título de la sección. H2 es usado por convenciones semánticas de HTML para definir subsecciones importantes. */}
      <h2>Sobre Nosotros</h2>

      {/* Párrafo que contiene la información descriptiva de la sección "Sobre Nosotros".
          Aquí explicamos los valores y objetivos del restaurante vegano, alineados con la misión del proyecto */}
      <p>
        En ElVegano, creemos en la importancia de la comida sostenible. Todos nuestros platos
        son 100% veganos y preparados con los ingredientes más frescos y saludables. Nuestro
        objetivo es proporcionar una experiencia culinaria deliciosa, sin comprometer el
        bienestar del planeta.
      </p>
    </section>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes del proyecto, 
// como en el archivo principal que renderiza la página o en el App.tsx.
export default About;


  
  