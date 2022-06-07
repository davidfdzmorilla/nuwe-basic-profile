
import { useEffect, useState } from "react"
import { useSetModal, useUser } from "../../../hooks/hooks"
import { FormTimelineCv } from "../forms/FormTimelineCv"

import { CgTrash } from 'react-icons/cg';
import { MdModeEditOutline } from 'react-icons/md';
import { FormDeleteProject } from "../forms/FormDeleteProject";
import { FormEditProject } from "../forms/FormEditProject";

const SERVER_URL = process.env.REACT_APP_SERVER_URL



export const TimelinCvComponent = () => {

  const user = useUser()

  const setModal = useSetModal()
  const [userProjects, setUserProjects] = useState([])
  const [error, setError] = useState(null)
  const [reload, setReload] = useState(false)

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
  }, [reload, user])


  return (
    <section className='timeline-container'>
      <button onClick={() => setModal(<FormTimelineCv user={user} reload={reload} setReload={setReload} />)} className='add-experience-button'>AÑADIR EXPERIENCIA</button>
      <div className="projects-container">
        {userProjects.length > 0 && userProjects.map(({ id, title, link, description }, project) => {
          return (
            <article className="project-card" key={id}>
              <div className="data-container">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target='_blank' rel='noreferrer nopener'>{link}</a>
              </div>
              <div className="buttons-container">
                <button><CgTrash onClick={() => setModal(<FormDeleteProject title={title} id={id} reload={reload} setReload={setReload} />)} /></button>
                <button><MdModeEditOutline onClick={() => setModal(<FormEditProject id={id} title={title} link={link} description={description} reload={reload} setReload={setReload} />)} /></button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
