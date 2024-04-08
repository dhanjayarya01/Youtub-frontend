import {motion} from "framer-motion"
import {FaHome} from"react-icons/fa"
import { NavLink } from "react-router-dom";
import History from "../page/History";

const route=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>
    },
    {
        path:"/likedvideo",
        name:"likedvideo",
        icon:<FaHome/>
    },
    {
        path:"/history",
        name:"History",
        icon:<FaHome/>
    },
    {
        path:"/yourchannel",
        name:"yourchannel",
        icon:<FaHome/>
    },
    {
        path:"/logout",
        name:"Logout",
        icon:<FaHome/>
    },
    
   
   
]
const Sidebar=({children})=>{
    return(
             <div className="flex">
            <motion.div className="   h-[34rem] w-[3rem] bg-fuchsia-600" animate={{width:"200px"}}>

                <section>
                    {
                    route.map((route)=>(
                        <NavLink to={route.path} key={route.name}>
                            <div>{route.icon}</div>
                            <div>{route.name}</div>
                        </NavLink>
                    ))
                    }
                </section>
            </motion.div>
             <main>{children}</main>
             </div>
    )
}

export default Sidebar;