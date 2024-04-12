import React, { Profiler, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Home from "./page/Home"
import Signup from './component/Signup';
import Likedvideo from './page/Likedvideo';
import Logout from './component/Logout'
import Yourchannel from './page/Yourchannel';
import History from './page/History';
import Myprofile from './page/Myprofile';
import Login from './component/Login';
import VideoPlay from './page/VideoPlay';

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

          <Route path="/myprofile" element={<Myprofile/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/v/:videoId" element={<VideoPlay/>}/>
          
      
  


  
      </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;

