
import { useState } from "react";
import { useSetUser } from "../../hooks/hooks";

import { FiUser, FiCode } from "react-icons/fi";
import { MdWork, MdOutlineExitToApp } from "react-icons/md";
import { RiErrorWarningLine, RiDiscordFill, RiHomeLine } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";

import '../../style/HeaderFullDesktop.css'


export const HeaderFullDesktop = () => {

  const setUser = useSetUser()

  const [practiceItems, setPracticeItem] = useState('')
  const [show, setShow] = useState(false)

  const handlePractice = () => {

    setShow(!show)

    setPracticeItem(
      <>
        <button>Retos</button>
        <button>Eventos</button>
      </>
    )

  }

  return (
    <header className='header-full-desktop'>
      {/* Logo */}
      <div className='logo-container'>
        <img src='Nuwe_Mono1.png' alt='logo' className='logo' />
        <img src='Nuwe_Letters.png' alt='logo-text' className='text-logo' />
      </div>
      <menu>
        <div className='item-menu'>
          <RiHomeLine />
          <button>Panel Principal</button>
        </div>
        <div className='item-menu'>
          <FiUser />
          <button>Perfil</button>
        </div>
        <div className='item-menu item-practice'>
          <div onClick={handlePractice}>
            <FiCode />
            <button>Practica</button>
            <BiDownArrow />
          </div>
          {show && practiceItems}
        </div>
        <div className='item-menu'>
          <MdWork />
          <button>Empresas</button>
        </div>
        <div className='item-menu'>
          <RiErrorWarningLine />
          <button>Contacto</button>
        </div>
        <div className='item-menu'>
          <RiDiscordFill />
          <button>Discord</button>
        </div>
        <div className='item-menu'>
          <MdOutlineExitToApp />
          <button onClick={() => setUser(null)}>Cerrar Sesión</button>
        </div>
      </menu>
    </header >
  )
}
