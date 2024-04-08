import React,{useState} from "react";
import ApiContext from "./ApiContext";
import Apiservice from "./Apiserver";

const ApiProvider=({children})=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[currentuserinfo,setCurrentuserinfo]=useState({})
    const defaultValue={
        apiContext:new Apiservice(), 
        isLoggedIn,
        currentuserinfo,
        setCurrentuserinfo,
        setIsLoggedIn
}

return (
    <ApiContext.Provider value={defaultValue}>
        {children}
    </ApiContext.Provider>
)

}

export default ApiProvider