import React from 'react'
import Header from '../component/Header'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'

export default function Home() {
  const {apiContext,setIsLoggedIn}=useContext(ApiContext)

 
  const logout=async()=>{
    const lgo=await apiContext.logoutUser();
    if(lgo){
      setIsLoggedIn(false)
    }
  }
  
  return (
    <>
    <div>hihihih</div>
    {/* <div onClick={logout}>Home</div> */}
    </>
  )
}
