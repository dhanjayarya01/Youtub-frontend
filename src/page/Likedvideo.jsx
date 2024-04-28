import React, { useEffect,useState,useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import VideosCard from '../component/VideosCard'
import VideoCardSkeleton from '../skeleton/VideoCardSkeleton'

function Likedvideo({noGrid}) {

  const {apiContext}=useContext(ApiContext)
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  const getlikedvideo=async()=>{
   const likedvideo= await apiContext.getLikedVideos()
   setVideos(likedvideo.data)
   setLoading(false)
  }

  useEffect(()=>{
    getlikedvideo();
  },[])

  return (

    <div className={`text-white   ${noGrid ? '':'mb-20 sm:m-0 max-h-screen w-[74rem] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1'} `}>
                  {
                    loading?<VideoCardSkeleton/>:
                    videos.map((video) => (
                      <VideosCard
                            key={video.likedVideo._id}
                            avatar={video.likedVideo.ownerDetails?.avatar}
                            duration={video.likedVideo.duration}
                            title={video.likedVideo.title}
                            thumbnail={video.likedVideo.thumbnail}
                            createdAt={video.likedVideo.createdAt}
                            views={video.likedVideo.views}
                            channelName={video.likedVideo.ownerDetails.username}
                            videoId={video.likedVideo._id}
                        />
                    ))
                  
                } 
        </div>
  )
}

export default Likedvideo