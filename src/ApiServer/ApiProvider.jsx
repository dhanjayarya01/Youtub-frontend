import React,{useState} from "react";
import ApiContext from "./ApiContext";
import Apiservice from "./Apiserver";

const ApiProvider=({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[currentuserinfo,setCurrentuserinfo]=useState({})
    const[isHomepage,setIsHomepage]=useState(true)
    const defaultValue={
        apiContext:new Apiservice(), 
        isLoggedIn,
        isHomepage,
        currentuserinfo,
        setCurrentuserinfo,
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