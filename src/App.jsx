import React, {  useEffect, useState } from 'react';
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
import { useContext } from 'react';
import ApiContext from './ApiServer/ApiContext';
import Userchannel from './page/channel/Userchannel';
import ChannelVideo from './page/channel/ChannelVideo';
import AuthLayout from './Route/AuthLayout';

function App() {
 const { apiContext, setCurrentuserinfo, isLoggedIn, setIsLoggedIn } = useContext(ApiContext);

 const getCurrentUser = async () => {
   const user = await apiContext.getCurrentUser();
   setIsLoggedIn(true);
   setCurrentuserinfo(user.data);
 }

 useEffect(() => {
   getCurrentUser();
 }, [isLoggedIn]);

 return (
   <Router>
     <Sidebar>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/:query" element={<Home />} />
         <Route path="/likedvideo" element={<Likedvideo />} />
         <Route path="/history" element={<History />} />
         <Route path="/yourchannel" element={<Yourchannel/>}>
          <Route path="channelvideo" element={<ChannelVideo/>}/>
          </Route>
         <Route path="/myprofile" element={<Myprofile />} />
         <Route path="/logout" element={<Logout />} />

         <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login/>} />
         

         <Route path="/channel/:username" element={<Userchannel />} />
         <Route path="/v/:videoId" element={isLoggedIn ? <VideoPlay /> : <Signup />} />
       </Routes>
     </Sidebar>
   </Router>
 );
}

export default App;
