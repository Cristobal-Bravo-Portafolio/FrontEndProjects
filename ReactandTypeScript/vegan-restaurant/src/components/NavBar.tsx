// Importamos React ya que es necesario para cualquier componente funcional de React.
import React from 'react';

// Importamos los estilos CSS específicos de este componente desde el archivo CSS Module.
// La extensión `.module.css` asegura que los estilos sean únicos para este componente,
// previniendo conflictos de nombres de clases entre otros archivos CSS.
import styles from '../styles/Navbar.module.css';

// Definimos el componente NavBar utilizando una función de tipo React.FC (Functional Component).
// Esto nos permite crear componentes basados en funciones con soporte para props en TypeScript.
const NavBar: React.FC = () => {

  // Retornamos el JSX que define la estructura del DOM que será renderizado.
  return (
    // El contenedor principal del navbar, el cual tiene una clase CSS asociada 
    // con el estilo 'navbar' importado desde el archivo CSS Module.
    <nav className={styles.navbar}>

      {/* Div que contiene el logo o nombre de la aplicación. 
          Utilizamos un enlace (anchor tag) que redirige a la sección "home" mediante un anchor link (#home).
          Esto permite la navegación dentro de la misma página, asumiendo que existen secciones con esos IDs. */}
      <div className={styles.logo}>
        <a href="#home">ElVegano</a> {/* El enlace lleva al usuario a la sección "home". */}
      </div>

      {/* Creamos una lista desordenada (<ul>) que contiene los enlaces de navegación. */}
      <ul className={styles.navLinks}>

        {/* Cada <li> es un elemento de la lista que contiene un enlace (<a>) a diferentes secciones
            de la página. Utilizamos anchor links (#about, #menu, #contact) para navegar entre
            diferentes secciones de la misma página. */}
        <li><a href="#home">Home</a></li>      {/* Navega a la sección Home */}
        <li><a href="#about">About</a></li>    {/* Navega a la sección About */}
        <li><a href="#menu">Menu</a></li>      {/* Navega a la sección Menu */}
        <li><a href="#contact">Contact</a></li> {/* Navega a la sección Contact */}
      </ul>

    </nav> // Fin del navbar
  );
};

// Exportamos el componente NavBar para que pueda ser utilizado en otros archivos del proyecto.
// Esto es esencial para que otros componentes o la aplicación principal puedan importarlo y renderizarlo.
export default NavBar;
