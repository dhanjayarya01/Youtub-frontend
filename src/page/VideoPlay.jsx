import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'

function VideoPlay() {
  const[video,setVideo]=useState({})
  const{apiContext}=useContext(ApiContext)
  const{videoId}=useParams()
     
 
  const getvideobyId=async()=>{
    const Video = await apiContext.getVideoById(videoId);
    setVideo(Video);
  }
  useEffect(()=>{
    getvideobyId()
},[videoId])


  console.log("video set",video)

  return (
    
    <div className=' bg-red-900 overflow-scroll no-scrollbar w-full'>
      
    <div className= 'flex w-[60%] bg-yellow-300 h-[70%]'>
    <video controls autoPlay className='w-full h-full'>
      
    { video && video.data && video.data[0] && video.data[0].videoFile ?
          <source src={video.data[0].videoFile} type="video/mp4" />
          : null
        }
        </video>    </div>
    <div className='w-[80%] h-full'></div>
    </div>
    
    
  )
}

export default VideoPlay