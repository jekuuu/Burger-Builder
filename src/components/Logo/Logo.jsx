import React from 'react';
import styles from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={burgerLogo} alt='MyBurger' />
    </div>
  );
};

export default Logo;
