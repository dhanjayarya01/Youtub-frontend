import React from "react";
import { createContext } from "react";
import Apiservice from "./Apiserver";


export const ApiContext=createContext({
     apiContext:new Apiservice(),
     isLoggedIn:true,
     isHomepage:true,
     currentuserinfo:"",
    setCurrentuserinfo:()=>{},
    setIsLoggedIn:()=>{},
    setIsHomepage:()=>{}
})

export default ApiContext