
import { SiCss3, SiSass, SiAngular, SiReact, SiJavascript, SiTypescript, SiPython, SiPhp, SiMysql, SiMongodb, SiAmazonaws } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { FiEdit3 } from 'react-icons/fi';
import { useSetModal } from '../../hooks/hooks';
import { FormStack } from './FormStack';


export const Stacks = ({ userData }) => {

  const setModal = useSetModal()


  const stacks = [userData.stack1, userData.stack2, userData.stack3, userData.stack4, userData.stack5, userData.stack6, 'mysql', 'react']

  const getIcons = (stack, i) => {
    switch (true) {
      case stack === 'css3':
        return <SiCss3 className='stack-item' key={i} />
      case stack === 'javascript':
        return <SiJavascript className='stack-item' key={i} />
      case stack === 'sass':
        return <SiSass className='stack-item' key={i} />
      case stack === 'angular':
        return <SiAngular className='stack-item' key={i} />
      case stack === 'react':
        return <SiReact className='stack-item' key={i} />
      case stack === 'typescript':
        return <SiTypescript className='stack-item' key={i} />
      case stack === 'python':
        return <SiPython className='stack-item' key={i} />
      case stack === 'php':
        return <SiPhp className='stack-item' key={i} />
      case stack === 'mysql':
        return <SiMysql className='stack-item' key={i} />
      case stack === 'mongodb':
        return <SiMongodb className='stack-item' key={i} />
      case stack === 'aws':
        return <SiAmazonaws className='stack-item' key={i} />
      case stack === 'nodejs':
        return <IoLogoNodejs className='stack-item' key={i} />
      default:
        break;
    }
  }

  return (
    <fieldset>
      <legend>Stack</legend>
      <section className='stack-container'>
        <FiEdit3 className='pencil-icon' onClick={() => setModal(<FormStack stacks={stacks} />)} />
        {stacks?.map((stack, i) => {
          return (
            getIcons(stack, i)
          )
        })}
      </section>
    </fieldset>
  )
}
