import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Hero.module.scss';
import ambientIcon from '../../assets/img/ambient-focus.png';

function Hero() {
  return (
    <div className={styles.hero__container}>
      <h1>Ambient Focus</h1>
      <h3>Transport your mind to your favorite places with a customizable ambient soundscape</h3>
      <div className={styles.hero__brandImg}>
        <Image 
            src={ambientIcon} 
            alt='ambient focus brand'
            height={75}></Image>
      </div>
      <div className={styles.hero__ctaContainer}>
        <button className={styles.hero__learnMoreBtn}>Learn More</button>
        <button className={styles.hero__tryForFreeBtn}>Try it Free</button>
      </div>
    </div>
  )
}

export default Hero
