import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';

import styles from '../../styles/Hero.module.scss';
import ambientLogo from '../../../public/assets/img/ambient-focus.png';


function Hero() {
  const router = useRouter();

  function navigateRoute(route: string) {
    router.push(route);
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
        <div className={styles.hero__learnMoreBtnContainer}>
          <Link to='learn-more' smooth={true} duration={500}>
            <button className={styles.hero__learnMoreBtn}>
              Learn More
            </button>
          </Link>
        </div>
        <button className={styles.hero__tryForFreeBtn} onClick={() => navigateRoute("/player/player")}>
            Try it Free
        </button>
      </div>
    </div>
  )
}

export default Hero
