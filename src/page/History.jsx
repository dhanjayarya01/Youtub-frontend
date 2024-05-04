import React, { useContext, useState, useEffect } from 'react';
import ApiContext from '../ApiServer/ApiContext';
import VideosCard from '../component/VideosCard';
import VideoCardSkeleton from '../skeleton/VideoCardSkeleton';

function History() {
  const { apiContext } = useContext(ApiContext);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWatchHistory = async () => {
    try {
      const historyData = await apiContext.getWatchHistory();
      console.log(historyData.data[0])
      setVideos(historyData.data); // Assuming the API response directly provides the video data
      setLoading(false);
    } catch (error) {
      console.error('Error fetching watch history:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getWatchHistory();
  }, []);



  return (
    <div className="text-white mb-20 sm:m-0 max-h-screen w-[100%] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
      {loading ? (
        <VideoCardSkeleton />
      ) : (
        videos.map((video) => (
          <VideosCard
            key={video._id}
            avatar={video.owner?.avatar}
            duration={video.duration}
            title={video.title}
            thumbnail={video.thumbnail}
            createdAt={video.createdAt}
            views={video.views}
            channelName={video.owner.username}
            videoId={video._id}
          />
        ))
      )}
    </div>
  );
}

export default History;
