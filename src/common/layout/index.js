import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../header'
import { Sidebar } from '../sidebar'
import './style.css'

export const Layout = () => {
    return <>
        <Header />
        <Sidebar />
        <div className='content'>
            <Outlet />
        </div>
    </>
}