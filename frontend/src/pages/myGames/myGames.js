import React, { useEffect } from "react"
import axios from "axios"
import { useUserData } from "../../store/userContext"

const MyGames = () => {
  const { userData } = useUserData();

  useEffect(() => {
    axios.get(`http://localhost:3333/api/games/${userData.email}`)
    .then(res => console.log(res))
  }, [userData.email])

  return (
    <div>My Games</div>
  )
}

export default MyGames
