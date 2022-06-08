
import { useState } from 'react'
import { useSetModal } from '../../../hooks/hooks'

import './FormData.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL

export const FormData = ({ user, reload, setReload, userData }) => {

  const [form, setForm] = useState({})
  const setModal = useSetModal()

  const handleSubmit = async e => {
    e.preventDefault()

    if (!form.avatar && !form.professionType && !form.professionLevel && !form.country && !form.city && !form.bio && !form.linkedin && !form.github && !form.gitlab && !form.behance) {
      setModal(null)
      return
    }

    const res = await fetch(SERVER_URL + '/users/', {
      method: 'PATCH',
      body: JSON.stringify({ ...form }),
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

  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
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
          <input onChange={handleChange} name='avatar' type='url' placeholder={userData.avatar} />
        </fieldset>
        <p>Al tener tus datos actualizados tienes mas probabilidades de que las empresas contacten contigo.</p>
        <section className='data-container'>
          <fieldset>
            <legend>Especialidad</legend>
            <input maxLength={50} minLength={2} onChange={handleChange} name='professionType' type='text' placeholder={userData.professionType} />
          </fieldset>
          <fieldset>
            <legend>Nivel</legend>
            <input minLength={2} maxLength={50} onChange={handleChange} name='professionLevel' type='text' placeholder={userData.professionLevel} />
          </fieldset>
          <fieldset>
            <legend>País</legend>
            <input minLength={2} maxLength={50} onChange={handleChange} name='country' type='text' placeholder={userData.country} />
          </fieldset>
          <fieldset>
            <legend>Ciudad</legend>
            <input minLength={2} maxLength={50} onChange={handleChange} name='city' type='text' placeholder={userData.city} />
          </fieldset>
        </section>
        <p>Aquí podrás añadir información personal que creas relevante. Comentanos quién eres, que cosas te gustan, etc.</p>
        <fieldset>
          <legend>Bio</legend>
          <textarea minLength={10} maxLength={600} onChange={handleChange} name='bio' type='text' placeholder={userData.bio} />
        </fieldset>
        <p>URL de tus redes sociales</p>
        <section className='social-container'>
          <fieldset>
            <legend>Linkedin</legend>
            <input onChange={handleChange} name='linkedin' type='url' placeholder={userData.linkedin} />
          </fieldset>
          <fieldset>
            <legend>GitHub</legend>
            <input onChange={handleChange} name='gitHub' type='url' placeholder={userData.github} />
          </fieldset>
          <fieldset>
            <legend>GitLab</legend>
            <input onChange={handleChange} name='gitLab' type='url' placeholder={userData.gitlab} />
          </fieldset>
          <fieldset>
            <legend>Behance</legend>
            <input onChange={handleChange} name='behance' type='url' placeholder={userData.behance} />
          </fieldset>
        </section>
        <button className='edit-button'>Guardar cambios</button>
      </form>
    </>
  )

}
