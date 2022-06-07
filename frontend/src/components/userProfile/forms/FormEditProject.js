
import { useState } from 'react'
import { useSetModal, useUser } from '../../../hooks/hooks'

import '../../../style/FormEditProject.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


export const FormEditProject = ({ id, title, link, description, reload, setReload }) => {

  const user = useUser()
  const setModal = useSetModal()

  const [form, setForm] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    const res = await fetch(SERVER_URL + '/users/project/' + id, {
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
    const { value, name } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit} className='form-edit-project-container'>
      <input minLength={2} maxLength={50} onChange={handleChange} name='title' type='text' placeholder={title} />
      <input onChange={handleChange} name='link' type='url' placeholder={link} />
      <textarea minLength={20} maxLength={255} onChange={handleChange} name='description' placeholder={description} />
      <div className='buttons-container'>
        <button>Editar</button>
        <button>Cancelar</button>
      </div>
    </form>
  )
}
