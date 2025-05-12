import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // TODO: strictmode disabled to avoid double rendering of codemirror component, figure out better solution
  // <StrictMode>
    <App />
  //</StrictMode>,
)
