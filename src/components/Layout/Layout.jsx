import React from 'react';
import styles from './Layout.css';

const Layout = props => {
  return (
    <>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={styles.content}>{props.children}</main>
    </>
  );
};

export default Layout;
