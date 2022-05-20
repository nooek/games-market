import React, { useState } from "react"
import axios from "axios"
import "./styles.css"
import { useUserData } from "../../../store/userContext"

const ChangePassword = () => {
  const [newPassword,setNewPassword] = useState("")
  const { userData } = useUserData()

  const changePassword = () => {
    console.log(userData)
    axios.patch("http://localhost:3333/api/user/changepassword", {
      user_id: userData.id,
      newPassword: newPassword 
    }).then(res => console.log(res)).catch(err => console.log(err.response))
  }

  return (
    <div className="changepassword-container">
      <h2 className="changepassword-title">Change your password</h2>
      <input 
        className="changepassword-input" 
        placeholder="New password"
        onChange={(e) => setNewPassword(e.target.value)} />
    <button className="changepassword-btn-change" onClick={() => changePassword()}>Change</button>
    </div>
  )
}

export default ChangePassword
