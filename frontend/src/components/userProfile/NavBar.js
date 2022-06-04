import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'

import './NavBar.css'

export default function Navbar({ sidebar, setSidebar }) {

    const toggleSidebar = () => setSidebar(prev => !prev)

    return (
        <section className='navbar-container'>
            <div className='navbar'>
                <span onClick={toggleSidebar}>{!sidebar ? <GiHamburgerMenu className='burger-icon' /> : <FaRegWindowClose className='close-icon' />}</span>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' >
                    <li className='navbar-toggle'>
                    </li>
                    <li><a href='https://linkedin/in/davidfdzmorilla' target='_blank' rel='noreferrer nopener'>Mi Linkedin</a></li>
                    <li><a href='https://github/davidfdzmorilla' target='_blank' rel='noreferrer nopener'>Mi GitHub</a></li>
                    <li><a href='https://davidfdzmorilla.dev' target='_blank' rel='noreferrer nopener'>davidfdzmorilla.dev</a></li>
                </ul>
            </nav>
        </section>
    )
}
