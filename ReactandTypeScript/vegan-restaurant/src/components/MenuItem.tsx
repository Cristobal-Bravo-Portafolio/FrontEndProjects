import React from 'react';
import { MenuItemType } from '../types/MenuItemType';
import styles from '../styles/Menu.module.css';

const MenuItem: React.FC<MenuItemType> = ({ name, description, price, image }) => {
  return (
    <div className={styles.menuItem}>
      {/* Directly use the image path */}
      <img src={image} alt={name} className={styles.menuImage} />
      <div className={styles.menuDetails}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default MenuItem;










