import React from "react";
import "./styles.css";

const GamesRenderer = (props) => {
  return props.games.slice(0, 5).map((game, index) => {
    return (
      <div className="game-container" key={index}>
        <div className="game-photo-container">
          <img className="game-photo" src={game.photo} alt="dsa" />
        </div>
        <div className="game-desc">
          <h2 className="game-name">{game.name}</h2>
          <h2 className="game-price">{game.price}</h2>
          <button className="download-btn">Download</button>
        </div>
      </div>
    );
  });
};

export default GamesRenderer;
