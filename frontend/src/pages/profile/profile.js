import React from 'react'
import "./styles.css"
import { Link } from "react-router-dom"
import Pfp from "../../assets/images/profile.svg"
import { useUserData } from '../../store/userContext';


const Profile = () => {
  const { userData } = useUserData()

  return (
    <div className="profile-container">
      <h2 className="profile-title">My profile</h2>
      <div className="profile-general-container">
        <div className="profile-picture-and-name-container">
          <img src={Pfp} className="profile-picture" alt="pfp" />
          <h2 className="profile-name">{userData.username}</h2>
        </div>
        <div className="profile-user-infos-container">
          <div className="profile-user-info-container">
            <h2 className="profile-user-info">Firstname: {userData.firstname}</h2>
          </div>
          <div className="profile-user-info-container">
            <h2 className="profile-user-info">Lastname: {userData.lastname}</h2>
          </div>
          <div className="profile-user-info-container">
            <h2 className="profile-user-info">Username: {userData.username}</h2>
          </div>
          <div className="profile-user-info-container">
            <h2 className="profile-user-info">Email: {userData.email}</h2>
          </div>
          <Link to="/profile/changeinfo/choose">
            <button className="profile-change-info-button">Change info</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile
