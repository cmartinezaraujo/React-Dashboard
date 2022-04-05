import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
                <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className="userShowImg" src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Mister Man</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">misterMan99</span>
                    </div>

                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>

                    <span className="userShowTitle">Contact Details</span>

                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">509 222 3943</span>
                    </div>

                    <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">mister@cat.com</span>
                    </div>

                    <div className="userShowInfo">
                        <LocationSearching className="userShowIcon"/>
                        <span className="userShowInfoTitle">Warden | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder='misterMan99' className='userUpdateInput' />
                        </div>

                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='Mister Man' className='userUpdateInput' />
                        </div>

                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='mister@cat.com' className='userUpdateInput' />
                        </div>

                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='509 222 3943' className='userUpdateInput' />
                        </div>

                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Warden | USA' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img className='userUpdateImg' src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
