import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './style.css'

export const Sidebar = () => {
    return <div className='sidebar'>
        <ul className="navbar-nav">
            <li><NavLink to="/">განაცხადები</NavLink></li>
            <li><NavLink to="/createApplicationPage">ახალი განაცხადი</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </div>
}