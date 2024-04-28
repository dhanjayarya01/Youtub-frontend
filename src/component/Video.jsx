import React from 'react'

function Video({video}) {
  return (
    <div className= 'flex  rounded-2xl bg-yellow-300 h-[74%]'>
    <video controls autoPlay className='w-full rounded-2xl h-[100%]'>
    {video?.videoFile ?
          <source src={video?.videoFile} type="video/mp4" />
          : null
        }
        </video>    </div>  )
}

export default Video