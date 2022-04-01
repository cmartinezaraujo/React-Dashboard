import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label >Username</label>
                <input type="text" placeholder='Mister' />
            </div>

            <div className="newUserItem">
                <label >Full Name</label>
                <input type="text" placeholder='Mister Man' />
            </div>

            <div className="newUserItem">
                <label >Email</label>
                <input type="teemailxt" placeholder='mister@cat.com' />
            </div>

            <div className="newUserItem">
                <label >Password</label>
                <input type="password" placeholder='password' />
            </div>

            <div className="newUserItem">
                <label >Phone</label>
                <input type="text" placeholder='509 324 4421' />
            </div>

            <div className="newUserItem">
                <label >Address</label>
                <input type="text" placeholder='Warden | USA' />
            </div>

            <div className="newUserItem">
                <label >Gender</label>

                <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>

                    <input type="radio" name="gender" id="female" value="male" />
                    <label for="memale">Female</label>

                    <input type="radio" name="gender" id="other" value="male" />
                    <label for="other">Other</label>
                </div>
            </div>

            <div className="newUserItem">
                <label >Active</label>
                <select name="active" id="active" className="newUserSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}
