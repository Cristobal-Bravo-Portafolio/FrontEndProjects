import React from 'react'; 
// Importa la biblioteca principal de React para poder utilizar componentes de React en este archivo.
// Al utilizar React.FC (Functional Component), se define un componente funcional en TypeScript.

import { MenuItemType } from '../types/MenuItemType';
// Importa el tipo `MenuItemType` desde el archivo de tipos. Este tipo define la estructura de los props
// que el componente `MenuItem` recibirá, lo que garantiza que se cumplan las expectativas de tipos en TypeScript.

import styles from '../styles/Menu.module.css';
// Importa los estilos específicos del componente desde un archivo CSS modularizado. 
// CSS Modules se usa para encapsular estilos y evitar conflictos de nombres, aplicando los estilos únicamente a este componente.

const MenuItem: React.FC<MenuItemType> = ({ name, description, price, image }) => {
// Define el componente funcional `MenuItem` utilizando TypeScript. 
// Aquí se especifica que `MenuItem` recibe props con la estructura `MenuItemType`, lo que asegura que los props 
// sean del tipo esperado (name, description, price e image).

  // Formatea el precio en pesos chilenos (CLP)
  const formattedPrice = new Intl.NumberFormat('es-CL', { 
    style: 'currency', 
    currency: 'CLP', 
    minimumFractionDigits: 0 
  }).format(price);
  // `Intl.NumberFormat` es una API de JavaScript que permite formatear números según una región específica.
  // Aquí se utiliza para formatear el precio en pesos chilenos (`es-CL`), sin decimales (`minimumFractionDigits: 0`).
  // Esto facilita que los precios se muestren correctamente según la moneda local.

  return (
    // Renderiza el contenido del componente `MenuItem`. 
    // Utiliza la clase CSS importada desde `Menu.module.css` para estilizar los elementos del menú.
    <div className={styles.menuItem}>
      {/* Renderiza la imagen del producto del menú */}
      <img src={image} alt={name} className={styles.menuImage} />
      {/* src es la fuente de la imagen, que se pasa como prop `image`.
          alt es el texto alternativo que describe la imagen en caso de que no se pueda cargar.
          className usa una clase CSS encapsulada (CSS Modules) para aplicar los estilos a la imagen. */}

      {/* Renderiza los detalles del producto (nombre, descripción y precio) */}
      <div className={styles.menuDetails}>
        {/* El nombre del platillo se renderiza en una etiqueta h3 */}
        <h3>{name}</h3>
        {/* La descripción del platillo se renderiza en un párrafo */}
        <p>{description}</p>
        {/* El precio del platillo se renderiza con el formato adecuado */}
        <p className={styles.price}>{formattedPrice}</p>
        {/* La clase CSS `price` estiliza el precio, y `formattedPrice` muestra el valor ya formateado en pesos chilenos */}
      </div>
    </div>
    // En resumen, el componente muestra una imagen a la izquierda y los detalles del platillo a la derecha (nombre, descripción, precio).
  );
};

export default MenuItem;
// Exporta el componente `MenuItem` para que pueda ser utilizado en otros archivos del proyecto.
// En este caso, probablemente sea usado en la página que renderiza el menú completo.












