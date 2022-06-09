import { RadarHardSkills } from "../graphics/RadarHardSkills"
import { RadarSoftSkills } from "../graphics/RadarSoftSkills"

import './NuweProfileComponent.css'



export const NuweProfileComponent = () => {
  return (
    <article className='newe-profile-component'>
      {/* CARD RADAR HARD SKILLS */}
      <RadarHardSkills />
      {/* CARD RADAR SOFT SKILLS*/}
      <RadarSoftSkills />
    </article>
  )
}
