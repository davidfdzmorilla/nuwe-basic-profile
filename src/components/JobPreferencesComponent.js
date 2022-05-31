
import { useSetModal } from '../hooks/hooks'

import { GiPositionMarker, GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { SiYourtraveldottv } from 'react-icons/si';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { FiEdit3 } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go';


import '../style/JobPreferencesComponent.css'
import { FormWorkPref } from './FormWorkPref';


export const JobPreferencesComponent = ({ user, setUser }) => {

  const setModal = useSetModal()


  return (
    <article className='card-job-preferences'>
      <h2>Sobre el puesto que busca JohnnD:</h2>
      <FiEdit3 className='pencil-icon' onClick={() => setModal(<FormWorkPref user={user} setUser={setUser} />)} />
      <section className='up-container'>
        <div className='item-container'>
          <GiPositionMarker />
          <p>{user.ubication}</p>
        </div>
        <div className='item-container'>
          <MdOutlineHomeWork />
          <p>{user.typeCompany}</p>
        </div>
        <div className='item-container'>
          <GiReceiveMoney />
          <p>{user.minSalary} a {user.likeSalary} €/a</p>
        </div>
      </section>
      <section className='down-container'>
        <div className='item-container'>
          <SiYourtraveldottv />
          <p>{user.availabilityToTravel ? 'Disponibilidad para viajar' : ''}</p>
        </div>
        <div className='item-container'>
          <VscRemoteExplorer />
          <p>{user.remoteWork ? 'Disponibilidad para trabajar en remoto' : ''}</p>
        </div>
        <div className='item-container'>
          <GoCalendar />
          <p>{user.immediateIncorporation ? 'Incorporación inmediata' : ''}</p>
        </div>
      </section>
    </article>
  )
}
