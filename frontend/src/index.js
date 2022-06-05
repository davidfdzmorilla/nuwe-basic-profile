import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducer/reducer'
import { Provider } from 'react-redux'

import App from './App'

import './style/index.css'

const localStorageMiddleware = store => next => action => {
  let result = next(action)
  localStorage.setItem('session', JSON.stringify(store.getState().user))
  return result
}

const saved = localStorage.getItem('session')
const initialStore = { user: saved ? JSON.parse(saved) : undefined }
const store = createStore(rootReducer, initialStore, applyMiddleware(localStorageMiddleware))


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
