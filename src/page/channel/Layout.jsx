import React from "react";
import { Outlet } from "react-router-dom";
import ChannelHeader from "./ChannelHeader";
import ChannelVideo from "./ChannelVideo";
import Yourchannel from "./Yourchannel";

function Layout(){


    return(
        <>
        <ChannelHeader/>
        <Outlet/>
        <>hi</>
        </>
    )
}

export default Layout;