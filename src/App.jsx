import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import AuthLayout from './ApiServer/Route/AuthLayout';
import PageLayout from './ApiServer/Route/PageLayout';

import ApiContext from './ApiServer/ApiContext';
import { useContext } from 'react';
function App() {

  const {apiContext,isLoggedIn,setIsLoggedIn}=useContext(ApiContext)
    
  const getUser=async()=>{
    const data= await apiContext.getCurrentUser()
    if(data){
      console.log(data)
      setIsLoggedIn(true)
    }
  }

  useEffect(()=>{
    console.log("hs",isLoggedIn)
    getUser()

  },[])
  return (
    <Router>
      <Routes>

        {!isLoggedIn ? <Route path="/" element={<AuthLayout/>}>
        <Route path="" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        </Route> 
        
        
        :<Route path="/" element={<PageLayout />}> 
          <Route path="" element={<Home/>}/>
        </Route>}
      
  


  
      </Routes>
    </Router>
  );
}

export default App;

