
import { useState } from 'react'


import '../../style/RegisterForm.css'

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


export const Register = ({ setAction }) => {

  const headerPic = 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzMzNDB8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY1NDE4NTQxOA&ixlib=rb-1.2.1&q=80'

  const [form, setForm] = useState(defaultForm)

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(form)
    const { headerPic, avatar, name, email, password, tel, professionType, professionLevel, bio, country, city, linkedin, gitHub, gitLab, behance, ubication, typeCompany, minSalary, likeSalary, availabilityToTravel, remoteWork, inmediateIncorporation } = form

    if (!headerPic && !avatar && !name && !email && !password && !tel && !professionType && !professionLevel && !bio && !country && !city && !linkedin && !gitHub && !gitLab && !behance && !ubication && !typeCompany && !minSalary && !likeSalary && !availabilityToTravel && !remoteWork && !inmediateIncorporation) return


    const res = await fetch(SERVER_URL + '/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form })
    })

    if (res.ok) {
      setAction('login')
    } else {
      console.log('error')
    }
  }

  const handleChange = ({ target }) => {

    let { name, value } = target

    setForm({
      ...form,
      headerPic,
      [name]: value
    })

  }

  const handleBoolean = ({ target }) => {

    let { name, checked } = target

    setForm({
      ...form,
      [name]: checked
    })

  }


  return (
    <>
      <h2>Introduce tus datos</h2>
      <form onSubmit={handleSubmit} className='register-form'>
        <section className='inputs-container'>
          <fieldset>
            <legend>Url avatar</legend>
            <input onChange={handleChange} type='url' name='avatar' placeholder='Introduce URL...' required />
          </fieldset>
          <fieldset>
            <legend>Nombre</legend>
            <input onChange={handleChange} type='text' name='name' placeholder='Introduce nombre...' required />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input onChange={handleChange} type='email' name='email' placeholder='Introduce email...' required />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input onChange={handleChange} type='password' name='password' placeholder='Introduce password...' required />
          </fieldset>
          {/* <fieldset>
            <legend>Repite password</legend>
            <input onChange={handleChange} type='password' name='repeatPassword' placeholder='Repite password...' required />
          </fieldset> */}
          <fieldset>
            <legend>Teléfono</legend>
            <input onChange={handleChange} type='text' name='tel' placeholder='Introduce teléfono...' required />
          </fieldset>
          <fieldset>
            <legend>Puesto</legend>
            <input onChange={handleChange} type='text' name='professionType' placeholder='Introduce puesto...' required />
          </fieldset>
          <fieldset>
            <legend>Nivel</legend>
            <input onChange={handleChange} type='text' name='professionLevel' placeholder='Introduce nivel...' required />
          </fieldset>
          <fieldset>
            <legend>Bio</legend>
            <textarea onChange={handleChange} type='text' name='bio' placeholder='Cuéntanos sobre tí...' required />
          </fieldset>
          <fieldset>
            <legend>País</legend>
            <input onChange={handleChange} type='text' name='country' placeholder='Introduce país...' required />
          </fieldset>
          <fieldset>
            <legend>Ciudad</legend>
            <input onChange={handleChange} type='text' name='city' placeholder='Introduce ciudad...' required />
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
            <input onChange={handleChange} type='text' name='ubication' placeholder='Introduce tu preferencia...' required />
          </fieldset>
          <fieldset>
            <legend>Tipo de compañia</legend>
            <input onChange={handleChange} type='text' name='typeCompany' placeholder='Introduce tu preferencia...' required />
          </fieldset>
          <fieldset>
            <legend>Salario mínimo</legend>
            <input onChange={handleChange} type='text' name='minSalary' placeholder='Introduce cifra...' required />
          </fieldset>
          <fieldset>
            <legend>Salario deseado</legend>
            <input onChange={handleChange} type='text' name='likeSalary' placeholder='Introduce cifra...' required />
          </fieldset>
          <fieldset>
            <legend>Disponibilidad para viajar</legend>
            <input onChange={handleBoolean} type='checkbox' name='availabilityToTravel' />
          </fieldset>
          <fieldset>
            <legend>Trabajo remoto</legend>
            <input onChange={handleBoolean} type='checkbox' name='remoteWork' />
          </fieldset>
          <fieldset>
            <legend>Incorporación inmediata</legend>
            <input onChange={handleBoolean} type='checkbox' name='inmediateIncorporation' />
          </fieldset>
        </section>
        <div className='buttons-container'>
          <button>Enviar</button>
          <button onClick={() => setAction('login')}>Salir</button>
        </div>
      </form>
    </>
  )
}

