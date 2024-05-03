import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import { useParams } from 'react-router-dom'
import { useScroll } from 'framer-motion'

function Subscription() {


  const [channels,setchannels]=useState()
  const {apiContext}=useContext(ApiContext)


  const {channelId}=useParams()

  const getchannel=async()=>{
   const ress=await apiContext.getSubscribedChannels(channelId)
    console.log("sus",ress)
    setchannels(ress.data)

  }


  useEffect(()=>{
    getchannel()
  })
  return (
    <div className='h-full w-full '>
     
     {
      channels?.map((channel)=>(
        <div className='h-[20%] rounded-2xl mt-6 p-3 pt-0 pb-0 w-[50%] flex bg-slate-100'>

        <div  className=' w-[7rem] border-2  rounded-full '>
          <img src={channel?.subscribedChannel?.avatar} alt="" />
        </div>
        <div className='h-full w-[80%] '>
        <div className=' h-[40%] ml-4 mt-2 text-3xl pl-4  rounded-full  '>{channel?.subscribedChannel?.fullName}</div>
        <div className=' h-[40%] ml-4 mt-2 text-3xl pl-4   rounded-full  '>{channel?.subscribedChannel?.username}</div>
        </div>
       </div>
      ))

     }
    </div>
  )
}

export default Subscription