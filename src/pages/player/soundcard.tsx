import React, { useState } from 'react';
import useSound from 'use-sound';
import Image from 'next/image';

import styles from '../../styles/Soundcard.module.scss';

interface SoundCardProps {
  iconFile: any,
  soundFile: any;
  globalPlayState: string;
  setGlobalPlayState: any;
}

function SoundCard(props: SoundCardProps) {
  const [soundActive, setSoundActive] = React.useState(false)
  const [soundStatePlay, setSoundStatePlay] = React.useState(false)
  const [volume, setVolume] = useState(.6);
  const [play, { stop, pause }] = useSound(props.soundFile, {volume, loop: true});

  let containerClassName = soundActive ? styles.soundcard__containerOn : styles.soundcard__containerOff;

  React.useEffect(() => {
    if (soundActive) {
      if (props.globalPlayState === 'play') {
        play();
        setSoundStatePlay(true);
      } else if (props.globalPlayState === 'pause') {
        pause();
        setSoundStatePlay(false);
        props.setGlobalPlayState('');
      } else if (props.globalPlayState === 'stop') {
        stop();
        setSoundActive(false);
        setSoundStatePlay(false);
        props.setGlobalPlayState('');
      }
    }
  }, [props.globalPlayState]);

  const handleClick = React.useCallback(() => {
    if (soundActive) {
      setSoundStatePlay(false);
      stop();
      setSoundActive(false);
    } else {
      play();
      setSoundActive(true);
      setSoundStatePlay(true);
    }
  }, [play, stop, soundActive, props]);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(event.target.value));
  }

  return (
    <div className={containerClassName}>
      <button className={styles.soundcard__button} onClick={handleClick}>
        <Image 
          src={props.iconFile} 
          alt='sound icon' 
          height={40}
          width={40}>
        </Image>
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
