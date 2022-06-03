
import { useSetModal, useUser } from '../../hooks/hooks'

import { GiPositionMarker, GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineHomeWork } from 'react-icons/md';
import { SiYourtraveldottv } from 'react-icons/si';
import { VscRemoteExplorer } from 'react-icons/vsc';
import { FiEdit3 } from 'react-icons/fi';
import { GoCalendar } from 'react-icons/go';


import '../../style/JobPreferencesComponent.css'
import { FormWorkPref } from './FormWorkPref';
import { useEffect, useState } from 'react';

const SERVER_URL = process.env.REACT_APP_SERVER_URL



export const JobPreferencesComponent = () => {

  const user = useUser()

  const setModal = useSetModal()

  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(user)
  const [reload, setReload] = useState(null)


  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(SERVER_URL + '/users/profile', {
          headers: {
            'Authorization': 'Bearer ' + user.token
          }
        })
        const data = await response.json()
        setUserData(data)
        setError(null)
      } catch (error) {
        setError(error)
      }
    }
    loadData()
  }, [reload, user])


  return (
    <article className='card-job-preferences'>
      <h2>Sobre el puesto que busca {userData.name}:</h2>
      <FiEdit3 className='pencil-icon' onClick={() => setModal(<FormWorkPref userData={userData} reload={reload} setReload={setReload} user={user} />)} />
      <section className='up-container'>
        <div className='item-container'>
          <GiPositionMarker />
          <p>{userData.ubication}</p>
        </div>
        <div className='item-container'>
          <MdOutlineHomeWork />
          <p>{userData.typeCompany}</p>
        </div>
        <div className='item-container'>
          <GiReceiveMoney />
          <p>{userData.minSalary} a {userData.likeSalary} €/a</p>
        </div>
      </section>
      <section className='down-container'>
        <div className='item-container'>
          {userData.availabilityToTravel === 1 &&
            <>
              <SiYourtraveldottv />
              <p>Disponibilidad para viajar</p>
            </>}
        </div>
        <div className='item-container'>
          {userData.remoteWork === 1 &&
            <>
              <VscRemoteExplorer />
              <p>Disponibilidad para trabajar en remoto</p>
            </>
          }
        </div>
        <div className='item-container'>
          {userData.inmediateIncorporation === 1 &&
            <>
              <GoCalendar />
              <p>Incorporación inmediata</p>
            </>
          }
        </div>
      </section>
    </article>
  )
}
