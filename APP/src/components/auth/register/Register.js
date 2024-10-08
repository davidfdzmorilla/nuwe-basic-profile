
import { useState } from 'react'

import { validateData } from '../../../utils/validateData'

import { Switch } from '../../switch/Switch'

import './Register.css'

import userTest from '../../../data/userTest.json'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


export const Register = ({ setAction, setRegisterOk }) => {

  const headerPic = 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzMzNDB8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY1NDE4NTQxOA&ixlib=rb-1.2.1&q=80'

  const userTestData = userTest[0]

  const [form, setForm] = useState(userTestData)
  console.log(form)
  const [availabilityToTravelSwitch, setAvailabilityToTravelSwitch] = useState(false)
  const [remoteWorkSwitch, setRemoteWorkSwitch] = useState(false)
  const [inmediateIncorporationSwitch, setInmediateIncorporationSwitch] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [errorText, setErrorText] = useState('')

  const handleSubmit = async e => {

    e.preventDefault()
    const { name, email, password, repeatPassword, tel, professionType, professionLevel, country, city, ubication, typeCompany, minSalary, likeSalary } = form

    if (repeatPassword !== password) {
      setErrorType('password')
      setErrorText('Las passwords no coinciden.')
      return
    } else {
      delete form['repeatPassword']
    }

    const { errorTypeValidation, errorTextValidation } = validateData(name, email, tel, professionType, professionLevel, country, city, ubication, typeCompany, minSalary, likeSalary)
    if (!email || !password) {
      setErrorText('Introduce email y password.')
      return
    }


    if (errorTypeValidation) {
      setErrorType(errorTypeValidation)
      setErrorText(errorTextValidation)
      document.getElementById(errorTypeValidation).focus()
      return
    }

    const res = await fetch(SERVER_URL + '/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        availabilityToTravel: !!availabilityToTravelSwitch,
        remoteWork: !!remoteWorkSwitch,
        inmediateIncorporation: !!inmediateIncorporationSwitch
      })
    })


    if (res.ok) {
      setAction('login')
      setRegisterOk('Usuario registrado con éxito. Ya puedes hacer login.')
    } else if (res.status === 409) {
      setErrorText('Usuario ya registrado')
    } else {
      console.log('error')
    }
  }

  const handleChange = ({ target }) => {

    let { name, value } = target

    setErrorType('')
    setErrorText('')

    setForm({
      ...form,
      headerPic,
      [name]: value
    })
  }

  return (
    <main className='register-page'>
      <h2>Tienes dos opciones para  registro:</h2>
      <ol className='options-explanation'>
        <li>Introducir todos los datos maunualmente.</li>
        <li>Registrarse con datos de test. Si eliges esta opción debes introducir email, password y clicar el el botón enviar con datos de test.</li>
      </ol>
      <form onSubmit={handleSubmit} className='register-form'>
        <section className='inputs-container'>
          <fieldset>
            <legend>Email</legend>
            <input id='email' onChange={handleChange} type='email' name='email' placeholder='Introduce email...' required />
            {errorType === 'email' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input minLength={6} maxLength={20} onChange={handleChange} type='password' name='password' placeholder='Introduce password...' required />
            {errorType === 'password' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Repite password</legend>
            <input minLength={6} maxLength={20} onChange={handleChange} type='password' name='repeatPassword' placeholder='Repite password...' required />
          </fieldset>
          <fieldset>
            <legend>Url avatar</legend>
            <input id='url' onChange={handleChange} type='url' name='avatar' placeholder='Introduce URL...' required />
          </fieldset>
          <fieldset>
            <legend>Nombre</legend>
            <input id='text' minLength={4} maxLength={20} onChange={handleChange} type='text' name='name' placeholder='Introduce nombre...' required />
            {errorType === 'name' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Teléfono</legend>
            <input id='tel' onChange={handleChange} type='text' name='tel' placeholder='Introduce teléfono...' required />
            {errorType === 'tel' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Puesto</legend>
            <input id='professionType' minLength={4} maxLength={20} onChange={handleChange} type='text' name='professionType' placeholder='Introduce puesto...' required />
            {errorType === 'professionType' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Nivel</legend>
            <input id='professionLevel' minLength={4} maxLength={20} onChange={handleChange} type='text' name='professionLevel' placeholder='Introduce nivel...' required />
            {errorType === 'professionLevel' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>País</legend>
            <input id='country' minLength={4} maxLength={20} onChange={handleChange} type='text' name='country' placeholder='Introduce país...' required />
            {errorType === 'country' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Ciudad</legend>
            <input id='city' minLength={4} maxLength={20} onChange={handleChange} type='text' name='city' placeholder='Introduce ciudad...' required />
            {errorType === 'city' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Linkedin</legend>
            <input onChange={handleChange} type='url' name='linkedin' placeholder='Perfil Linkedin...' required />
          </fieldset>
          <fieldset>
            <legend>GitHub</legend>
            <input onChange={handleChange} type='url' name='gitHub' placeholder='Perfil GitHub...' required />
          </fieldset>
          <fieldset>
            <legend>GitLab</legend>
            <input onChange={handleChange} type='url' name='gitLab' placeholder='Perfil de GitLab...' required />
          </fieldset>
          <fieldset>
            <legend>Behance</legend>
            <input onChange={handleChange} type='url' name='behance' placeholder='Perfil de Beance...' required />
          </fieldset>
          <fieldset>
            <legend>Donde buscas empleo</legend>
            <input id='ubication' minLength={4} maxLength={20} onChange={handleChange} type='text' name='ubication' placeholder='Introduce tu preferencia...' required />
            {errorType === 'ubication' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Tipo de compañia</legend>
            <input id='typeCompany' minLength={4} maxLength={20} onChange={handleChange} type='text' name='typeCompany' placeholder='Introduce tu preferencia...' required />
            {errorType === 'typeCompany' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Salario mínimo</legend>
            <input id='minSalary' onChange={handleChange} type='text' name='minSalary' placeholder='Introduce cifra...' required />
            {errorType === 'minSalary' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Salario deseado</legend>
            <input id='likeSalary' onChange={handleChange} type='text' name='likeSalary' placeholder='Introduce cifra...' required />
            {errorType === 'likeSalary' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Disponibilidad para viajar</legend>
            <Switch setSwitch={setAvailabilityToTravelSwitch} getSwitch={availabilityToTravelSwitch} name='availabilityToTravel' on={availabilityToTravelSwitch} />
          </fieldset>
          <fieldset>
            <legend>Trabajo remoto</legend>
            <Switch name='remoteWork' getSwitch={remoteWorkSwitch} setSwitch={setRemoteWorkSwitch} on={remoteWorkSwitch} />
          </fieldset>
          <fieldset>
            <legend>Incorporación inmediata</legend>
            <Switch setSwitch={setInmediateIncorporationSwitch} getSwitch={inmediateIncorporationSwitch} name='inmediateIncorporation' on={inmediateIncorporationSwitch} />
          </fieldset>
        </section>
        <fieldset className='text-area-fieldset'>
          <legend>Bio</legend>
          <textarea minLength={50} maxLength={600} onChange={handleChange} type='text' name='bio' placeholder='Cuéntanos sobre tí...' required />
        </fieldset>
        <div className='buttons-container'>
          <button>Enviar</button>
          <button onClick={() => setAction('login')}>Salir</button>
        </div>
      </form>
      <button className='insert-data-demo-button' onClick={handleSubmit}>Enviar con datos de test</button>
      {errorText &&
        <p style={{ color: 'red', fontSize: '1.5rem' }}>{errorText}</p>
      }
    </main>
  )
}
