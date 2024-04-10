import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";


 function Header() {
   const [isextended,setIsextended]=useState(false)

  return (

     <div className='flex items-center w-full h-[12%] bg-gray-950 '>
       <div  className='logo flex items-center '>
            <div  className=' flex  h-[2rem] w-[100%]  '><img className='h-[100%] w-[100%] '  src='/image/yt1.png'></img></div>
            <div className=' font-bold ml-1 text-[112%]'>YouTube</div>
        </div>
        
        <div className=' flex items-center ml-[10%] justify-center input w-[50%] h-full '>
          <input className='w-full pl-8 text-[1.2rem] h-[2.7rem] shadow-md border-[0.08rem]  border-slate-400 rounded-[3rem] rounded-r-none focus:outline-none focus:border-[#C640FF] ' placeholder='hi' ></input>
          <button className='w-[13%] h-[2.7rem] flex justify-center items-center text-[1.2rem] bg-[#F0F0F0] rounded-r-[2rem]  shadow-md border-[0.08rem]  border-slate-400'><TfiSearch/></button>
        </div>
    
        
        <div className='profile flex justify- items-center h-[66%] w-[2.8rem] ml-[25%] rounded-[4rem] '>
         <img  src='/image/pic3.png'></img>
        </div>

      </div>
  )
}

export default Header
