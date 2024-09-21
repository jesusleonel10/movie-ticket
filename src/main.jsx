import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TicketProvider } from './context/ticket.jsx'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicketProvider>
      <App />
    </TicketProvider>
  </StrictMode>,
)
