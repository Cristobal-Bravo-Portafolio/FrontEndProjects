// Importamos React y los hooks `useState` y `useEffect`.
// `useState` se usa para manejar el estado dentro del componente y `useEffect` para manejar los efectos secundarios.
import React, { useState, useEffect } from 'react';

// Importamos `MenuItem`, un componente que representa cada elemento individual del menú.
import MenuItem from '../components/MenuItem';

// Importamos los datos de los platillos desde un archivo JSON local.
// Esto simula obtener los datos del menú desde una API o base de datos.
import menuData from '../data/menuData.json';

// Importamos el tipo `MenuItemType` para definir la estructura de los objetos de menú y asegurar el tipado con TypeScript.
import { MenuItemType } from '../types/MenuItemType';

// Importamos los estilos modulares desde el archivo CSS específico para la página del menú.
// Esto permite aplicar estilos encapsulados sin colisiones con otros componentes.
import styles from '../styles/Menu.module.css';

// Definimos el componente `Menu` como un componente funcional utilizando `React.FC` para tipado con TypeScript.
const Menu: React.FC = () => {

  // **Estado**: `filteredData` contiene los datos filtrados del menú que se mostrarán en la interfaz.
  // `setFilteredData` es la función que actualiza este estado.
  const [filteredData, setFilteredData] = useState<MenuItemType[]>([]);

  // **Estado**: `selectedCategory` rastrea la categoría seleccionada por el usuario (ej., "Postres", "Platillos principales").
  // Inicia con el valor "Todos" para mostrar todos los elementos del menú por defecto.
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // **Efecto**: `useEffect` se ejecuta cada vez que cambia el valor de `selectedCategory`.
  // Filtra los datos del menú según la categoría seleccionada.
  useEffect(() => {
    // Si la categoría seleccionada es "Todos", mostramos todos los elementos del menú.
    if (selectedCategory === 'Todos') {
      setFilteredData(menuData); // Se actualiza el estado con todos los datos del menú.
    } else {
      // Si no, se filtran los elementos del menú por categoría (propiedad `category` en cada platillo).
      setFilteredData(menuData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]); // `selectedCategory` es la dependencia del efecto; cuando cambia, se ejecuta este bloque.

  // **Función manejadora**: `handleFilterChange` es la función que se ejecuta cuando el usuario selecciona una categoría.
  // Actualiza el estado de `selectedCategory` con la categoría seleccionada por el usuario.
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category); // Actualiza el estado con la nueva categoría seleccionada.
  };

  return (
    <section id="menu">
      {/* Renderiza el título de la sección del menú */}
      <div className={styles.menuTitleWrapper}>
        <h2 className={styles.menuTitle}>Nuestro Menú</h2>
      </div>

      {/* Botones de filtro: permiten al usuario seleccionar una categoría de los platillos */}
      <div className={styles.filters}>
        {/* Cada botón de filtro llama a `handleFilterChange` con una categoría específica */}
        <button onClick={() => handleFilterChange('Todos')}>Todos</button>
        <button onClick={() => handleFilterChange('Platillos principales')}>Platillos principales</button>
        <button onClick={() => handleFilterChange('Postres')}>Postres</button>
        <button onClick={() => handleFilterChange('Bebestibles')}>Bebestibles</button>
      </div>

      {/* Renderizado de los elementos filtrados del menú */}
      <div>
        {/* Mapea sobre `filteredData` (el estado que contiene los elementos filtrados) */}
        {filteredData.map(item => (
          // Para cada elemento, renderiza un `MenuItem`, pasando las propiedades relevantes.
          <MenuItem
            key={item.id} // `key` único es necesario para que React gestione eficientemente la lista de elementos.
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

// Exportamos el componente `Menu` para que pueda ser utilizado en otras partes de la aplicación.
export default Menu;










  