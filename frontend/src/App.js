
import { Header } from './components/userProfile/Header'
import { PersonalDataComponent } from './components/userProfile/PersonalDataComponent'
import { JobPreferencesComponent } from './components/userProfile/JobPreferencesComponent'
import { NeweProfileComponent } from './components/userProfile/NeweProfileComponent'
import Modal from './components/modal/Modal'
import { saveInStorage } from './helpers/saveInStorage'

import users from './data/users.json'

import './App.css'
import { HeaderFullDesktop } from './components/userProfile/HeaderFullDesktop'
import { useUser } from './hooks/hooks'
import Login from './components/auth/Login'


function App() {

  const user = useUser()


  return (
    <div className="App">
      {!user ? <Login /> :
        <>
          <Header />
          <Modal />
          <HeaderFullDesktop />
          <main>
            {/* Card de datos de perfil */}
            <PersonalDataComponent />
            {/* Card preferencias laborales */}
            <JobPreferencesComponent />
            {/* Card perfil Newe */}
            <NeweProfileComponent />
          </main>
        </>
      }
    </div>
  )
}

export default App
