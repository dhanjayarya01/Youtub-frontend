import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ApiProvider from './ApiServer/ApiProvider.jsx'
import App from './App.jsx'
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
    {/* <RouterProvider router={router} /> */}
    
    <App/>
    </ApiProvider>
  </React.StrictMode>
)
