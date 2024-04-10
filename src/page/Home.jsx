import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { useContext } from 'react';
import ApiContext from '../ApiServer/ApiContext';

export default function Home() {
  const { apiContext, setIsLoggedIn } = useContext(ApiContext);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    try {
      const response = await apiContext.getAllVideos();
      setVideos(response.data.docs); // Assuming response.data contains the video data
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };
  
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      
    </>
  );
}
