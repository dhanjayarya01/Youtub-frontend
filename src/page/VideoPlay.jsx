import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import VideoDetail from '../component/VideoDetail'

function VideoPlay() {

  const[video,setVideo]=useState({})
  const{apiContext,setCurrentroutename}=useContext(ApiContext)
  const{videoId}=useParams()
  const getvideobyId=async()=>{
    const Video = await apiContext.getVideoById(videoId);
    setVideo(Video.data[0]);
  }
  useEffect(()=>{
    console.log("videoplay call",location)
    getvideobyId()
},[videoId])


  return (
    
    <div className=' h-screen w-[75rem]'>
      
      <div className= 'flex w-[60%] rounded-2xl bg-yellow-300 h-[74%]'>
    <video controls autoPlay className='w-full rounded-2xl h-[100%]'>
    {video.videoFile ?
          <source src={video.videoFile} type="video/mp4" />
          : null
        }
        </video>    </div>
     <VideoDetail videodetail={video} avatar={video?.owner?.avatar}/>
    
    
    </div>
    
    
  )
}

export default VideoPlay