import React, { useEffect } from 'react'
import { useContext } from 'react'
import ApiContext from '../ApiServer/ApiContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function Logout() {
  const {apiContext,setIsLoggedIn,isLoggedIn}=useContext(ApiContext)

  const navigate=useNavigate()
  const logoutuser=async()=>{
    console.log("fjldsjlfj")
    console.log("fdshfdslfj",isLoggedIn)
   const res= await apiContext.logoutUser()
   toast.success(res.message)
    navigate('/')
    setIsLoggedIn(false)
  }
  useEffect(()=>{
     logoutuser()
  })
  return (
    <div>Lfoi</div>
  )
}

export default Logout