import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className={styles.root}>
    <div className={`row ${styles.footer}`}>
      <div className='col-8'>
        &copy; Daniel Stokłosa | Blog
      </div>
      <div className={`col-4 ${styles.society}`}>
        <ul>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
