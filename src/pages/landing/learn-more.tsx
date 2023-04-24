import React from 'react';
import { Link, Element } from 'react-scroll';

import styles from '@/styles/LearnMore.module.scss';

function LearnMore() {
  return (
    <Element name='learn-more-container'>
      <div className={styles.learnMore__container}>
        Learn more
      </div>
    </Element>
  )
}

export default LearnMore
