import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Home from "./page/Home"
import Signup from './component/Signup';
import Likedvideo from './page/Likedvideo';
import Subscription from './page/Subscription';
import Logout from './page/Logout'
import Yourchannel from './page/Yourchannel';
import History from './page/History';

function App() {



 
  return (
    <Router>
       <Sidebar>
      <Routes>
        {/* {!isLoggedIn ? <Route path="/" element={<AuthLayout/>}>
        <Route path="" element={<Signup />}/>
        <Route path="/login" element={<Login/>}/>
        </Route>  */}
        
        
          <Route path="/" element={<Home/>}/>
          <Route path="/likedvideo" element={<Likedvideo/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/yourchannel" element={<Yourchannel/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/Signup" element={<Signup/>}/>
          
      
  


  
      </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;

