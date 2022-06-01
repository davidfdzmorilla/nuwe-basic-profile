import { HiMenuAlt2 } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

import '../../style/Header.css'
import { Logo } from '../Logo/Logo';


export const Header = () => {
  return (
    <header className='header'>
      {/* Burguer menu */}
      <HiMenuAlt2 />
      {/* Logo */}
      <Logo />
      {/* Ajustes */}
      <FiSettings />
    </header>
  )
}
