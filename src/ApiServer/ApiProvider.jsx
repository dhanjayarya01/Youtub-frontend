import React,{useState} from "react";
import ApiContext from "./ApiContext";
import Apiservice from "./Apiserver";

const ApiProvider=({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[currentuserinfo,setCurrentuserinfo]=useState({})
    const[isHomepage,setIsHomepage]=useState(true)
    const[currentroutename,setCurrentroutename]=useState('')
    const defaultValue={
        apiContext:new Apiservice(), 
        isLoggedIn,
        isHomepage,
        currentuserinfo,
        currentroutename,
        setCurrentuserinfo,
        setCurrentroutename,
        setIsLoggedIn,
        setIsHomepage
}

return (
    <ApiContext.Provider value={defaultValue}>
        {children}
    </ApiContext.Provider>
)

}

export default ApiProvider