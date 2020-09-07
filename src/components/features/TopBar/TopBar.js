import React from 'react';
import styles from './TopBar.module.scss';
import { Link } from 'react-router-dom';

const TopBar = () => (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href='#'>O mnie</a>
        </li>
        <li>
          <a href='#'>Kontakt</a>
        </li>
      </ul>
    </nav>
);

export default TopBar;
