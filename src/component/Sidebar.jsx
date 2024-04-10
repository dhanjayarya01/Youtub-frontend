import {AnimatePresence ,motion} from "framer-motion"
import {FaHome} from"react-icons/fa"
import { SlLike } from "react-icons/sl";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RiHistoryLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { ImProfile } from "react-icons/im";

import { NavLink ,useLocation } from "react-router-dom";
import History from "../page/History";

import { useState } from "react";
import { all } from "axios";
import Header from "./Header";


const route=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/likedvideo",
        name:"likedvideo",
        icon:<SlLike/>
    },
    {
        path:"/history",
        name:"History",
        icon:<RiHistoryLine/>
    },
    {
        path:"/yourchannel",
        name:"yourchannel",
        icon:<ImProfile/>
    },
    {
        path:"/myprofile",
        name:"Myprofile",
        icon:<VscAccount/>
    },
   
    
    
   
   
]

const Sidebar=({children})=>{
    const [isopen,setIsopen]=useState(false)
 
    const location = useLocation();

    const textanimation ={
        hidden:{
            width:0
        },
        show:{
            width:"100%",
            transition:{
                duration:0.2
            }
        }
    }
    const toggle=()=>setIsopen(!isopen)
    return(
             
             <div className=" flex  min-h-screen ">
             <div className=" flex  h-{100%}  w-[4.55625rem]  "></div>
            <motion.div className=" overflow-clip   absolute h-full  w-[3rem] bg-[#]" animate={{width:isopen ?"220px":"72.8px" , transition:{ duration:0.5,type:"spring", damping:11}}}>
 
              <div className={`title ${isopen && 'flex  items-center'}`}>
                <div className={`  h-[4.2rem] flex  items-center text-[2.3rem] ${isopen ? 'justify-start ml-3 ' :'justify-center'} `} onClick={toggle}><IoReorderThreeOutline/></div>
                {
                 isopen &&  <div  className='flex ml-[13%] items-center  '>
                    <AnimatePresence>
                 <div  className=' flex  h-[2rem] w-[100%]  transition-opacity duration-100 ease-in '><img className='h-[100%] w-[100%] '  src='/image/yt1.png'></img></div>
                 </AnimatePresence>
               <div  className='font-extrabold ml-1 text-[112%]  text-black'>YouTube</div>
               </div>
                }
              </div>
              <section className={`pt-8 ${isopen ? 'pr-1 pl-1' : 'pl-1 pr-1'}`}>
                {
                    route.map((route)=>(
                        <NavLink  to={route.path} key={route.name} >
                           <div className={` mt-1 pl-6 flex w-{100%} rounded-md h-[2.8rem] justify-start items-center hover:bg-[#F2F2F2] transition-all duration-2000 ease-cubic-bezier(0.06, -0.28, 0.735, 0.045) ${location.pathname === route.path &&isopen ? 'bg-[#F2F2F2]' : ''}`}>
                            <div className={`text-2xl pl--2 ${location.pathname === route.path && !isopen ? ' text-red-800' : ''}`}>{route.icon}</div>    
                         <AnimatePresence>
                           <motion.div initial="hidden" animate="show" exit="hidden" variants={textanimation} className=" text-[1rem] w-[44rem]  ml-5">{route.name}</motion.div>
                         </AnimatePresence>
                            </div>
                        </NavLink>
                    ))
                    }
                    
                   <div className="mt-[67%] ">

                     <NavLink to="/logout" key="logout" ><div></div>
                        <div >
                            <div className={`mt-1.9 pl-6 flex  w-{100%} rounded-md h-[2.8rem] justify-start items-center   hover:bg-[#F2F2F2]  transition-all duration-2000 ease-cubic-bezier(0.06, -0.28, 0.735, 0.045) `}>
                            <div className="text-2xl pl--2  "><FaHome/></div>    
                         <AnimatePresence>
                           <motion.div initial="hidden" animate="show" exit="hidden" variants={textanimation} className="text-[1rem] w-[44rem]  ml-5">Logout</motion.div>
                         </AnimatePresence>
                            </div></div>
                        </NavLink>
                     <NavLink className=""  to="/setting" key="setting">
                            <div className={`  mt-1.9 pl-6 flex  w-{100%} rounded-md h-[2.8rem] justify-start items-center  hover:bg-[#F2F2F2]  transition-all duration-2000 ease-cubic-bezier(0.06, -0.28, 0.735, 0.045) `}>
                            <div className="  text-2xl pl--2  "><FaHome/></div>    
                         <AnimatePresence>
                           <motion.div initial="hidden" animate="show" exit="hidden" variants={textanimation} className="  text-[1rem] w-[44rem]  ml-5">Settings</motion.div>
                         </AnimatePresence>
                            </div>
                        </NavLink>

                        </div>
                </section>
            </motion.div>
            
            <div className={`flex-auto ${isopen?'bg-[#ECECEC]':'bg-[ffffff]'}`}>  
           <Header/>
             <main>{children}</main>
             </div>
            </div>
            
    )
}

export default Sidebar;