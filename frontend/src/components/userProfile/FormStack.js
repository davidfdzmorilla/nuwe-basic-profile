
import { AiFillCloseCircle } from 'react-icons/ai';



export const FormStack = ({ stacks }) => {
  return (
    <form>
      <h3>Stack</h3>
      <p>Aquí podrás definir tu stack de hard skills con las habilidades que utilizas frecuentemente.</p>
      <article>
        {stacks.map((skill, i) => {
          return (
            <div className='skill-item' key={i}>
              <p>{skill}</p>
              <AiFillCloseCircle />
            </div>
          )
        })}
      </article>
    </form>
  )
}
