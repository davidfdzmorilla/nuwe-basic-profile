

import '../../../style/FormTimelineCv.css'

export const FormTimelineCv = () => {
  return (
    <form className='
    '>
      <input type='text' placeholder='Título*' />
      <input type='text' placeholder='Enlace(No requerido)' />
      <textarea placeholder='Descripción*' />
      <div className='buttons-container' >
        <button>Guardar</button>
        <button>Cancelar</button>
      </div>
    </form>
  )
}
