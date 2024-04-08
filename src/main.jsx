import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route ,RouterProvider,createBrowserRouter,createRoutesFromElements} from "react-router-dom"
import Signup from './component/Signup.jsx'
import Login from './component/Login.jsx'
import ApiProvider from './ApiServer/ApiProvider.jsx'
import Home from './component/Home.jsx'
const router=createBrowserRouter(

  createRoutesFromElements(
    <>

    <Route path='/' element={<Signup/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='Header' element={<Home/>} />
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
    <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
)
