import React from 'react';
import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
      <NavigationItem link='/orders'>Orders</NavigationItem>
      <NavigationItem link='/auth'>Login</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
