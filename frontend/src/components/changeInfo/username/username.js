import React, { useState } from "react"
import "./styles.css"
import axios from "axios"
import { useUserData } from "../../../store/userContext"

const ChangeUsername = () => {
  const { userData } = useUserData()
  const [newUsername, setNewUsername] = useState("")

  const changeUsername = () => {
    axios.patch("http://localhost:3333/api/user/changeusername", {
      user_id: userData.id,
      newUsername: newUsername 
    }).then(res => console.log(res)).catch(err => console.log(err))
  }
  
  return (
    <div className="changeusername-container">
      <h2 className="changeusername-title">Change your username</h2>
      <input 
        className="changeusername-input" 
        placeholder="New username"
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button className="changeusername-btn-change" onClick={() => changeUsername()}>Change</button>
    </div>
  )
}

export default ChangeUsername
