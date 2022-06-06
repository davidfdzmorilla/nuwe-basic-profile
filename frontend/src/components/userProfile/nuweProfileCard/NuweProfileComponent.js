import { RadarHardSkills } from "./RadarHardSkills"
import { RadarSoftSkills } from "./RadarSoftSkills"



export const NuweProfileComponent = () => {
  return (
    <article className='card-newe-profile'>
      {/* CARD RADAR HARD SKILLS */}
      <RadarHardSkills />
      {/* CARD RADAR SOFT SKILLS*/}
      <RadarSoftSkills />
    </article>
  )
}
