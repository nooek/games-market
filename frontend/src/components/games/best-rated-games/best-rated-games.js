import React, { useState, useEffect } from "react"
import axios from "axios"
import GameCategory from "../games-category/game-category"

const BestRatedGames = () => {
  const [games, setGames] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3333/api/games/best-rated-games")
    .then((res) => {
        console.log(res.data[0])
      if (res.data) {
        setGames(res.data[0])
      }
    })
  }, [])

  return <GameCategory category="Best rated games" gamesData={games} />
}

export default BestRatedGames
