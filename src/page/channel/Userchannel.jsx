import React from 'react'
import { useParams } from 'react-router-dom'
import Getuserchannel from '../../component/Getuserchannel'

export default function Userchannel() {
 
    const {username}=useParams();
    console.log(username)

  return (
    <Getuserchannel channelname={username}/>
  )
}
