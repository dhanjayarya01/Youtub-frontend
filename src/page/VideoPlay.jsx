import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import VideoDetail from '../component/VideoDetail'
import Video from '../component/Video'

function VideoPlay() {
  const[video,setVideo]=useState({})
  const{apiContext}=useContext(ApiContext)
  const{videoId}=useParams()
     
 
  const getvideobyId=async()=>{
    const Video = await apiContext.getVideoById(videoId);
    setVideo(Video.data[0]);
  }
  useEffect(()=>{
    console.log("videoplay call")
    getvideobyId()
},[videoId])


  return (
    
    <div className=' h-screen w-full'>
      
    <Video video={video} />

     <VideoDetail videodetail={video} avatar={video?.owner?.avatar}/>
    
    
    </div>
    
    
  )
}

export default VideoPlay