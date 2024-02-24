import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import "./Allplatforms.css"
function Allplatforms() {
  return (
    <div className='all-platforms-component'>
        <div className='platforms-content'>
            <div className='platform-box'>
                <div style={{fontSize:"22px",color:"#4769d7"}}>All platforms</div>
                <div className='followers'>14,091,345 <br/><span>Followers</span></div>
            </div>
            <div className='platform-box'>
                <div className='social-icons' style={{color:"red"}}><BsYoutube /></div>
                <div className='followers'>14,091,345 <br/><span>Followers</span></div>
            </div>
            <div className='platform-box'>
            <div className='social-icons' style={{color:"green"}}><BsSpotify /></div>
                <div className='followers'>14,091,345 <br/><span>Followers</span></div>
            </div>
            <div className='platform-box'>
            <div className='social-icons' style={{color:"crimson"}}><BiLogoInstagramAlt /></div>
                <div className='followers'>14,091,345 <br/><span>Followers</span></div>
            </div>
            <div className='platform-box'>
            <div className='social-icons' style={{color:"#252525"}}><BsTwitterX /></div>
                <div className='followers'>14,091,345 <br/><span>Followers</span></div>
            </div>
        </div>
    </div>
  )
}

export default Allplatforms