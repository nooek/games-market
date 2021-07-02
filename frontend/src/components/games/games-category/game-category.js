import React from "react";
import GamesRenderer from "../games-renderer/games-renderer"
import "./games-categories.css";

const GameCategory = ({ category, gamesData }) => {
  return (
    <div className="class" name="month-tops">
      <h2 className="class-category">{category}</h2>
      <div className="games-container">
        <GamesRenderer games={gamesData} />
      </div>
    </div>
  );
};

export default GameCategory;
