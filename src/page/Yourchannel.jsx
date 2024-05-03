import React,{useContext} from 'react'
import Getuserchannel from '../component/Getuserchannel'
import ApiContext from '../ApiServer/ApiContext'
import { Outlet } from 'react-router-dom'
function Yourchannel() {
  const {apiContext,currentuserinfo}=useContext(ApiContext)

  return (

    <div className='w-[100%] '>
    <Getuserchannel channelname={currentuserinfo.username}/>
    <Outlet/>
    </div>
  )
}

export default Yourchannel