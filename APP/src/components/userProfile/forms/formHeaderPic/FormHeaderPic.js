
import { useEffect, useState } from 'react'
import { useSetModal } from '../../../../hooks/hooks'

import Loading from '../../../loading/Loading'

import './FormHeaderPic.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL
const SERVER_UNSPLASH = process.env.REACT_APP_SERVER_UNPLASH
const UNSLASH_API_KEY = process.env.REACT_APP_UNSLASH_API_KEY

export const FormHeaderPic = ({ user, reload, setReload }) => {

  const defectQuery = 'code'

  const [images, setImages] = useState([])
  const [query, setQuery] = useState(defectQuery)
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const setModal = useSetModal()

  const URL = `${SERVER_UNSPLASH}/search/photos?page=${page}&query=${query || defectQuery}&client_id=${UNSLASH_API_KEY}`

  useEffect(() => {

    const loadData = async () => {
      const res = await fetch(URL)
      const data = await res.json()
      setImages(data)
      setIsLoading(true)
    }

    loadData()
  }
    , [URL, query, page, isLoading])

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
      {isLoading ?
        <>
          <h3>Imagen de portada</h3>
          <form className='form' onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' placeholder='Buscar...' />
          </form>
          <section className='images-container'>
            {images.results.length > 0 ? images.results.map(image => {
              return (
                <img onClick={() => onChangePic(image.urls.full)} src={image.urls.full} key={image.id} alt={image.description} />
              )
            }) :
              <h3>No se han encontrado resultados. 😞</h3>
            }
          </section>
          <div className='buttons-container'>
            {page > 1 &&
              <button onClick={() => setPage(page - 1)}>Anterior</button>
            }
            <span>{images.results.length > 0 && page}</span>
            {images.total_pages > 1 && page <= images.total_pages &&
              <button onClick={() => setPage(page + 1)}>Siguiente</button>
            }
          </div>
        </> :
        <Loading />
      }
    </article>
  )

}
