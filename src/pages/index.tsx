
import styles from '@/styles/Index.module.scss';
import Hero from './landing/hero'
import Footer from '@/components/footer'
import LearnMore from './landing/learn-more'

export default function Home() {

  return (
    <div className={styles.index__container}>
      <div className={styles.index__backgroundTint}>
        <div className={styles.index__heroContainer}>
          <Hero />
        </div>
        <div className={styles.index__learnMoreContainer}>
          <LearnMore />
        </div>
        <div className={styles.index__footerContainer}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
