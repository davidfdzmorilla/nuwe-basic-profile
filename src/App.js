
import { Header } from './components/Header'
import { PersonalDataComponent } from './components/PersonalDataComponent'
import { JobPreferencesComponent } from './components/JobPreferencesComponent'
import { NeweProfileComponent } from './components/NeweProfileComponent'
import Modal from './components/modal/Modal'
import { saveInStorage } from './helpers/saveInStorage'

import users from './data/users.json'

import './App.css'
import { useEffect, useState } from 'react'
import { HeaderFullDesktop } from './components/HeaderFullDesktop'


function App() {



  !localStorage.getItem("user") && saveInStorage('user', { ...users[0] })
  let userStorage = JSON.parse(localStorage.getItem('user'))


  const [user, setUser] = useState(userStorage)

  useEffect(() => {
    setUser(userStorage)

  }, [])




  return (
    <div className="App">
      {/* Aquí va el header */}
      <Header />
      <Modal />
      <HeaderFullDesktop />
      <main>
        {/* Card de datos de perfil */}
        <PersonalDataComponent user={user} setUser={setUser} />
        {/* Card preferencias laborales */}
        <JobPreferencesComponent user={user} setUser={setUser} />
        {/* Card perfil Newe */}
        <NeweProfileComponent user={user} />
      </main>
    </div>
  )
}

export default App
