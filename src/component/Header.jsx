import React, { useState } from 'react'
import Sidebar from './Sidebar'

 function Header() {
   const [isextended,setIsextended]=useState(false)

  return (

     <>

  <div className='flex h-{100%} '>
    {/* <div className='menu  h-[34.9rem] w-[6%] bg-lime-500 flex justify-center items-start'>hh</div>
      */}
      
     <div className='flex w-full'>
       <div className='h-[4rem]  w-full flex bg-amber-400' >j</div>
     </div>
  </div>
    {/* <div className='flex'>
      <div className='menu  h-[10rem] w-[6%] bg-slate-200 flex justify-center items-center'>hh</div>
      
      <div className='navbar h-[4.3rem]  w-[100%] bg-red-600  flex justify-start items-center' >
    
         <div className='h-[4rem] w-[23rem] bg-lime-400'>jo</div>
      </div>

    </div> */}

      </>
  )
}

export default Header
