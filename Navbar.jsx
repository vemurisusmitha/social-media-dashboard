import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { IoStatsChartSharp } from "react-icons/io5";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className='navbar-component'>
        <div className='nav-content'>
            <div className='nav-head'>SOCIAL MEDIA DASHBOARD</div>
            <div className='profile-icon'><IoMdContact /></div>
            <div className='nav-links'>
            <Link to='/home' className='nav-link'><MdDashboard />Dashboard</Link>
            <Link to='/earnings' className='nav-link'><RiMoneyPoundCircleLine />Earnings</Link>
                <Link to='/demographics' className='nav-link'><IoStatsChartSharp />Demographics</Link>
                <Link to='/users' className='nav-link'><FaUsers />Users</Link>
                <Link to='/settings' className='nav-link'><IoSettingsSharp />Settings</Link>
                <Link to='/alerts' className='nav-link'><FaBell />Alerts</Link>
            </div>
        </div>
    </div>
  )
}
export default Navbar