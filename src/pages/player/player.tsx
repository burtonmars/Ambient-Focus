import React from 'react';

import styles from '../../styles/Player.module.scss';
import Sounds from './sounds';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

function Player() {
  return (
    <div className={styles.player__background}>
      <div className={styles.player__container}>
        <div className={styles.player__navbar}>
          <Navbar />
        </div>
        <div className={styles.player__titleContainer}>
          <h1>Click any sound to add it to your ambience</h1>
        </div>
        <div className={styles.player__soundsContainer}>
          <Sounds />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Player
