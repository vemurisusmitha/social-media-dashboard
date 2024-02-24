import React from 'react'
import "./Dashboard.css"
import Navbar from "../../components/Navbar/Navbar"
import Profile from '../../components/Profile/Profile'
import Allplatforms from '../../components/Allplatforms/Allplatforms'
import Followers from '../../components/Followers/Followers'
import FbyC from '../../components/FbyC/FbyC'
import PvbyC from '../../components/PvbyC/PvbyC'
function Dashboard() {
  return (
    <div className='pages'>
    <Navbar/>
    <div className='right-container'>
      <div><Profile/></div>
      <div style={{margin:"10px 10px",padding:"10px"}}>Dashboard</div>
      <div><Allplatforms/></div>
      <div><Followers/></div>
      <div style={{display:"flex"}}>
        <div><FbyC/></div>
        <div><PvbyC/></div>
      </div>
    </div>

    </div>
  )
}

export default Dashboard