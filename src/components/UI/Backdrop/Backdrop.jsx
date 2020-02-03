import React from 'react';
import styles from './Backdrop.css';

const Backdrop = props =>
  props.show ? (
    <div className={styles.backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
