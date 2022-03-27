import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';

export default function Topbar() {
  return (

    <div className="topbar">
        <div className="topbarWraper">
            <div className="topLeft">
                <span className="logo">Trakr</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">
                        2
                    </span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    <span className="topIconBadge">
                        2
                    </span>
            </div>
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="profile cartoon" className = "topAvitar"/>
            </div>
        </div>
    </div>
  )
}
