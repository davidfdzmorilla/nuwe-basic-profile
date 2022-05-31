import './Switch.css'

function Switch({ on }) {
  return (
    <div className={'switch ' + (on ? 'on' : 'off')} />
  )
}

export default Switch
