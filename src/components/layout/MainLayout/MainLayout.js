import React from 'react';
import Header from '../Header/Header';
import Products from '../../features/Products/Products';
import styles from './MainLayout.module.scss';
import Footer from '../../features/Footer/Footer';

const MainLayout = () => (
  <div className={styles.root}>
    <Header />
    <Products />
    <Footer />
  </div>
);

export default MainLayout;
