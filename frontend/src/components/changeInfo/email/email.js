import React, { useState } from "react"
import axios from "axios"
import "./styles.css"
import { useUserData } from "../../../store/userContext"

const ChangeEmail = () => {
  const { userData } = useUserData()
  const [newEmail, setNewEmail] = useState("")

  const changeEmail = () => {
    console.log(userData)
    axios.patch("http://localhost:3333/api/user/changeemail", {
      user_id: userData.id,
      newEmail: newEmail 
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  return (
    <div className="changeemail-container">
      <h2 className="changeemail-title">Change your email</h2>
      <input 
        className="changeemail-input" 
        placeholder="New email"
        onChange={(e) => setNewEmail(e.target.value)} />
      <button className="changeemail-btn-change" onClick={() => changeEmail()}>Change</button>
    </div>
  )
}

export default ChangeEmail
