import React, { memo } from 'react';

import styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-180vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show ||
    nextProps.children === prevProps.children
);
