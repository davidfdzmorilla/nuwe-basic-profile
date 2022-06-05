
import { JobPreferencesComponent } from '../userProfile/jobsPreferencesCard/JobPreferencesComponent'
import { NeweProfileComponent } from '../userProfile/nuweProfileCard/NeweProfileComponent'
import { PersonalDataComponent } from '../userProfile/personalDataCard/PersonalDataComponent'

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
