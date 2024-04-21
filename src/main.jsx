import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GetTasksContextProvider } from './contexts/getTasksContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetTasksContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GetTasksContextProvider>
  </React.StrictMode>,
)
