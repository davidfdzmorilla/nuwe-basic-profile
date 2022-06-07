
import { useEffect, useState } from 'react'
import { useSetModal } from '../../../hooks/hooks'

import { SiCss3, SiSass, SiAngular, SiReact, SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, SiMongodb, SiAmazonaws, SiHtml5 } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { FiEdit3, FiCode } from 'react-icons/fi'

import { FormStack } from '../forms/FormStack'

export const Stacks = ({ stack, reload, setReload }) => {

  const setModal = useSetModal()

  const [hardSkills, setHarrdSkills] = useState()

  useEffect(() => {
    stack && setHarrdSkills(stack.split(','))
  }, [stack])

  const getIcons = (stack, i) => {
    switch (true) {
      case stack === 'html5':
        return <SiHtml5 style={{ backgroundColor: '#f2f2f2', color: '#d84924' }} className='stack-item' key={i} />
      case stack === 'css3':
        return <SiCss3 style={{ backgroundColor: '#f2f2f2', color: '#0172bd' }} className='stack-item' key={i} />
      case stack === 'javascript':
        return <SiJavascript style={{ backgroundColor: '#f2f2f2', color: '#ead41c' }} className='stack-item' key={i} />
      case stack === 'sass':
        return <SiSass style={{ backgroundColor: '#f2f2f2', color: '#c36291' }} className='stack-item' key={i} />
      case stack === 'angular':
        return <SiAngular style={{ backgroundColor: '#f2f2f2', color: '#d3002f' }} className='stack-item' key={i} />
      case stack === 'react':
        return <SiReact style={{ backgroundColor: '#f2f2f2', color: '#5cd0ee' }} className='stack-item' key={i} />
      case stack === 'typescript':
        return <SiTypescript style={{ backgroundColor: '#f2f2f2', color: '#0074c2' }} className='stack-item' key={i} />
      case stack === 'python':
        return <SiPython style={{ backgroundColor: '#f2f2f2', color: '#417dad' }} className='stack-item' key={i} />
      case stack === 'php':
        return <SiPhp style={{ backgroundColor: '', color: '#828cb4' }} className='stack-item' key={i} />
      case stack === 'mysql':
        return <SiMysql style={{ backgroundColor: '#f2f2f2', color: '#e68a10' }} className='stack-item' key={i} />
      case stack === 'mongodb':
        return <SiMongodb style={{ backgroundColor: '#f2f2f2', color: '#49aa3a' }} className='stack-item' key={i} />
      case stack === 'amazonaws':
        return <SiAmazonaws style={{ backgroundColor: '#f2f2f2', color: '#f29100' }} className='stack-item' key={i} />
      case stack === 'nodejs':
        return <IoLogoNodejs style={{ backgroundColor: '#f2f2f2', color: '#398037' }} className='stack-item' key={i} />
      case stack === 'demo':
        return <FiCode className='stack-item' key={i} />
      default:
        break;
    }
  }

  return (
    <fieldset>
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
