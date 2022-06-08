
import { useState } from 'react'
import { useSetModal, useSetUser } from '../../hooks/hooks'

import { Logo } from '../logo/Logo.js'
import { Register } from './Register'

import './Login.css'

const SERVER_URL = process.env.REACT_APP_SERVER_URL


export const Login = () => {

  const setUser = useSetUser()
  const setModal = useSetModal()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [action, setAction] = useState('login')
  const [registerOk, setRegisterOk] = useState(null)


  const handleSubmit = async e => {
    e.preventDefault()

    const res = await fetch(SERVER_URL + '/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.ok) {
      const data = await res.json()
      setUser(data)
      setModal(false)
    } else if (res.status === 404) {
      setError(<p>Email no registrado</p>)
      setEmail('')
    } else if (res.status === 401) {
      setError(<p>Contraseña inválida</p>)
      setPassword('')
    } else if (res.status === 400) {
      setError(
        <p>Formato de email inválido</p>
      )
    } else {
      setError(<p>Error !!!</p>)
    }
  }

  return (
    <div className='body-login'>
      <Logo />
      {action === 'register' ? <Register setRegisterOk={setRegisterOk} setAction={setAction} /> :
        <>
          <form className="login" onSubmit={handleSubmit}>
            <label>
              Email
              <input name='email' type='email' placeholder='ejemplo@ejemplo.com...' value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              Contraseña
              <input name='contraseña' type='password' placeholder='contraseña...' value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button className='entrar-button'>Login</button>
            {error && <div className="error">{error}</div>}
          </form>
          {!registerOk ?
            <div>
              <p>¿No estás registrado?</p>
              <button onClick={() => setAction('register')} className='entrar-button'>Regístrate</button>
            </div> :
            <p className='register-ok'>{registerOk}</p>
          }
        </>
      }
    </div>
  )
}
