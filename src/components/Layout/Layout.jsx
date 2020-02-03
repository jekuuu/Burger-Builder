import React from 'react';
import styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = props => {
  return (
    <>
      <Toolbar />
      <main className={styles.content}>{props.children}</main>
    </>
  );
};

export default Layout;
