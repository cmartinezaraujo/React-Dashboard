import { Visibility } from '@mui/icons-material'
import React from 'react'
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className ="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Mister Man</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon"/>
              Display
            </button>
          </li>
        </ul>
    </div>
  )
}
