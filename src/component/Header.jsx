import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


 function Header() {
   const [isextended,setIsextended]=useState(false)
   const [query,setquery]=useState('')

   const [fistclick,setfirstclick]=useState(true)
 
   const navigate=useNavigate()

   const getvideo=async()=>{
    if(query){
      navigate(`/${query}`)
    }

   }

   const sendtoast=()=>{
    if(fistclick){
      const isFirstClickShown = localStorage.getItem('isFirstClickShown');
      if (!isFirstClickShown) {
          toast.info('Search Videos By Their Title And Description.');
          localStorage.setItem('isFirstClickShown', 'true');
          setfirstclick(false);
      }
    }
   }


   
  return (

     <div className='flex items-center w-full h-[12%] sticky top-0 z-20 bg-[#fff] '>
       <div  className='logo ml-[1.3%] flex items-center '>
            <div  className=' flex  h-[2rem] w-[100%]  '><img className='h-[100%] w-[100%] '  src='/image/yt1.png'></img></div>
            <div className=' font-bold ml-1 text-[112%]'>YouTube</div>
        </div>
        
        <div className=' flex items-center ml-[10%] justify-center input w-[50%] h-full '>
          <input onClick={sendtoast} onChange={(e)=>setquery(e.target.value)} className='w-full pl-8 text-[1.2rem] h-[2.7rem] shadow-md border-[0.08rem]  border-slate-400 rounded-[3rem] rounded-r-none focus:outline-none focus:border-red-400 ' placeholder='Search ' ></input>
          <button onClick={getvideo} className='w-[13%] h-[2.7rem] flex justify-center items-center text-[1.2rem] bg-[#F0F0F0] rounded-r-[2rem]  shadow-md border-[0.08rem]  border-slate-400'><TfiSearch/></button>
        </div>
    
        
        <div className='profile flex justify- items-center h-[66%] w-[2.8rem] ml-[25%] rounded-[4rem] '>
         <img  src='/image/pic3.png'></img>
        </div>

      </div>
  )
}

export default Header
