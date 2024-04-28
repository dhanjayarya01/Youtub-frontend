import React from 'react'

function VideoplaySkeleton() {
 
    return (
        <div className="flex h-screen w-[60%]">
          <div className="h-screen w-[100%]">
            <div className="w-full h-screen rounded-xl  bg-gray-200 animate-pulse "></div>
          </div>
         
        </div>
      );
    }  


export default VideoplaySkeleton