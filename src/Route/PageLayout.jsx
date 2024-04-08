import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../component/Header'
import Sidebar from '../component/Sidebar'
export default function PageLayout() {
  return (
    <>
    <Outlet/>
    </>
  )
}