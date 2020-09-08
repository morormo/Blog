import React from 'react';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
  <div className='container'>
  <div className={`row ${styles.sidebar}`}>
    <div className='col'>
      <div className='row'>
        <div className={`col-12`}>
          <input type='text'></input>
        </div>
      </div>
      <div className='row'>
        <div className={`col ${styles.about}`}>
          <h3>O mnie</h3>
          <img src="/images/avatar.png" className='avatar'></img>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra imperdiet velit sit amet rutrum. Duis enim velit, tristique quis rutrum nec, rhoncus ac metus. Pellentesque ullamcorper dui ut quam bibendum, id congue tortor interdum. <a href="#">Czytaj o mnie więcej →</a></p>
        </div>
      </div>
      <div className='row'>
        <div className={`col ${styles.categories}`}>
          <h3>Kategorie</h3>
          <ul>
            <li>
              Aktualności <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </li>
            <li>
              Biznes <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </li>
            <li>
              Programowanie <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </li>
            <li>
              SEO <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </li>
            <li>
              WordPress <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
            </li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className={`col ${styles.social}`}>
          <h3>Social media</h3>
          <div className='row'>
            <a href="https://www.facebook.com/" alt="facebook">
              <div className={`col-3 ${styles.icon}`}>
                <FontAwesomeIcon icon={faFacebook}/>
              </div>
            </a>
            <a href="https://www.instagram.com/" alt="instagram">
              <div className={`col-3 ${styles.icon}`}>
                <FontAwesomeIcon icon={faInstagram}/>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/daniel-stoklosa" alt="linkedin">
              <div className={`col-3 ${styles.icon}`}>
                <FontAwesomeIcon icon={faLinkedin}/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
);

export default Sidebar;
