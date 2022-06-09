
import { useUser } from './hooks/hooks'

import { HeaderFullDesktop } from './components/pages/headerFullDesktop/HeaderFullDesktop'
import { Footer } from './components/pages/footer/Footer'

import { Login } from './components/auth/login/Login'
import { Header } from './components/pages/header/Header'
import { Modal } from './components/modal/Modal'
import { Main } from './components/pages/main/Main'

import './App.css'

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
      <Footer />
    </div>
  )

}
