import React, { useState, useEffect } from "react";
import axios from "axios"
import GameCategory from "../games-category/game-category";

const MonthTops = () => {
  const [games, setGames] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3333/api/games')
      .then(res => {
        console.log(res)
        setGames(res.data)
      })
  }, [])

  return (
    <GameCategory category="Month Tops" gamesData={games} />
  );
};

export default MonthTops;
