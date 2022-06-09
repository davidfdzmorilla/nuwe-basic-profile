import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2'

import { IoLogoNodejs } from 'react-icons/io'

import { useUser } from '../../../../hooks/hooks'


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)




export const RadarHardSkills = () => {

  const user = useUser()

  const data = {
    labels: ['1200 pts', '1200 pts', '1200 pts', '1200 pts', '1200 pts'],
    datasets: [
      {
        label: `Top 5 hard skills de ${user.name}`,
        data: [1200, 1200, 1200, 1200, 1200],
        backgroundColor: '#6ab97267',
        borderColor: 'green',
        borderWidth: 2,
      },
    ],
  };

  return (
    <article className='radar-skills-card'>
      <Radar data={data} />
      <div className='others-skills-container'>
        <h3>Otras hard skills validadas</h3>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
        <div className='others-skills-card'>
          <IoLogoNodejs />
          <p>1200pts</p>
          <p>Top 10%</p>
        </div>
      </div>
    </article>
  )

}
