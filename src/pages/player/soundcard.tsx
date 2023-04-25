import React, { useState } from 'react';
import useSound from 'use-sound';
import Image from 'next/image';

import styles from '../../styles/Soundcard.module.scss';

// *** temp use for no prop access
import birdsSound from '../../../public/assets/sounds/birds1.ogg';
import birdsImg from '../../../public/assets/img/bird.webp';
// ***

interface SoundCardProps {
  sound: any;
}

function SoundCard(props: SoundCardProps) {
  const [soundActive, setSoundActive] = React.useState(false)
  const [volume, setVolume] = useState(.6);
  const [play, { stop }] = useSound(birdsSound, {volume});

  //const sound = require('../../../public/assets/sounds/birds1.ogg');

  let containerClassName = styles.soundcard__containerOff;

  const handleClick = React.useCallback(() => {
    if (soundActive) {
      stop();
      setSoundActive(false);
      containerClassName = styles.soundcard__containerOff
    } else {
      play();
      setSoundActive(true);
      containerClassName = styles.soundcard__containerOn
    }
  }, [play, stop, soundActive]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  }

  return (
    <div className={containerClassName}>
      <button className={styles.soundcard__button} onClick={handleClick}>
        <Image src={birdsImg} alt='sound icon' height={40}></Image>
      </button>
      <input className={styles.soundcard__volumeBar} 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume}
          onChange={handleVolumeChange}>
      </input>
    </div>
  )
}

export default SoundCard;
