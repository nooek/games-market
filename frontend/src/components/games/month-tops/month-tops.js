import React from "react";
import "../games-sessions.css";
import gamesSampleData from "../../../games.json";
import GamesRenderer from "../games-renderer/games-renderer"

const MonthTops = () => {
  return (
    <div className="class" name="month-tops">
      <h2 className="class-category">Month Tops</h2>
      <div className="games-container">
        <GamesRenderer games={gamesSampleData} />
      </div>
    </div>
  );
};

export default MonthTops;
