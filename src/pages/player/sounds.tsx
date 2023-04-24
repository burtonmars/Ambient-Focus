import React from 'react';

import style from '../../styles/Sounds.module.scss'
import SoundCard from './soundcard';

function sounds() {
  return (
    <div className={style.sounds__container}>
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
      <SoundCard />
    </div>
  )
}

export default sounds
