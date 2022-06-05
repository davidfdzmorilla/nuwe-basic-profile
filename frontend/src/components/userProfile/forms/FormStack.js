
import { useState } from 'react';
import { useSetModal, useUser } from '../../../hooks/hooks';

import { BiUpArrow } from "react-icons/bi";
import { AiFillCloseCircle } from 'react-icons/ai';

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const FormStack = ({ hardSkills, reload, setReload }) => {

  const skillsItems = ['css3', 'sass', 'angular', 'nodejs', 'react', 'javascript', 'typescript', 'python', 'php', 'mysql', 'mongodb', 'amazonaws']

  const setModal = useSetModal()
  const user = useUser()
  const [skillSearch, setSkillSearch] = useState(null)
  const [newSkills, setNewSkills] = useState([...hardSkills])


  let searchRes = skillsItems.filter((skill) => {
    let finalRes = skill.toLowerCase()
    return finalRes.includes(skillSearch)
  })

  const handleChange = ({ target }) => {

    const { value } = target

    setSkillSearch(value)

  }

  const handleRemove = i => {

    setNewSkills(newSkills.filter((skill, index) => index !== i))

  }

  const handleSubmit = async e => {
    e.preventDefault()
    const stack = newSkills.toString()
    if (!stack) {
      setModal(null)
      return
    }
    const res = await fetch(SERVER_URL + '/users/', {
      method: 'PATCH',
      body: JSON.stringify({ stack }),
      headers: {
        'Authorization': 'Bearer ' + user.token,
        'Content-Type': 'application/json'
      }
    })
    if (res.ok) {
      setModal(null)
      setReload(!reload)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form-stack'>
      <h3>Stack</h3>
      <p>Aquí podrás definir tu stack de hard skills con las habilidades que utilizas frecuentemente.</p>
      <article className='stack-container'>
        {/* COINCIDENCIAS DE BUSQUEDA */}
        {skillSearch?.length > 0 &&
          <ul className='skills-match-container'>
            {searchRes?.map((item, i) => {
              return (
                <li onClick={() => setNewSkills([...newSkills, item.toLocaleLowerCase()])} key={i}>{item.toLocaleUpperCase()}</li>
              )
            })}
          </ul>
        }
        <ul className='skills-container'>
          {newSkills.map((skill, i) => {
            return (
              <li className='skill-item' key={i}>
                <span>{skill}</span>
                <AiFillCloseCircle onClick={() => handleRemove(i)} />
              </li>
            )
          })}
          <li>
            <input type='text' name='newSkill' onChange={handleChange} placeholder='Introduce nueva skill...' />
          </li>
          <BiUpArrow onClick={() => console.log('')} className='down-arrow' />
        </ul>
      </article>
      <button className='save-button'>Guardar</button>
    </form>
  )

}
