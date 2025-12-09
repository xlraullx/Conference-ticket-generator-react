import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import './index.css'
import Home from './routes/home.jsx'
import TicketPage from './routes/ticket.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/ticketPage" element={<TicketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
