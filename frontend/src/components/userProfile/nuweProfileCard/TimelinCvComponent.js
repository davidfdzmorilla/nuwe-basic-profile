
import { useSetModal } from "../../../hooks/hooks"
import { FormTimelineCv } from "../forms/FormTimelineCv"


export const TimelinCvComponent = () => {

  const setModal = useSetModal()

  return (
    <section className='timeline-container'>
      <button onClick={() => setModal(<FormTimelineCv />)} className='add-experience-button'>AÑADIR EXPERIENCIA</button>
    </section>
  )
}
