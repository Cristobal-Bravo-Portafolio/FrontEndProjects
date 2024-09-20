import React, { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem'; // Assuming you have a MenuItem component
import menuData from '../data/menuData.json'; // JSON file with your menu data
import { MenuItemType } from '../types/MenuItemType'; // Assuming you have this type defined
import styles from '../styles/Menu.module.css'; // The updated CSS module

const Menu: React.FC = () => {
  const [filteredData, setFilteredData] = useState<MenuItemType[]>([]); // Manage filtered data
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos'); // Track the selected filter

  // Set the filtered data based on the selected category
  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredData(menuData); // Show all items if 'Todos' is selected
    } else {
      setFilteredData(menuData.filter(item => item.category === selectedCategory)); // Filter based on category
    }
  }, [selectedCategory]);

  // Filter handler
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="menu">
      <h2>Nuestro Menú</h2>

      {/* Filter buttons */}
      <div className={styles.filters}>
        <button onClick={() => handleFilterChange('Todos')}>Todos</button>
        <button onClick={() => handleFilterChange('Platillos principales')}>Platillos principales</button>
        <button onClick={() => handleFilterChange('Postres')}>Postres</button>
        <button onClick={() => handleFilterChange('Bebestibles')}>Bebestibles</button>
      </div>

      {/* Render menu items */}
      <div>
        {filteredData.map(item => (
          <MenuItem
            key={item.id} // Use item.id for the unique key
            id={item.id} // Passing id to the MenuItem
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            category={item.category} // Passing category to the MenuItem
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;






  