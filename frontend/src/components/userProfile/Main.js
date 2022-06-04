

import { JobPreferencesComponent } from './JobPreferencesComponent'
import { NeweProfileComponent } from './NeweProfileComponent'
import { PersonalDataComponent } from './PersonalDataComponent'

export const Main = () => {
  return (
    <main>
      {/* Card de datos de perfil */}
      <PersonalDataComponent />
      {/* Card preferencias laborales */}
      <JobPreferencesComponent />
      {/* Card perfil Newe */}
      <NeweProfileComponent />
    </main>
  )
}
