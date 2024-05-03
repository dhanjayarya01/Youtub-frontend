import React from 'react'
import { useLocation } from 'react-router-dom'
import VideosCard from '../../component/VideosCard'
import { FaPlayCircle } from "react-icons/fa";

export default function ChannelVideo() {

  const location=useLocation()
  const channelvideo=location.state

  
  return (
    <>
  {!channelvideo ? (<div className=' w-full  h-[40%] flex flex-col items-center justify-center'>
      <div className='text-3xl text-red-400'><FaPlayCircle/></div>
      There are no videos available</div>):
 ( <div className="text-white  mb-20 sm:m-0 max-h-screen w-[100%] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
    {
    channelvideo.map((video) => (
      <VideosCard
      key={video._id}
      avatar={video.owner[0].avatar}
      duration={video.duration}
      title={video.title}
      thumbnail={video.thumbnail}
      createdAt={video.createdAt}
      views={video.views}
      channelName={video.owner[0].username}
      videoId={video._id}
      />
  ))
    }
  </div>) }
   </>
)
}
