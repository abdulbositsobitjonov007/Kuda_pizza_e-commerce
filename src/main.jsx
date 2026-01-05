import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChangeLang from './context/ChangeLang.jsx'
import ChangeCart from './context/ChangeCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeLang>
      <ChangeCart>
        <App />
      </ChangeCart>
    </ChangeLang>
  </StrictMode>,
)
