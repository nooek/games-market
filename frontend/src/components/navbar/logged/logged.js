import React, { useState } from "react"
import "./loggedStyles.css"
import axios from "axios"
import profileIcon from "../../../assets/images/profile.svg"
import { useUserData } from "../../../store/userContext"
import { Link, useHistory } from "react-router-dom"
import BecomeDev from "../../becomeDev/becomeDev"
import StoreMenu from "../../storeBtnMenu/storeBtnMenu"

const Logged = () => {
  const { userData } = useUserData()
  let history = useHistory()
  const [becomeDev, setBecomeDev] = useState(false)
  const [showStoreMenu, setShowStoreMenu] = useState(false)

  const verifyDev = () => {
    axios.get(`http://localhost:3333/api/devv/${userData.id}`)
     .then((res) => {
       if (res.data.isDev) {
        history.push('/publish/game')
      } else {
        setBecomeDev(true)
       }
     })
  }

  return(
    <div className="logged-container">
      <div className="func-container-logged">
        <button className="func-btns" onClick={() => verifyDev()}>Publish a game</button>
        <button className="func-btns" 
          onMouseEnter={() => setShowStoreMenu(true)}
          onMouseLeave={() => setShowStoreMenu(false)}>Store v</button>
      </div>
      <div className="user-info-container">
        <h2 className="username">{userData.username}</h2>
        <Link to="/profile">
          <img src={profileIcon} alt="pfp" className="pfp" />
        </Link>
      </div>
      {
        becomeDev
          ? <BecomeDev chooseNo={() => setBecomeDev(false)} chooseYes={() => setBecomeDev(false)} />
          : null
      }
      { showStoreMenu ? <StoreMenu mouseEnter={() => setShowStoreMenu(true)} mouseLeave={() => setShowStoreMenu(false)} /> : null }
    </div>
  )
}

export default Logged
