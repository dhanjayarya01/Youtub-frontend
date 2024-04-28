import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import VideoDetail from '../component/VideoDetail'
import Likedvideo from './Likedvideo'
import { useNavigate } from 'react-router-dom'
import Video from '../component/Video'
import VideoplaySkeleton from '../skeleton/VideoplaySkeleton'

function VideoPlay() {
   
  const navigate=useNavigate()
  const[video,setVideo]=useState({})
  const[isloading,setIsloading]=useState(false)

  
  const{apiContext,setCurrentroutename,setIsLoggedIn}=useContext(ApiContext)
  const{videoId}=useParams()

  const getvideobyId=async()=>{
    setIsloading(true)
    setIsLoggedIn(true)
    setVideo('')
    const Video = await apiContext.getVideoById(videoId);
   setIsloading(false)
    setVideo(Video.data[0]);
    
  }
  useEffect(()=>{
    getvideobyId()
  },[videoId])
  
  
  const handleClick=()=>{
    // window.location.reload()

//  window.location.reload();
}                    

  return (
    
    <div className='flex w-[75rem]'>
    {isloading ? <VideoplaySkeleton/> :
    <div className='h-screen w-[60%]'>
      
      {video && <Video video={video}/>}
     { video &&   <VideoDetail videodetail={video} avatar={video?.owner?.avatar}/>} 
    </div>}

    <div className='h-full  w-[37%] ml-6 sticky border-[0.01rem]  overflow-y-scroll no-scrollbar bg-[] rounded-2xl '>
         <div className='text-2xl sticky z-50 top-0 h-14 pt-3 bg-[white]'><span className='ml-5'>Videos that You have Liked</span></div>
          
          <div onClick={handleClick} className='flex-col  w-full'><Likedvideo noGrid={"1"}/></div>
    </div>




    </div>
    

    
    
  )
}

export default VideoPlay