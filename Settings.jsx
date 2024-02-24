import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
function Settings() {
  return (
    <div className='pages'>
    <Navbar/>
    <div className='right-container'>
      <div><Profile/></div>
    </div>

    </div>
  )
}

export default Settings