
import { useState } from 'react'
import { useSetUser } from '../../hooks/hooks'

import { Navbar } from '../navBar/NavBar'
import { Logo } from '../logo/Logo'

import { BiExit } from 'react-icons/bi'

import '../../style/Header.css'

export const Header = () => {

  const setUser = useSetUser()

  const [sidebar, setSidebar] = useState(false)

  return (
    <header className='header'>
      {/* Burguer menu */}
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      {/* Logo */}
      <Logo />
      {/* Salir */}
      <BiExit onClick={() => setUser(null)} />
    </header>
  )
}
