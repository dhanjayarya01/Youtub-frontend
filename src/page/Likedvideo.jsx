import React, { useEffect,useState,useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import VideosCard from '../component/VideosCard'
import VideoCardSkeleton from '../skeleton/VideoCardSkeleton'

function Likedvideo() {

  const {apiContext}=useContext(ApiContext)
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);


  const getlikedvideo=async()=>{
   const likedvideo= await apiContext.getLikedVideos()
   console.log(likedvideo.data[0].likedVideo)
   setVideos(likedvideo.data)
   setLoading(false)
  }

  useEffect(()=>{
    getlikedvideo();
  },[])

  console.log()
  return (

    <div className="text-white  mb-20 sm:m-0 max-h-screen w-[74rem] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
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
                  
                }      Likedvideo</div>
  )
}

export default Likedvideo