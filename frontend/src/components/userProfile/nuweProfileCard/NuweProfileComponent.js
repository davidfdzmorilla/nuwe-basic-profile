import { RadarHardSkills } from "./RadarHardSkills"
import { RadarSoftSkills } from "./RadarSoftSkills"



export const NuweProfileComponent = () => {
  return (
    <article className='newe-profile-card'>
      {/* CARD RADAR HARD SKILLS */}
      <RadarHardSkills />
      {/* CARD RADAR SOFT SKILLS*/}
      <RadarSoftSkills />
    </article>
  )
}
