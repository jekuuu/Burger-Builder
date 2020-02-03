import React from 'react';
import styles from './Button.css';

const Button = props => (
  <button
    className={[styles.button, styles[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default Button;
