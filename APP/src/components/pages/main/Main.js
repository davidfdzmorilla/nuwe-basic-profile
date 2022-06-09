
import { JobPreferencesComponent } from '../../userProfile/jobsPreferencesCard/JobPreferencesComponent'
import { NuweProfileCard } from '../../userProfile/nuweProfile/nuweProfileCard/NuweProfileCard'
import { PersonalDataComponent } from '../../userProfile/personalDataCard/personalDataComponent/PersonalDataComponent'

import './Main.css'

export const Main = () => {

  return (
    <main className='main'>
      {/* Card de datos de perfil */}
      <PersonalDataComponent />
      {/* Card preferencias laborales */}
      <JobPreferencesComponent />
      {/* Card perfil Newe */}
      <NuweProfileCard />
    </main>
  )

}
