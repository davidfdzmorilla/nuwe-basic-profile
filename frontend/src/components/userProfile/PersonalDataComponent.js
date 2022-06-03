import { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import { GiPositionMarker } from 'react-icons/gi';
import { useSetModal, useUser } from '../../hooks/hooks';

import '../../style/PersonalDataComponent.css'
import { FormData } from './FormData';
import { FormHeaderPic } from './FormHeaderPic';

const SERVER_URL = process.env.REACT_APP_SERVER_URL



export const PersonalDataComponent = () => {

  const user = useUser()

  const setModal = useSetModal()

  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(user)
  const [reload, setReload] = useState(null)

  console.log(userData)


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

  const stack = ['1', '2', '3', '4', '5', '6']

  return (
    <article className='card-personal-data'>
      <section className='images-container'>
        <FiEdit3 style={{ cursor: 'pointer' }} className='pencil-icon' onClick={() => setModal(<FormHeaderPic reload={reload} setReload={setReload} user={user} />)} />
        <img className='header-img' src={userData.hederPic} alt='' />
        <img className='avatar' src={userData.avatar} alt='' />
      </section>
      <section className='data-container'>
        <FiEdit3 style={{ cursor: 'pointer' }} className='pencil-icon' onClick={() => setModal(<FormData reload={reload} setReload={setReload} user={user} userData={userData} />)} />
        <h2>{userData.name}</h2>
        <p>{userData.email} | {userData.tel}</p>
        <h3>{userData.professionType} - {userData.professionLevel}</h3>
        <p>{userData.bio}</p>
        <p><GiPositionMarker /> {userData.country} {userData.city}</p>
        <div className='social-container'>
          <a href={userData.linkedin} target='_blank' rel='noreferrer nopener'><BsLinkedin /></a>
          <a href={userData.github} target='_blank' rel='noreferrer nopener'><BsGithub /></a>
        </div>
      </section>
      <fieldset>
        <legend>Stack</legend>
        <section className='stack-container'>
          {stack?.map((stack, i) => {
            return (
              <span className='stack-item' key={i} />
            )
          })}
        </section>
      </fieldset>
    </article>
  )
}
