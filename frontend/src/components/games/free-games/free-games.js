import React, { useState, useEffect } from "react"
import axios from "axios"
import GameCategory from "../games-category/game-category";

const FreeGames = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3333/api/games/free-games")
      .then((res) => {
        console.log(res)
        if (res.data) {
          setGames(res.data)
        }
      })
  }, [])

  console.log(games)

  return <GameCategory category="Free Games" gamesData={games} />
}

export default FreeGames
