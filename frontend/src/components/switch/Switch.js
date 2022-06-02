import './Switch.css'

function Switch({ on, setSwitch, getSwitch }) {
  return (
    <div onClick={() => setSwitch(!getSwitch)} className={'switch ' + (on ? 'on' : 'off')} />
  )
}

export default Switch
