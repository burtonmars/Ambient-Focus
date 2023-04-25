import React from 'react';
import Image from 'next/image';

import styles from '@/styles/LearnMore.module.scss';

function LearnMore() {
  return (
    <div className={styles.learnMore__container}>
      <div className={styles.learnMore__textContainer}>
        <div className={styles.learnMore__section}>
          <h1>Brighten your mood</h1>
          <p>Make your workspace or home more peaceful by adding calming and nostalgic
            soundscapes as background noise.
          </p>
        </div>
        <div className={styles.learnMore__section}>
          <h1>Easy to use</h1>
          <p>Just tap the icon of the sound you want to add and use the slider below to adjust the volume
          </p>
        </div>
        <div className={styles.learnMore__section}>
          <h1>Create your own layers</h1>
          <p> Add as many sounds as you like and adjust the volume of each independently
            to create your perfect custom ambience.
          </p>
        </div>
      </div>
      <div className={styles.learnMore__appImgContainer}>
        
      </div>
    </div>
  )
}

export default LearnMore
