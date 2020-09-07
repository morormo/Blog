import React from 'react';
import TopBar from '../../features/TopBar/TopBar';
import styles from './Header.module.scss';

const Header = () => (
<div className={styles.root}>
  <TopBar />
</div>
);

export default Header;
