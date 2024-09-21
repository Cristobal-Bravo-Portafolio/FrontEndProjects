// Importamos React para poder usar JSX, que nos permite estructurar la interfaz de usuario en el formato similar a HTML.
import React from 'react';

// Importamos los estilos definidos en el archivo Home.module.css.
// Esto nos permite usar CSS Modules, asegurando que los estilos sean locales a este componente, evitando conflictos con otros componentes.
import styles from '../styles/Home.module.css';

// Definimos la ruta de la imagen del logo como una constante.
// Esta constante `logo` almacena la ubicación de la imagen que vamos a usar en el componente.
const logo = "/assets/pics/logo.jpg";

// Definimos el componente funcional `Home` utilizando la sintaxis de `React.FC`.
// `React.FC` (Functional Component) se utiliza para definir un componente funcional en React con soporte para TypeScript, 
// proporcionando tipado y autocompletado mejorados.
const Home: React.FC = () => {

  // Retornamos el JSX que renderiza la estructura del componente `Home`. JSX permite escribir una mezcla de JavaScript y HTML.
  // Este JSX será convertido a HTML en el navegador para que el usuario pueda interactuar con él.
  return (
    // La etiqueta `section` define una sección en el documento HTML. 
    // Usamos `id="home"` para permitir que esta sección sea enlazada desde la barra de navegación, proporcionando un desplazamiento suave hacia la sección.
    // `className={styles.home}` aplica los estilos definidos en el archivo Home.module.css, asegurando que el diseño sea único para esta sección.
    <section id="home" className={styles.home}>

      {/* Insertamos el logo de la página usando la etiqueta `img`. La fuente de la imagen se define en la constante `logo`, 
      y el texto alternativo (`alt`) asegura que la imagen sea accesible para usuarios con problemas de visión o cuando la imagen no se puede cargar.
      También le aplicamos una clase de estilo para controlar su apariencia. */}
      <img src={logo} alt="ElVegano Logo" className={styles.logo} />

      {/* `h1` se usa para el título principal de la página. Esto es importante tanto para SEO como para accesibilidad, 
      ya que indica el título más importante de la página. El texto "Bienvenido a ElVegano" es lo que verá el usuario al cargar la página.
      Se le aplica una clase de estilo para personalizar su apariencia. */}
      <h1 className={styles.title}>Bienvenido a ElVegano</h1>

      {/* `p` se usa para el subtítulo o descripción corta. Esta etiqueta es para texto general, y aquí usamos una clase de estilo 
      para formatear el subtítulo "Comida vegana deliciosa, saludable y sostenible". */}
      <p className={styles.subtitle}>Comida vegana deliciosa, saludable y sostenible.</p>

    {/* Cerramos la sección, que agrupa todo el contenido del componente `Home`. */}
    </section>
  );
};

// Exportamos el componente `Home` como el valor por defecto de este archivo.
// Al usar `export default`, podemos importar este componente en otros archivos sin necesidad de usar destructuración. 
// Esto facilita la reutilización de este componente en toda la aplicación.
export default Home;


