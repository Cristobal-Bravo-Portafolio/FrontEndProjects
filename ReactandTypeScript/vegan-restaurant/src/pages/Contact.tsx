// Importamos React para utilizar las funcionalidades de JSX y React.
// Aunque desde React 17 ya no es obligatorio, seguimos importando React por buenas prácticas y compatibilidad.
import React from 'react';

// Importamos los estilos del archivo CSS específico para este componente Contact.
// El uso de CSS Modules asegura que los estilos aplicados sean únicos para este componente, 
// evitando colisiones de clases en otros componentes.
import styles from '../styles/Contact.module.css';

// Definimos el componente funcional Contact utilizando React.FC (Functional Component).
// React.FC agrega tipado en TypeScript, lo que mejora el autocompletado y el manejo de errores.
const Contact: React.FC = () => {

  // En el return, estamos devolviendo JSX, que describe cómo se debe renderizar este componente en la UI.
  // Este componente representará la sección de contacto en la página principal.
  return (
    // Usamos la etiqueta <section> para semánticamente indicar que este bloque es una sección de la página.
    // Le damos un `id="contact"` para que pueda ser enlazado desde la barra de navegación.
    // El `className={styles.contact}` aplica los estilos definidos en el archivo Contact.module.css de forma única a esta sección.
    <section id="contact" className={styles.contact}>

      {/* Usamos un encabezado h2 para el título de la sección, "Contáctanos". 
          Esto ayuda tanto a la semántica como a la accesibilidad, ya que h2 es una etiqueta estándar para subtítulos. */}
      <h2>Contáctanos</h2>

      {/* Dentro del párrafo <p>, listamos los detalles de contacto: dirección, teléfono y correo electrónico.
          Utilizamos `<br />` para crear saltos de línea, asegurando que cada información esté en su propia línea.
          Esto mejora la legibilidad de la información de contacto. */}
      <p>
        Dirección: Calle 123, Santiago, Chile<br />
        Teléfono: +56 9 8765 4321<br />
        Correo: contacto@elvegano.cl
      </p>
    </section>
  );
};

// Exportamos el componente Contact para que pueda ser utilizado en otros archivos del proyecto, como App.tsx.
// La exportación por defecto facilita su importación directa en otros módulos sin destructurarlo.
export default Contact;



