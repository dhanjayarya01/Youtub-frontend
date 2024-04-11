import React, { useEffect, useState, useCallback } from 'react';
import { useContext } from 'react';
import ApiContext from '../ApiServer/ApiContext';
import VideosCard from '../component/VideosCard';
import InfiniteScroll from '../component/InfiniteScroll';

function Home() {
    const { apiContext } = useContext(ApiContext);
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchVideos = async (page) => {
        try {
            const response = await apiContext.getAllVideos({ page });
            return response.data;
        } catch (error) {
            console.error('Error fetching videos:', error);
            return { docs: [], totalPages: 1 };
        }
    };

    const loadMoreVideos = useCallback(async () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            const newData = await fetchVideos(nextPage);
            setCurrentPage(nextPage);
            setVideos((prevData) => [...prevData, ...newData.docs]);
        }
    }, [currentPage, totalPages]);

    useEffect(() => {
        const loadInitialVideos = async () => {
            const initialData = await fetchVideos(currentPage);
            setVideos(initialData.docs);
            setTotalPages(initialData.totalPages);
        };
        loadInitialVideos();
    }, []);

    return (
        <div className="text-white mb-20 sm:m-0 max-h-screen w-[74rem] grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <InfiniteScroll fetchMore={loadMoreVideos} hasNextPage={currentPage < totalPages}>
                {videos.map((video) => (
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
            </InfiniteScroll>
        </div>
    );
}

export default Home;
