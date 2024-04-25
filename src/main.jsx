import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ApiProvider from './ApiServer/ApiProvider.jsx'
import App from './App.jsx'
import './App.css'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
    {/* <RouterProvider router={router} /> */}
    
    <App/>
    <ToastContainer
position="top-rightx"
autoClose={3000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

    </ApiProvider>
  </React.StrictMode>
)
