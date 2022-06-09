
import './Switch.css'

export const Switch = ({ on, setSwitch, getSwitch }) => {

  return (
    <div onClick={() => setSwitch(!getSwitch)} className={'switch ' + (on ? 'on' : 'off')} />
  )

}
