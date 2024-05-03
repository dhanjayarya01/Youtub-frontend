import React, { useEffect, useState, useCallback } from 'react';
import { useContext } from 'react';
import ApiContext from '../ApiServer/ApiContext';
import VideosCard from '../component/VideosCard';
import VideoCardSkeleton from '../skeleton/VideoCardSkeleton'; // Import the skeleton component
import InfiniteScroll from '../component/InfiniteScroll';
import {  useNavigate, useParams } from 'react-router-dom';
import Signup from '../component/Signup';
import AuthLayout from '../Route/AuthLayout';

function Home() {

    const navigation=useNavigate()
    const { apiContext,isLoggedIn,isHomepage} = useContext(ApiContext);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isSignupopen,setSignupopen]=useState(false)



      const {query} =useParams()
    useEffect(() => {
        loadInitialVideos();
        setSignupopen(isLoggedIn)

    }, [query]);
        const loadInitialVideos = async () => {
            const initialData = await fetchVideos(currentPage);
            setVideos(initialData.docs);
            setTotalPages(initialData.totalPages);
            setLoading(false);
        };
      
   
    const fetchVideos = async (page) => {
        try {
             console.log("home qu",query)
            const response = await apiContext.getAllVideos({ page,query });
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

    return (
        <>
        {!isHomepage && ( !isLoggedIn ? <Signup/> :null)}
        <div className="text-white   mb-20 sm:m-0 max-h-screen w-[74rem]    grid xl:grid-cols-3 sm:grid-cols-3 grid-cols-1">
            <InfiniteScroll fetchMore={loadMoreVideos} hasNextPage={currentPage < totalPages && !loading}>
                {loading ?
                    Array.from({ length: 6 }).map((_, index) => <VideoCardSkeleton key={index} />)
                    :
                    videos.map((video) => (
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
                    ))
                }
            </InfiniteScroll>
        </div>
    </>
    );
}

export default Home;
