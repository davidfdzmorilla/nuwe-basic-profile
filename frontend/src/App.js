

import { useUser } from './hooks/hooks'

import { HeaderFullDesktop } from './components/userProfile/HeaderFullDesktop'
import Login from './components/auth/Login'
import { Header } from './components/userProfile/Header'
import Modal from './components/modal/Modal'
import { Main } from './components/userProfile/Main'

import './App.css'

function App() {

  const user = useUser()


  return (
    <div className="App">
      <Modal />
      {!user ? <Login /> :
        <>
          <Header />
          <HeaderFullDesktop />
          <Main />
        </>
      }
    </div>
  )
}

export default App
