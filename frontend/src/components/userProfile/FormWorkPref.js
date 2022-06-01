
import { useState } from 'react'
import { useSetModal } from '../../hooks/hooks'
import Switch from '../switch/Switch'

import '../../style/FormWorkPref.css'


export const FormWorkPref = ({ user, setUser }) => {



  const [form, setForm] = useState(user)
  const setModal = useSetModal()

  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('user', JSON.stringify(form))
    let userStorage = JSON.parse(localStorage.getItem('user'))
    setUser(userStorage)
    setModal(null)
  }



  const handleChange = (e) => {
    console.log(e)
    const { name, value } = e.target
    setForm({
      ...user,
      [name]: value
    })
  }


  return (
    <>
      <h3>Indicanos si estás abierto a ofertas de trabajo</h3>
      <form name='ubication' className='form-work-preferences' onSubmit={handleSubmit}>
        <Switch on={true} />
        <p>Sí, estoy abierto a ofertas de trabajo</p>
        <fieldset>
          <legend>Puesto</legend>
          <input name='professionType' onChange={handleChange} type='text' placeholder='Web developer' />
        </fieldset>
        <fieldset>
          <legend>Donde quieres trabajar</legend>
          <input name='ubication' onChange={handleChange} type='text' placeholder='España' />
        </fieldset>
        <fieldset>
          <legend>Tipo de empresa</legend>
          <input name='typeCompany' onChange={handleChange} type='text' placeholder='Startup' />
        </fieldset>
        <fieldset>
          <legend>Salario mínimo</legend>
          <input name='minSalary' onChange={handleChange} type='number' placeholder='18000' />
        </fieldset>
        <fieldset>
          <legend>Sueldo óptimo</legend>
          <input name='likeSalary' onChange={handleChange} type='number' placeholder='18000' />
        </fieldset>
        <Switch name='availabilityToTravel' on={user.availabilityToTravel} />
        <p>Sí</p>
        <Switch name='remoteWork' on={user.remoteWork} />
        <p>Sí</p>
        <Switch name='immediateIncorporation' on={user.immediateIncorporation} />
        <p>Sí</p>
        <button className='edit-button'>Guardar cambios</button>
      </form>
    </>
  )
}
