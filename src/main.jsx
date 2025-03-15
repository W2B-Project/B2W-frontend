import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <StrictMode>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </StrictMode>
  </BrowserRouter>
  ,
)
