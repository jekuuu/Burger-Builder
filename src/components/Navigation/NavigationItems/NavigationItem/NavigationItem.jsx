import React from 'react';
import styles from './NavigationItem.css';

const NavigationItem = props => {
  return (
    <li className={styles.navigationItem}>
      <a href={props.link} className={props.active ? styles.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavigationItem;
