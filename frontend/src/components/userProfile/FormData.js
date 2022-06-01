
import { useState } from 'react'
import { useSetModal } from '../../hooks/hooks'

import '../../style/FormData.css'


export const FormData = ({ user, setUser }) => {

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
    const { name, value } = e.target
    setForm({
      ...user,
      [name]: value
    })
  }


  return (
    <>
      <h3>Datos personles</h3>
      <form className='form' onSubmit={handleSubmit}>
        <p>URL de la imagen que deseas utiliar como avatar</p>
        <fieldset>
          <legend>Avatar</legend>
          <input onChange={handleChange} name='avatar' type='url' placeholder={user.avatar} />
        </fieldset>
        <p>Al tener tus datos actualizados tienes mas probabilidades de que las empresas contacten contigo.</p>
        <section className='data-container'>
          <fieldset>
            <legend>Especialidad</legend>
            <input onChange={handleChange} name='professionType' type='text' placeholder={user.professionType} />
          </fieldset>
          <fieldset>
            <legend>Nivel</legend>
            <input onChange={handleChange} name='professionLevel' type='text' placeholder={user.professionLevel} />
          </fieldset>
          <fieldset>
            <legend>País</legend>
            <input onChange={handleChange} name='country' type='text' placeholder={user.country} />
          </fieldset>
          <fieldset>
            <legend>Ciudad</legend>
            <input onChange={handleChange} name='city' type='text' placeholder={user.city} />
          </fieldset>
        </section>
        <p>Aquí podrás añadir información personal que creas relevante. Comentanos quién eres, que cosas te gustan, etc.</p>
        <fieldset>
          <legend>Bio</legend>
          <textarea onChange={handleChange} name='bio' type='text' placeholder={user.bio} />
        </fieldset>
        <p>URL de tus redes sociales</p>
        <section className='social-container'>
          <fieldset>
            <legend>Linkedin</legend>
            <input onChange={handleChange} name='linkedin' type='url' placeholder={user.linkedin} />
          </fieldset>
          <fieldset>
            <legend>GitHub</legend>
            <input onChange={handleChange} name='gitHub' type='url' placeholder={user.gitHub} />
          </fieldset>
          <fieldset>
            <legend>GitLab</legend>
            <input onChange={handleChange} name='gitLab' type='url' placeholder={user.gitLab} />
          </fieldset>
          <fieldset>
            <legend>Behance</legend>
            <input onChange={handleChange} name='behance' type='url' placeholder={user.behance} />
          </fieldset>
        </section>
        <button className='edit-button'>Guardar cambios</button>
      </form>
    </>
  )
}
