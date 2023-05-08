import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { DataProvider } from './context/Context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Router} />
    </DataProvider>
  </React.StrictMode>,
)
