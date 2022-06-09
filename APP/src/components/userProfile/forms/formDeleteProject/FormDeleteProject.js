
import { useSetModal, useUser } from '../../../../hooks/hooks'

import './FormDeleteProject.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


export const FormDeleteProject = ({ title, id, reload, setReload }) => {

  const setModal = useSetModal()
  const user = useUser()

  const handleRemove = async id => {
    const res = await fetch(SERVER_URL + '/users/project/delete/' + id, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + user.token
      }
    })

    if (res.ok) {
      setModal(null)
      setReload(!reload)
    }
  }


  return (
    <article className='form-delete-container'>
      <h3>Estas a punto de eliminar {title}</h3>
      <p>Esta acción no se puede deshacer.</p>
      <div className="buttons-container">
        <button onClick={() => setModal(null)}>Cancelar</button>
        <button onClick={() => handleRemove(id)}>Eliminar</button>
      </div>
    </article>
  )
}
