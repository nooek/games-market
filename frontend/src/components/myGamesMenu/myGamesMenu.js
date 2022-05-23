import React, { useState } from "react"
import "./styles.css"
import axios from "axios"
import { useUserData } from "../../store/userContext"

const MyGamesMenu = ({ gameId }) => {
  const [showDelete, setDelete] = useState(false)
  const [password, setPassword] = useState("")
  const { userData } = useUserData()

  const deleteGame = () => {
    axios.delete("http://localhost:3333/api/games", {
      data: {
        userId: userData.id,
        gameId: gameId,
        password: password
      }
    })
  }

  console.log(password)

  return (
    <div className="mg-menu-container">
      {
        showDelete ? 
          <div className="mg-delete-menu-container">
            <h2 className="mg-delete-menu-text">Confirm your password</h2>
            <input 
              className="mg-delete-menu-input" 
              placeHolder="Your password"
              type="password"
              onChange={(e) => setPassword(e.target.value)} />

            <div className="mg-delete-menu-options-container">
              <button className="mg-delete-menu-options-btns" onClick={() => deleteGame()}>Delete</button>
              <button className="mg-delete-menu-options-btns" onClick={() => setDelete(false)}>Cancel</button>
            </div>
          </div> 
        
        : 
          <div className="mg-menu-btns-container">
            <button className="mg-menu-btns" onClick={() => setDelete(true)}>Delete</button>
          </div>
      }
    </div>
  )
}

export default MyGamesMenu
