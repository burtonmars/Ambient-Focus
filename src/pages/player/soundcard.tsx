import React from 'react';
import useSound from 'use-sound';

import styles from '../../styles/Soundcard.module.scss';
import birds1 from '../../../public/assets/sounds/birds1.ogg'

interface SoundCardProps {
  sound: any;
}

function SoundCard(props: SoundCardProps) {
  const [soundActive, setSoundActive] = React.useState(false)

  //const sound = require('../../../public/assets/sounds/birds1.ogg');

  let containerClassName = styles.soundcard__containerOff;
  const [play, { stop }] = useSound(birds1);

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
        play
      </button>
    </div>
  )
}

export default SoundCard;
