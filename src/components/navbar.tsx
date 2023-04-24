import React from 'react';
import Image from 'next/image';

import styles from '../styles/Navbar.module.scss';
import ambientLogo from '../assets/img/ambient-focus.png';

function Navbar() {
  return (
    <div className={styles.navbar__container}>
      <div className={styles.navbar__logo}>
        <a href="/">
            <Image 
                src={ambientLogo} 
                alt='ambient focus brand'
                height={40}>
            </Image>
        </a>
      </div>
      <div className={styles.navbar__menu}>

      </div>
    </div>
  )
}

export default Navbar
