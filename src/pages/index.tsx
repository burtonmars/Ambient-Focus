import { useEffect } from 'react'

import styles from '@/styles/Index.module.scss';
import Hero from './landing/hero'
import Footer from '@/components/footer'
import LearnMore from './landing/learn-more'

export default function Home() {
  
  useEffect(() => {
    const scrollToElement = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('scroll', scrollToElement);
    return () => {
      window.removeEventListener('scroll', scrollToElement);
    };
  }, []);

  return (
    <main>
      <div className={styles.index__container}>
        <div className={styles.index__backgroundTint}>
          <div id='index__learnMoreContainer' className={styles.index__heroContainer}>
            <Hero />
          </div>
          <div id='index__learnMoreContainer' className={styles.index__learnMoreContainer}>
            <LearnMore />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  )
}

function scrollToElement(id: string) {
  const container = document.getElementById('id')
  //container.scrollIntoView({ behavior: 'smooth' })
}
