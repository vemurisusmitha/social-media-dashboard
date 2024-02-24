import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import "./Followers.css"
function Followers() {
  return (
    <div className='followers-component'>
        <div className='followers-content'>
            <div className='followers-box'>
                <div style={{fontSize:"16px",color:"#4769d7"}}>All platforms</div>
                <div className='followers' style={{fontSize:"14px"}}>past 12 months</div>
            </div>
            <div className='followers-box'>
                <div className='social-icon' style={{color:"red"}}><BsYoutube /><span>Followers</span></div>
                <div className='followers-increase'>55,345<br/><span>23% ^</span></div>
            </div>
            <div className='followers-box'>
            <div className='social-icon' style={{color:"green"}}><BsSpotify /><span>Followers</span></div>
                <div className='followers-increase'>55,345<br/><span>46% ^</span></div>
            </div>
            <div className='followers-box'>
            <div className='social-icon' style={{color:"crimson"}}><BiLogoInstagramAlt /><span>Followers</span></div>
                <div className='followers-increase'>55,345<br/><span>53% ^</span></div>
            </div>
            <div className='followers-box'>
            <div className='social-icon' style={{color:"#252525"}}><BsTwitterX /><span>Followers</span></div>
                <div className='followers-increase'>55,345<br/><span>29% ^</span></div>
            </div>
        </div>
    </div>
  )
}

export default Followers