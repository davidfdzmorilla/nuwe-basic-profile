
import { useUser } from './hooks/hooks'

import { HeaderFullDesktop } from './components/pages/HeaderFullDesktop'
import { Login } from './components/auth/Login'
import { Header } from './components/pages/Header'
import { Modal } from './components/modal/Modal'
import { Main } from './components/pages/Main'

import './style/App.css'

export const App = () => {

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
