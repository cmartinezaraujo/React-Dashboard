import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sideBarWrapper">
            <div className="sideBarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>

                    <li className="sideBarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sideBarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sideBarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>

                    <li className="sideBarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sideBarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sideBarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>

                    <li className="sideBarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sideBarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sideBarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                        Home
                    </li>

                    <li className="sideBarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sideBarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
