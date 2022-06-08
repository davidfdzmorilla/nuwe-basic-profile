
import { useState } from 'react'

import { NuweProfileComponent } from './NuweProfileComponent'

import './NuweProfileCard.css'
import { TimelinCvComponent } from './TimelinCvComponent'

export const NuweProfileCard = () => {

  const timeLineData = <TimelinCvComponent />
  const nuweProfile = <NuweProfileComponent />

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