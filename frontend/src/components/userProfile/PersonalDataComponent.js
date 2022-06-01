import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import { GiPositionMarker } from 'react-icons/gi';
import { useSetModal, useUser } from '../../hooks/hooks';

import '../../style/PersonalDataComponent.css'
import { FormData } from './FormData';
import { FormHeaderPic } from './FormHeaderPic';


export const PersonalDataComponent = () => {

  const user = useUser()

  const setModal = useSetModal()

  const stack = ['1', '2', '3', '4', '5', '6']

  return (
    <article className='card-personal-data'>
      <section className='images-container'>
        <FiEdit3 style={{ cursor: 'pointer' }} className='pencil-icon' onClick={() => setModal(<FormHeaderPic user={user} />)} />
        <img className='header-img' src={user.headerPic} alt='' />
        <img className='avatar' src={user.avatar} alt='' />
      </section>
      <section className='data-container'>
        <FiEdit3 style={{ cursor: 'pointer' }} className='pencil-icon' onClick={() => setModal(<FormData user={user} />)} />
        <h2>{user.name}</h2>
        <p>{user.email} | {user.tel}</p>
        <h3>{user.professionType} - {user.professionLevel}</h3>
        <p>{user.bio}</p>
        <p><GiPositionMarker /> {user.country} {user.city}</p>
        <div className='social-container'>
          <a href={user.linkedin}><BsLinkedin /></a>
          <a href={user.gitHub}><BsGithub /></a>
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
