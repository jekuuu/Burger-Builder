import React from 'react';
import styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link='/' active>
        Burger Builder
      </NavigationItem>
      {props.isAuthenticated ? (
        <NavigationItem link='/orders'>Orders</NavigationItem>
      ) : null}
      {!props.isAuthenticated ? (
        <NavigationItem link='/auth'>Signin</NavigationItem>
      ) : (
        <NavigationItem link='/logout'>Signout</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
