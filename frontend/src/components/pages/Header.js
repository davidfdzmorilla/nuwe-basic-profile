import { BiExit } from 'react-icons/bi';

import { Logo } from '../logo/Logo';
import { useSetUser } from '../../hooks/hooks';
import { useState } from 'react';
import Navbar from '../navBar/NavBar';

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
      {/* Ajustes */}
      <BiExit onClick={() => setUser(null)} />
    </header>
  )
}
