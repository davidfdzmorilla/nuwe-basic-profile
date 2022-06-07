
import { useState } from 'react'
import { useSetModal } from '../../../hooks/hooks'

import '../../../style/FormTimelineCv.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL



export const FormTimelineCv = ({ user, reload, setReload }) => {

  const setModal = useSetModal()

  const [form, setForm] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    const res = await fetch(SERVER_URL + '/users/create-project', {
      method: 'POST',
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
    <form onSubmit={handleSubmit} className='form-timeline'>
      <input name='title' max={80} min={5} onChange={handleChange} type='text' placeholder='Título*' required />
      <input name='link' max={255} min={10} onChange={handleChange} type='text' placeholder='Enlace(No requerido)' />
      <textarea name='description' max={255} min={10} onChange={handleChange} placeholder='Descripción*' required />
      <div className='buttons-container' >
        <button>Guardar</button>
        <button onClick={() => setModal(null)}>Cancelar</button>
      </div>
    </form>
  )
}
