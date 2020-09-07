import React from 'react';
import Header from '../Header/Header';
import styles from './MainLayout.module.scss';
import Footer from '../../features/Footer/Footer';

const MainLayout = ({ children }) => (
  <div className={styles.root}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
