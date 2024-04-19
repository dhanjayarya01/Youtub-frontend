import React,{useContext} from 'react'
import Getuserchannel from '../component/Getuserchannel'
import ApiContext from '../ApiServer/ApiContext'
function Yourchannel() {
  const {apiContext,currentuserinfo}=useContext(ApiContext)

  return (

    <Getuserchannel channelname={currentuserinfo.username}/>
  )
}

export default Yourchannel