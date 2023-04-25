import React from 'react';

import style from '../../styles/Sounds.module.scss'
import SoundCard from './soundcard';

const sounds = [
	{
		"id": 1,
		"name": "birds1",
		"sounds": "public/assets/sounds/birds1.ogg",
		"icon": ""
	},
	{
		"id": 2,
		"name": "birds2",
		"sounds": "public/assets/sounds/birds2.ogg",
		"icon": ""
	},
	{
		"id": 3,
		"name": "countryside",
		"sounds": "public/assets/sounds/countryside.ogg",
		"icon": ""
	},
	{
		"id": 4,
		"name": "forest-after-rain",
		"sounds": "public/assets/sounds/forest-after-rain.ogg",
		"icon": ""
	},
	{
		"id": 5,
		"name": "forest",
		"sounds": "public/assets/sounds/forest.ogg",
		"icon": ""
	},
	{
		"id": 6,
		"name": "port",
		"sounds": "public/assets/sounds/port.ogg",
		"icon": ""
	},
	{
		"id": 7,
		"name": "rain",
		"sounds": "public/assets/sounds/rain.ogg",
		"icon": ""
	},
	{
		"id": 8,
		"name": "stream",
		"sounds": "public/assets/sounds/stream.ogg",
		"icon": ""
	},
	{
		"id": 9,
		"name": "thunder-storm",
		"sounds": "public/assets/sounds/thunder-storm.ogg",
		"icon": ""
	},
	{
		"id": 10,
		"name": "traffic",
		"sounds": "public/assets/sounds/traffic.ogg",
		"icon": ""
	},
	{
		"id": 11,
		"name": "waves-crashing",
		"sounds": "public/assets/sounds/waves-crashing.ogg",
		"icon": ""
	},
	{
		"id": 12,
		"name": "wind",
		"sounds": "public/assets/sounds/wind.ogg",
		"icon": ""
	}
]

function Sounds() {
  return (
    <>
      <div className={style.sounds__container}>
        {sounds.map((sound, index) => (
          <SoundCard key={index} sound={sound} />
        ))}
      </div>
    </>
  )
}

export default Sounds
