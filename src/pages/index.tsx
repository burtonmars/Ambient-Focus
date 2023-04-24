import { Inter } from 'next/font/google'

import styles from '@/styles/Index.module.scss';
import Hero from './landing/hero'
import Footer from '@/components/footer'
import LearnMore from './landing/learn-more'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className={styles.index__container}>
        <div className={styles.index__heroContainer}>
          <Hero />
        </div>
        <div className={styles.index__learnMoreContainer}>
          <LearnMore />
        </div>
        <Footer />
      </div>
    </main>
  )
}
