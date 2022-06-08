
import { useState } from 'react'
import { useSetModal } from '../../../../hooks/hooks'

import { Switch } from '../../../switch/Switch'

import './FormWorkPref.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const FormWorkPref = ({ user, reload, setReload, userData }) => {

  const setModal = useSetModal()

  const [form, setForm] = useState({})
  const [availabilityToTravelSwitch, setAvailabilityToTravelSwitch] = useState(userData.availabilityToTravel)
  const [remoteWorkSwitch, setRemoteWorkSwitch] = useState(userData.remoteWork)
  const [inmediateIncorporationSwitch, setInmediateIncorporationSwitch] = useState(userData.inmediateIncorporation)

  const handleSubmit = async e => {

    e.preventDefault()

    if (!form.ubication && !form.typeCompany && !form.minSalary && !form.likeSalary && availabilityToTravelSwitch === userData.availabilityToTravel && remoteWorkSwitch === userData.remoteWork && inmediateIncorporationSwitch === userData.inmediateIncorporation) {
      setModal(null)
      return
    }

    const res = await fetch(SERVER_URL + '/users/', {
      method: 'PATCH',
      body: JSON.stringify({
        ...form,
        availabilityToTravel: !!availabilityToTravelSwitch,
        remoteWork: !!remoteWorkSwitch,
        inmediateIncorporation: !!inmediateIncorporationSwitch
      }),
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

  const handleChange = (e) => {

    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })

  }

  return (
    <>
      <form name='ubication' className='form-work-preferences' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Donde quieres trabajar</legend>
          <input minLength={2} maxLength={50} name='ubication' onChange={handleChange} type='text' placeholder={userData.ubication} />
        </fieldset>
        <fieldset>
          <legend>Tipo de empresa</legend>
          <input minLength={2} maxLength={50} name='typeCompany' onChange={handleChange} type='text' placeholder={userData.typeCompany} />
        </fieldset>
        <fieldset>
          <legend>Salario mínimo</legend>
          <input name='minSalary' onChange={handleChange} type='text' placeholder={userData.minSalary} />
        </fieldset>
        <fieldset>
          <legend>Sueldo óptimo</legend>
          <input name='likeSalary' onChange={handleChange} type='text' placeholder={userData.likeSalary} />
        </fieldset>
        <Switch setSwitch={setAvailabilityToTravelSwitch} getSwitch={availabilityToTravelSwitch} name='availabilityToTravel' on={availabilityToTravelSwitch} />
        <p>Disponibilidad para viajar: {availabilityToTravelSwitch ? 'Si' : 'No'}</p>
        <Switch name='remoteWork' getSwitch={remoteWorkSwitch} setSwitch={setRemoteWorkSwitch} on={remoteWorkSwitch} />
        <p>Trabajo en remoto: {remoteWorkSwitch ? 'Si' : 'No'}</p>
        <Switch setSwitch={setInmediateIncorporationSwitch} getSwitch={inmediateIncorporationSwitch} name='inmediateIncorporation' on={inmediateIncorporationSwitch} />
        <p>Incorporación inmediata: {inmediateIncorporationSwitch ? 'Si' : 'No'}</p>
        <button className='edit-button'>Guardar cambios</button>
      </form>
    </>
  )

}
