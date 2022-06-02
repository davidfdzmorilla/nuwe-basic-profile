
import { useEffect, useState } from 'react'
import { useSetModal } from '../../hooks/hooks'

import '../../style/FormHeaderPic.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


export const FormHeaderPic = ({ user, reload, setReload }) => {

  const [images, setImages] = useState([])
  const [query, setQuery] = useState('code')
  const [page, setPage] = useState(1)

  const setModal = useSetModal()

  const API_KEY = 'PBUkRF0btDl28l8mjVnxVI0334aVuMYcLyW73MRMsc4'
  const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${API_KEY}`


  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setImages(data)
    }
    loadData()
  }
    , [URL, query, page])


  const handleSubmit = e => {
    e.preventDefault()
  }



  const handleChange = (e) => {
    setQuery(e.target.value)

  }

  const onChangePic = async headerPic => {
    const res = await fetch(SERVER_URL + '/users/', {
      method: 'PATCH',
      body: JSON.stringify({ headerPic }),
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


  return (
    <article className='form-header-pic'>
      <h3>Imagen de portada</h3>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' placeholder='Buscar...' />
      </form>
      <section className='images-container'>
        {images.results && images.results.map(image => {
          return (
            <img onClick={() => onChangePic(image.urls.full)} src={image.urls.full} key={image.id} alt={image.description} />
          )
        })}
      </section>
      <div className='buttons-container'>
        {page > 1 &&
          <button onClick={() => setPage(page - 1)}>Anterior</button>
        }
        <span>{page}</span>
        {images.total_pages > 1 && page <= images.total_pages &&
          <button onClick={() => setPage(page + 1)}>Siguiente</button>
        }
      </div>
    </article>
  )
}
