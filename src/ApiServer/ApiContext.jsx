import React from "react";
import { createContext } from "react";
import Apiservice from "./Apiserver";


export const ApiContext=createContext({
     apiContext:new Apiservice(),
     isLoggedIn:true,
    currentuserinfo:"",
    setCurrentuserinfo:()=>{},
    setIsLoggedIn:()=>{}
})

export default ApiContext