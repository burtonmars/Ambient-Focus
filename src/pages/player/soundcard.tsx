import React from 'react';
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

  //const sound = require('../../../public/assets/sounds/birds1.ogg');

  let containerClassName = styles.soundcard__containerOff;
  const [play, { stop }] = useSound(birdsSound);

  const handleClick = React.useCallback(() => {
    if (soundActive) {
      stop();
      setSoundActive(false);
      containerClassName = styles.soundcard_containerOff
    } else {
      play();
      setSoundActive(true);
      containerClassName = styles.soundcard_containerOn
    }
  }, [play, stop, soundActive]);

  return (
    <div className={containerClassName}>
      <button onClick={handleClick}>
        <Image
          src={birdsImg}
          alt='sound icon'
          height={50}>
        </Image>
      </button>
    </div>
  )
}

export default SoundCard;
