import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route ,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
import ApiProvider from './ApiServer/ApiProvider.jsx'
import Home from './component/Home.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
    {/* <RouterProvider router={router} /> */}
    <App/>
    </ApiProvider>
  </React.StrictMode>
)
