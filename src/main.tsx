import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TodoContexProvider } from './store/TodoContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
    <TodoContexProvider>
     <App />
    </TodoContexProvider>
    </Router>
  
  </React.StrictMode>,
)
