import React, { useState,  useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../../styles/Player.module.scss';
import Sounds from './sounds';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';


function Player() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.player__background}>
      <div className={styles.player__main}>
        <div className={styles.player__navbar}>
          <Navbar />
        </div>
        <div className={styles.player__container}>
          <div className={styles.player__titleContainer}>
            <h1>Click any sound to add it to your ambience</h1>
          </div>
          <div className={styles.player__soundsContainer}>
            <Sounds />
          </div>
        </div>
        <div className={styles.player__footerContainer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Player
