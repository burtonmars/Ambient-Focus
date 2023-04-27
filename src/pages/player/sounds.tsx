import React, { useState } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

import style from '../../styles/Sounds.module.scss'
import SoundCard from './soundcard';
import { soundsData } from '../../data/soundsMeta';

function Sounds() {
  const [globalPlayState, setGlobalPlayState] = useState('');

  const handlePlay = () => {
    setGlobalPlayState('play');
  };

  const handlePause = () => {
    setGlobalPlayState('pause');
  };

  const handleStop = () => {
    setGlobalPlayState('stop');
  };

  return (
    <>
      <div className={style.sounds__soundsContainer}>
        <div className={style.sounds__soundCardContainer}>
          {soundsData.map((sound, index) => (
            <SoundCard 
                key={index} 
                soundFile={sound.sound} 
                iconFile={sound.icon} 
                globalPlayState={globalPlayState}
                setGlobalPlayState={setGlobalPlayState} />
          ))}
        </div>
        <div className={style.sounds__controlButtons}>
            <button onClick={handlePlay}><FaPlay /></button>
            <button onClick={handlePause}><FaPause /></button>
            <button onClick={handleStop}><FaStop /></button>
        </div>
      </div>
    </>
  )
}

export default Sounds;
