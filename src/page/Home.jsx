import React, { useEffect, useState,useCallback}from 'react';
import { useContext } from 'react';
import ApiContext from '../ApiServer/ApiContext';
import InfiniteScroll from '../component/InfiniteScroll';
import VideosCard from '../component/VideosCard';

function Home() {
  const { apiContext, setIsLoggedIn } = useContext(ApiContext);
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getVideos = async () => {
    try {
      const response = await apiContext.getAllVideos({ page: currentPage }); // Pass the current page to the backend
      setVideos(response.data.docs);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };


const [page, setPage] = useState(1);

  useEffect(() => {
    getVideos();
  }, [currentPage]); 

  console.log("hi",videos)
 

return (
           
            <div className= " text-white mb-20 sm:m-0 max-h-screen w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  ">
                {videos?.map((video) => (
                    <VideosCard
                        key={video._id}
                        avatar={video.ownerDetails?.avatar}
                        duration={video.duration}
                        title={video.title}
                        thumbnail={video.thumbnail}
                        createdAt={video.createdAt}
                        views={video.views}
                        channelName={video.ownerDetails.username}
                        videoId={video._id}
                    />
                ))}
            </div>
    
);
}
export default Home;
