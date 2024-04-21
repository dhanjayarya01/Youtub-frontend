import React from 'react'
import { useLocation } from 'react-router-dom'
import VideosCard from '../../component/VideosCard'
export default function ChannelVideo() {

  const location=useLocation()
  const channelvideo=location.state

  
  return (
    <div className="text-white  mb-20 sm:m-0 max-h-screen w-[74rem] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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
   </div> 
)
}
