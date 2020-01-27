import React from 'react';
import styles from './BurgerIngredient.css';

const BurgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case 'bread=top':
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.seeds1}></div>
          <div className={styles.seeds2}></div>
        </div>
      );
      break;
    case 'meat':
      ingredient = <div className={styles.meat}></div>;
      break;
    case 'cheese':
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case 'bacon':
      ingredient = <div className={styles.Bacon}></div>;
      break;
    case 'salad':
      ingredient = <div className={styles.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

export default BurgerIngredient;
