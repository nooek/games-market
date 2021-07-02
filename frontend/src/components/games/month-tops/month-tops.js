import React from "react";
import gamesSampleData from "../../../games.json";
import GameCategory from "../games-category/game-category";

const MonthTops = () => {
  return (
    <GameCategory category="Month Tops" gamesData={gamesSampleData} />
  );
};

export default MonthTops;
