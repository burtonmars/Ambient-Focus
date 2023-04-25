import React from 'react';
import Image from 'next/image';

import styles from '../../styles/Hero.module.scss';
import ambientLogo from '../../../public/assets/img/ambient-focus.png';
import { useRouter } from 'next/router';

function Hero() {
  const router = useRouter();

  function navigateRoute(route: string) {
    router.push(route);
  }

  function scrollToElement(elementName: string) {
    window.location.hash = elementName;
  }

  return (
    <div className={styles.hero__container}>
      <h1>Ambient Focus</h1>
      <h3>Transport your mind to a peaceful place with a customizable ambient soundscape</h3>
      <div className={styles.hero__logo}>
        <Image 
            src={ambientLogo} 
            alt='ambient focus brand'
            height={75}>
        </Image>
      </div>
      <div className={styles.hero__ctaContainer}>
        <button className={styles.hero__learnMoreBtn} onClick={() => scrollToElement("#learn-more-container")}>
            Learn More
        </button>
        <button className={styles.hero__tryForFreeBtn} onClick={() => navigateRoute("/player/player")}>
            Try it Free
        </button>
      </div>
    </div>
  )
}

export default Hero
