
import { useState } from 'react';

import { RadarHardSkills } from './RadarHardSkills';
import { RadarSoftSkills } from './RadarSoftSkills';

import '../../../style/NeweProfileComponent.css'


export const NeweProfileComponent = () => {

  const timeLineData = <button className='add-experience-button'>AÑADIR EXPERIENCIA</button>
  const nuweProfile = <article className='card-newe-profile'>
    {/* CARD RADAR HARD SKILLS */}
    <RadarHardSkills />
    {/* CARD RADAR SOFT SKILLS*/}
    <RadarSoftSkills />
  </article>

  const [type, setType] = useState('profile')
  const [card, setCard] = useState(nuweProfile)

  const handleCard = type => {
    switch (true) {
      case type === 'profile':
        setType(type)
        setCard(nuweProfile)
        break;
      case type === 'timeLine':
        setType(type)
        setCard(timeLineData)
        break;
      default:
        setCard(nuweProfile)
        break;
    }
  }

  return (
    <section className='newe-profile-container'>
      <menu>
        <button className={type === 'profile' ? 'active' : ''} onClick={() => handleCard('profile')}>Perfil Nuwe</button>
        <button className={type === 'timeLine' ? 'active' : ''} onClick={() => handleCard('timeLine')}>Timeline CV</button>
      </menu>
      {card}
    </section>
  )

}