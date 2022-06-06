
import { VscGithub } from 'react-icons/vsc'
import { AiOutlineLinkedin } from 'react-icons/ai'

import '../../style/Footer.css'


export const Footer = () => {
  return (
    <footer className='footer'>
      <h3>
        <a href='https://davidfdzmorilla.dev' target='_blank' rel='noreferrer nopener'>
          davidfdzmorilla.dev
        </a>
      </h3>
      <section>
        <a href='https://github.com/davidfdzmorilla/nuwe-basic-profile' target='_blank' rel='noreferrer nopener'>
          <VscGithub />
        </a>
        <a href='https://linkedin.com/in/davidfdzmorilla' target='_blank' rel='noreferrer nopener'>
          <AiOutlineLinkedin />
        </a>
      </section>
    </footer>
  )
}
