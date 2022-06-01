import { HiMenuAlt2 } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';

import '../style/Header.css'


export const Header = () => {
  return (
    <header className='header'>
      {/* Burguer menu */}
      <HiMenuAlt2 />
      {/* Logo */}
      <div className='logo-container'>
        <img src='Nuwe_Mono1.png' alt='logo' className='logo' />
        <img src='Nuwe_Letters.png' alt='logo-text' className='text-logo' />
      </div>
      {/* Ajustes */}
      <FiSettings />
    </header>
  )
}
