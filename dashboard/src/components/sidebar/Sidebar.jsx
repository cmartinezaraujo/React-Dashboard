import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PersonOutline, StorefrontOutlined, AttachMoneyOutlined, BarChartOutlined,
MailOutlined, DynamicFeedOutlined, ChatBubbleOutline, WorkOutline, ReportOutlined} from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/>
                            Home
                        </li>
                    </Link>

                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem">
                        <PersonOutline className="sidebarIcon"/>
                        Users
                    </li>
                    </Link>

                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                        <StorefrontOutlined className="sidebarIcon"/>
                        Products
                    </li>
                    </Link>

                    <li className="sidebarListItem">
                        <AttachMoneyOutlined className="sidebarIcon"/>
                        Transactions
                    </li>

                    <li className="sidebarListItem">
                        <BarChartOutlined className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlined className="sidebarIcon"/>
                        Mail
                    </li>

                    <li className="sidebarListItem">
                        <DynamicFeedOutlined className="sidebarIcon"/>
                        Feedback
                    </li>

                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        Manage
                    </li>

                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>

                    <li className="sidebarListItem">
                        <ReportOutlined className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
