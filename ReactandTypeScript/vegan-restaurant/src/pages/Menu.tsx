// Importamos React y algunos hooks (`useState` y `useEffect`) que nos permitirán manejar el estado y realizar efectos secundarios.
import React, { useState, useEffect } from 'react';

// Importamos el componente `MenuItem` que será utilizado para renderizar cada elemento del menú.
// Este componente se asume que está definido en la carpeta `components`.
import MenuItem from '../components/MenuItem';

// Importamos los datos del menú desde un archivo JSON. Este archivo contiene los datos estructurados de cada platillo.
import menuData from '../data/menuData.json';

// Importamos el tipo `MenuItemType` que define la estructura de los objetos de menú.
// Este tipo ayuda a TypeScript a asegurar que todos los datos del menú sigan una estructura consistente.
import { MenuItemType } from '../types/MenuItemType';

// Importamos los estilos definidos en el archivo CSS modularizado, `Menu.module.css`.
// Al usar CSS Modules, los estilos están limitados a este componente, evitando conflictos con otros estilos.
import styles from '../styles/Menu.module.css';

// Definimos el componente funcional `Menu` utilizando `React.FC`, lo que facilita el tipado con TypeScript.
// `React.FC` permite definir un componente funcional y manejar correctamente los props si fuese necesario.
const Menu: React.FC = () => {

  // Definimos un estado para almacenar los datos filtrados que se mostrarán en la página.
  // Inicialmente, será un array vacío y luego se actualizará con los datos filtrados del menú.
  const [filteredData, setFilteredData] = useState<MenuItemType[]>([]);

  // Definimos un segundo estado para rastrear la categoría seleccionada por el usuario.
  // Inicialmente, la categoría es 'Todos', lo que significa que se mostrarán todos los elementos del menú.
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // `useEffect` se utiliza para aplicar un filtro cada vez que la categoría seleccionada cambie.
  // Cuando `selectedCategory` cambie, esta función se ejecuta automáticamente para actualizar el estado `filteredData`.
  useEffect(() => {
    if (selectedCategory === 'Todos') {
      // Si la categoría es 'Todos', mostramos todos los elementos del menú sin filtrar.
      setFilteredData(menuData);
    } else {
      // Si se selecciona una categoría específica, filtramos los elementos del menú que pertenezcan a esa categoría.
      setFilteredData(menuData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]); // El `useEffect` se ejecuta cada vez que `selectedCategory` cambia.

  // Definimos una función manejadora para cambiar la categoría seleccionada.
  // Esta función es llamada cuando el usuario hace clic en uno de los botones de filtro.
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category); // Actualizamos el estado `selectedCategory` con la categoría seleccionada.
  };

  // El componente devuelve JSX que define la estructura y el contenido visual del menú.
  return (
    // El componente principal está envuelto en una etiqueta `<section>`, lo que ayuda a agrupar visual y semánticamente el contenido.
    // El `id="menu"` se utiliza para que otras partes del sitio, como la barra de navegación, puedan enlazar a esta sección.
    <section id="menu">
      {/* Div que contiene el título del menú */}
      <div className={styles.menuTitleWrapper}>
        {/* Renderizamos el título del menú con un estilo personalizado */}
        <h2 className={styles.menuTitle}>Nuestro Menú</h2>
      </div>
      
      {/* Sección de botones de filtro */}
      <div className={styles.filters}>
        {/* Botones que permiten filtrar el menú por categoría */}
        <button onClick={() => handleFilterChange('Todos')}>Todos</button>
        <button onClick={() => handleFilterChange('Platillos principales')}>Platillos principales</button>
        <button onClick={() => handleFilterChange('Postres')}>Postres</button>
        <button onClick={() => handleFilterChange('Bebestibles')}>Bebestibles</button>
      </div>
      
      {/* Div donde se renderizan los elementos del menú filtrados */}
      <div>
        {/* Iteramos sobre `filteredData` y para cada elemento del menú creamos un componente `MenuItem` */}
        {filteredData.map(item => (
          <MenuItem
            key={item.id}           // Cada elemento necesita una clave única; en este caso, usamos `item.id`.
            id={item.id}            // Pasamos el ID del elemento al componente `MenuItem`.
            name={item.name}        // Pasamos el nombre del platillo.
            description={item.description}  // Pasamos la descripción del platillo.
            price={item.price}      // Pasamos el precio del platillo.
            image={item.image}      // Pasamos la imagen del platillo.
            category={item.category} // Pasamos la categoría a la que pertenece el platillo.
          />
        ))}
      </div>
    </section>
  );
};

// Exportamos el componente `Menu` para que pueda ser importado y usado en otras partes del proyecto, como en el archivo principal de la aplicación (App.tsx).
export default Menu;







  