import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './Application'
import './styles/index.css'
import './styles/variables.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
)
