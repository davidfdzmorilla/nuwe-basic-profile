
import { useEffect, useState } from 'react'
import { useSetModal } from '../../../../hooks/hooks'

import { SiCss3, SiSass, SiAngular, SiReact, SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, SiMongodb, SiAmazonaws, SiHtml5 } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { FiEdit3, FiCode } from 'react-icons/fi'

import { FormStack } from '../../forms/formStack/FormStack'

import './Stack.css'

export const Stack = ({ stack, reload, setReload }) => {

  const setModal = useSetModal()

  const [hardSkills, setHarrdSkills] = useState()

  useEffect(() => {
    stack && setHarrdSkills(stack.split(','))
  }, [stack])

  const getIcons = (stack, i) => {
    const color = '#14151f'
    switch (true) {
      case stack === 'html5':
        return <SiHtml5 style={{ backgroundColor: '#d74824', color }} className='stack-item' key={i} />
      case stack === 'css3':
        return <SiCss3 style={{ backgroundColor: '#0172bd', color }} className='stack-item' key={i} />
      case stack === 'javascript':
        return <SiJavascript style={{ backgroundColor: '#ead41c', color }} className='stack-item' key={i} />
      case stack === 'sass':
        return <SiSass style={{ backgroundColor: '#c36291', color }} className='stack-item' key={i} />
      case stack === 'angular':
        return <SiAngular style={{ backgroundColor: '#d3002f', color }} className='stack-item' key={i} />
      case stack === 'react':
        return <SiReact style={{ backgroundColor: '#5cd0ee', color }} className='stack-item' key={i} />
      case stack === 'typescript':
        return <SiTypescript style={{ backgroundColor: '#0074c2', color }} className='stack-item' key={i} />
      case stack === 'python':
        return <SiPython style={{ backgroundColor: '#417dad', color }} className='stack-item' key={i} />
      case stack === 'php':
        return <SiPhp style={{ backgroundColor: '#828cb4', color }} className='stack-item' key={i} />
      case stack === 'mysql':
        return <SiMysql style={{ backgroundColor: '#e68a10', color }} className='stack-item' key={i} />
      case stack === 'mongodb':
        return <SiMongodb style={{ backgroundColor: '#49aa3a', color }} className='stack-item' key={i} />
      case stack === 'amazonaws':
        return <SiAmazonaws style={{ backgroundColor: '#f29100', color }} className='stack-item' key={i} />
      case stack === 'nodejs':
        return <IoLogoNodejs style={{ backgroundColor: '#398037', color }} className='stack-item' key={i} />
      case stack === 'demo':
        return <FiCode className='stack-item' key={i} />
      default:
        break;
    }
  }

  return (
    <fieldset className='stack-fieldset'>
      <legend>Stack</legend>
      <section className='stack-container'>
        <FiEdit3 className='pencil-icon' onClick={() => setModal(<FormStack hardSkills={hardSkills} reload={reload} setReload={setReload} />)} />
        {hardSkills?.map((skill, i) => {
          return (
            getIcons(skill, i)
          )
        })}
      </section>
    </fieldset>
  )

}
