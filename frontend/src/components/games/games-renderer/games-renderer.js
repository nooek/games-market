import React from "react";
import { Link } from "react-router-dom"
import "./gamesStyles.css";

const GamesRenderer = ({ games }) => {
  console.log(games)
  if (games !== undefined && games.length) {
    return games.slice(0, 5).map((game, index) => {
      return (
        <Link to={"/game/" + game.id} key={game.id}>
          <div className="game-container" key={index}>
            <div className="game-photo-container">
              <img className="game-photo" src={game.thumbnail} alt="dsa" />
            </div>
            <div className="game-desc">
              <h2 className="game-name">{game.name}</h2>
              <h2 className="game-price">{game.price}$</h2>
              <button className="download-btn">Download</button>
            </div>
          </div>
        </Link>
      );
    });
  } else return <></>
};

export default GamesRenderer;
