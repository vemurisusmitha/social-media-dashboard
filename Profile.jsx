import React from 'react'
import { FaRegBell } from "react-icons/fa";
import "./Profile.css"
function Profile() {
  return (
    <div className='profile-component'>
    <div className='alerts-icon'><FaRegBell /></div>
    <div className='profile-info'>Vemuri Susmitha</div>

    </div>
  )
}

export default Profile