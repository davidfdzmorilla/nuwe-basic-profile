
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';



export const FormStack = ({ hardSkills }) => {

  const [skillSearch, setSkillSearch] = useState(null)
  const [newSkills, setNewSkills] = useState([...hardSkills])
  console.log(newSkills)

  const skillsItems = ['css3', 'sass', 'angular', 'react', 'javascript', 'typescript', 'python', 'php', 'mysql', 'mongodb', 'amazonaws']

  const searchRes = skillsItems.filter((name) => {
    let finalRes = name.toLowerCase()
    return finalRes.includes(skillSearch)
  })

  const handleChange = ({ target }) => {

    const { value } = target

    setSkillSearch(value)

  }

  const handleRemove = i => {

    // setNewSkills(newSkills.splice(i, newSkills.length - 1))

  }


  return (
    <form className='form-stack'>
      <h3>Stack</h3>
      <p>Aquí podrás definir tu stack de hard skills con las habilidades que utilizas frecuentemente.</p>
      <article className='stack-container'>
        {/* COINCIDENCIAS DE BUSQUEDA */}
        {skillSearch?.length > 0 &&
          <ul className='skills-match-container'>
            {searchRes?.map((item, i) => {
              return (
                <li onClick={() => setNewSkills([...newSkills, item.toLocaleLowerCase()])} key={i}>{item.toLocaleUpperCase()}</li>
              )
            })}
          </ul>
        }
        <ul className='skills-container'>
          {newSkills.map((skill, i) => {
            return (
              <li className='skill-item' key={i}>
                <span>{skill}</span>
                <AiFillCloseCircle onClick={() => handleRemove(i)} />
              </li>
            )
          })}
          <li>
            <input type='text' name='newSkill' onChange={handleChange} placeholder='Introduce nueva skill...' />
          </li>
        </ul>
      </article>
      <button className='save-button'>Guardar</button>
    </form>
  )
}
