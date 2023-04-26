import React from 'react';

import style from '../../styles/Sounds.module.scss'
import SoundCard from './soundcard';
import { soundsData } from '../../data/soundsMeta';

function Sounds() {
  return (
    <>
      <div className={style.sounds__container}>
        {soundsData.map((sound, index) => (
          <SoundCard key={index} soundFile={sound.sound} iconFile={sound.icon} />
        ))}
      </div>
    </>
  )
}

export default Sounds;
