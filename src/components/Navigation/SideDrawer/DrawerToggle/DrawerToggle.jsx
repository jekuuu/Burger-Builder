import React from 'react';
import styles from './DrawerToggle.css';

const DrawerToggle = props => {
  return (
    <div className={styles.drawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
