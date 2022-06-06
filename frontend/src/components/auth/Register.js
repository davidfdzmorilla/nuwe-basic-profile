
import { useState } from 'react'

import { validateData } from '../../utils/validateData'

import { Switch } from '../switch/Switch'

import '../../style/RegisterForm.css'

import userTest from '../../data/userTest.json'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


const defaultForm = {
  headerPic: "",
  avatar: "",
  name: "",
  email: "",
  password: "",
  tel: "",
  professionType: "",
  professionLevel: "",
  bio: "",
  country: "",
  city: "",
  linkedin: "",
  gitHub: "",
  gitLab: "",
  behance: "",
  ubication: "",
  typeCompany: "",
  minSalary: "",
  likeSalary: "",
  availabilityToTravel: "",
  remoteWork: "",
  inmediateIncorporation: ""
}


export const Register = ({ setAction, setRegisterOk }) => {

  const headerPic = 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzMzNDB8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY1NDE4NTQxOA&ixlib=rb-1.2.1&q=80'

  const userTestData = userTest[0]

  const [form, setForm] = useState(userTestData)
  const [availabilityToTravelSwitch, setAvailabilityToTravelSwitch] = useState(false)
  const [remoteWorkSwitch, setRemoteWorkSwitch] = useState(false)
  const [inmediateIncorporationSwitch, setInmediateIncorporationSwitch] = useState(false)
  const [errorType, setErrorType] = useState('')
  const [errorText, setErrorText] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)
    const { headerPic, avatar, name, email, password, tel, professionType, professionLevel, bio, country, city, linkedin, gitHub, gitLab, behance, ubication, typeCompany, minSalary, likeSalary, availabilityToTravel, remoteWork, inmediateIncorporation } = form

    if (!headerPic && !avatar && !name && !email && !password && !tel && !professionType && !professionLevel && !bio && !country && !city && !linkedin && !gitHub && !gitLab && !behance && !ubication && !typeCompany && !minSalary && !likeSalary && !availabilityToTravel && !remoteWork && !inmediateIncorporation) return

    const { errorTypeValidation, errorTextValidation } = validateData(name, email, tel, professionType, professionLevel, country, city, ubication, typeCompany, minSalary, likeSalary)

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
    <>
      <h2>Introduce tus datos o con datos por defecto. Debes introducir email, contraseña y clickar en enviar con datos de test.</h2>
      <form onSubmit={handleSubmit} className='register-form'>
        <section className='inputs-container'>
          <fieldset>
            <legend>Email</legend>
            <input id='email' onChange={handleChange} type='email' name='email' placeholder='Introduce email...' required />
            {errorType === 'email' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input min={6} max={20} onChange={handleChange} type='password' name='password' placeholder='Introduce password...' required />
          </fieldset>
          <fieldset>
            <legend>Url avatar</legend>
            <input id='url' onChange={handleChange} type='url' name='avatar' placeholder='Introduce URL...' required />
          </fieldset>
          <fieldset>
            <legend>Nombre</legend>
            <input id='text' min={4} max={20} onChange={handleChange} type='text' name='name' placeholder='Introduce nombre...' required />
            {errorType === 'name' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Teléfono</legend>
            <input id='tel' onChange={handleChange} type='text' name='tel' placeholder='Introduce teléfono...' required />
            {errorType === 'tel' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Puesto</legend>
            <input id='professionType' min={4} max={20} onChange={handleChange} type='text' name='professionType' placeholder='Introduce puesto...' required />
            {errorType === 'professionType' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Nivel</legend>
            <input id='professionLevel' min={4} max={20} onChange={handleChange} type='text' name='professionLevel' placeholder='Introduce nivel...' required />
            {errorType === 'professionLevel' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>País</legend>
            <input id='country' min={4} max={20} onChange={handleChange} type='text' name='country' placeholder='Introduce país...' required />
            {errorType === 'country' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Ciudad</legend>
            <input id='city' min={4} max={20} onChange={handleChange} type='text' name='city' placeholder='Introduce ciudad...' required />
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
            <input id='ubication' min={4} max={20} onChange={handleChange} type='text' name='ubication' placeholder='Introduce tu preferencia...' required />
            {errorType === 'ubication' && <p className='error-text'>{errorText}</p>}
          </fieldset>
          <fieldset>
            <legend>Tipo de compañia</legend>
            <input id='typeCompany' min={4} max={20} onChange={handleChange} type='text' name='typeCompany' placeholder='Introduce tu preferencia...' required />
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
          <textarea min={50} max={600} onChange={handleChange} type='text' name='bio' placeholder='Cuéntanos sobre tí...' required />
        </fieldset>
        <div className='buttons-container'>
          <button>Enviar</button>
          <button onClick={() => setAction('login')}>Salir</button>
        </div>
      </form>
      <button className='insert-data-demo-button' onClick={handleSubmit}>Enviar con datos de test</button>
    </>
  )
}
