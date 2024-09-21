import React from 'react';
import { MenuItemType } from '../types/MenuItemType';
import styles from '../styles/Menu.module.css';

const MenuItem: React.FC<MenuItemType> = ({ name, description, price, image }) => {
  // Format price for CLP (Chilean Peso)
  const formattedPrice = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(price);

  return (
    <div className={styles.menuItem}>
      <img src={image} alt={name} className={styles.menuImage} />
      <div className={styles.menuDetails}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </div>
  );
};

export default MenuItem;











