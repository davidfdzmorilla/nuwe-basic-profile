
import { useEffect, useState } from "react"
import { useSetModal, useUser } from "../../../hooks/hooks"
import { FormTimelineCv } from "../forms/FormTimelineCv"

const SERVER_URL = process.env.REACT_APP_SERVER_URL



export const TimelinCvComponent = () => {

  const user = useUser()

  const setModal = useSetModal()
  const [userProjects, setUserProjects] = useState([])
  const [error, setError] = useState(null)

  console.log(userProjects)

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(SERVER_URL + '/users/projects', {
          headers: {
            'Authorization': 'Bearer ' + user.token
          }
        })

        const data = await response.json()
        setUserProjects(data)
        setError(null)
      } catch (error) {
        setError(error)
      }
    }
    loadData()
  }, [])


  return (
    <section className='timeline-container'>
      <button onClick={() => setModal(<FormTimelineCv />)} className='add-experience-button'>AÑADIR EXPERIENCIA</button>
      <div className="projects-container">
        {userProjects.length > 0 && userProjects.map(({ id, title, link, description }) => {
          return (
            <article className="project-card" key={id}>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target='_blank' rel='noreferrer nopener'>{link}</a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
