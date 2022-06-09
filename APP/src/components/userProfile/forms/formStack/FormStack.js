
import { useEffect, useState } from 'react'
import { useSetModal, useUser } from '../../../../hooks/hooks'

import { AiFillCloseCircle } from 'react-icons/ai'

import './FormStack.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const FormStack = ({ hardSkills, reload, setReload }) => {

  const skillsItemsDefect = ['css3', 'sass', 'angular', 'nodejs', 'react', 'javascript', 'typescript', 'python', 'php', 'mysql', 'mongodb', 'amazonaws', 'html5']

  const setModal = useSetModal()
  const user = useUser()
  const [newSkills, setNewSkills] = useState([...hardSkills])
  const [searchRes, setSearchRes] = useState([])

  useEffect(() => {
    setSearchRes([...skillsItemsDefect])
  }, [])



  const handleChange = ({ target }) => {
    const { value } = target
    setSearchRes(skillsItemsDefect.filter((skill) => {
      return skill.toLowerCase().includes(value.toLocaleLowerCase())
    }))
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
        {searchRes.length > 0 &&
          <ul className='skills-match-container'>
            {searchRes.map((item, i) => {
              return (
                <li onClick={() => setNewSkills([...newSkills, item.toLocaleLowerCase()])} key={i}>{item.toLocaleUpperCase()}</li>
              )
            })}
          </ul>}
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
        </ul>
      </article>
      <button className='save-button'>Guardar</button>
    </form>
  )

}
