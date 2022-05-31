import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);




export const RadarSoftSkills = () => {

  const data = {
    labels: ['4 / 5', '4 / 5', '4 / 5', '4 / 5', '4 / 5'],
    datasets: [
      {
        label: 'Puntuaciones obtenidas de los retos grupales',
        data: [4, 4, 4, 4, 4],
        backgroundColor: '#a78e4cb6',
        borderColor: 'orange',
        borderWidth: 1,
      },
    ],
  };

  return (
    <article className='radar-skills-card'>
      <Radar data={data} />
    </article>
  )
}
