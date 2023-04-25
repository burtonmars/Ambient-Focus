import React from 'react';
import useSound from 'use-sound';

import styles from '../../styles/Soundcard.module.scss';
import forestSound from '../../../public/assets/sounds/forest.ogg';

function SoundCard() {
  const [soundActive, setSoundActive] = React.useState(false)
  let containerClassName = styles.soundcard__containerOff;
  const [play, { stop }] = useSound(forestSound);

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
