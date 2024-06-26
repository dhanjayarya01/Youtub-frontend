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
import Playlist from './page/Playlist';
import About from './page/About';
import Subscription from './page/Subscription';
import { toast } from 'react-toastify';

function App() {
 const { apiContext, setCurrentuserinfo, isLoggedIn, setIsLoggedIn } = useContext(ApiContext);
 const [isSmallScreen, setIsSmallScreen] = useState(true);

 const getCurrentUser = async () => {
   const user = await apiContext.getCurrentUser();
   setIsLoggedIn(true);
   setCurrentuserinfo(user.data);
 }

 const warning=()=>{

   if(window.innerWidth <=968){
     toast.error('Your viewport is small. Consider using a larger device for the best experience',{
      autoClose:false
     })
     setIsSmallScreen(false);
    }else{
      setIsSmallScreen(true)
    }
  }
  useEffect(()=>{
    warning()
  })

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
          <Route path="playlist" element={<Playlist/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="subscription/:channelId" element={<Subscription/>}/>
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
