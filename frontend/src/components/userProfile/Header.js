import { HiMenuAlt2 } from 'react-icons/hi';
import { BiExit } from 'react-icons/bi';

import '../../style/Header.css'
import { Logo } from '../Logo/Logo';
import { useSetUser } from '../../hooks/hooks';


export const Header = () => {

  const setUser = useSetUser()

  return (
    <header className='header'>
      {/* Burguer menu */}
      <HiMenuAlt2 />
      {/* Logo */}
      <Logo />
      {/* Ajustes */}
      <BiExit onClick={() => setUser(null)} />
    </header>
  )
}
