import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useUserData } from "../../store/userContext";
import GameLikeDislike from "../../components/gameLikeDislike/gameLikeDislike";
import GameComments from "../../components/gameComments/gameComments";

const Game = () => {
  const [game, setGame] = useState([]);
  const [played, setPlayed] = useState(false);
  const { id } = useParams();
  const { userData } = useUserData();

  useEffect(() => {
    axios.get(`http://localhost:3333/api/games/get-game/${id}`).then((res) => {
      console.log(res)
      setGame(res.data[0][0]);
    });
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3333/api/games/check-played/${userData.id}/${id}`).then((res) => {
      if (res.data.played) setPlayed(true);
    });
  }, [id, userData.id]);

  const downloadGame = () => {
    axios.post(`http://localhost:3333/api/games/play`, {
      userId: userData.id,
      gameId: id,
    });
    setPlayed(true);
  };

  return (
    <div className="container-game">
      <div className="container-general">
        <div className="game-spec-container">
          <div className="gamepage-thumbnail-container">
            <img className="gamepage-thumb" alt="dsa" src={game.thumbnail} />
          </div>
          <div className="gamepage-spec-container">
            <h1 className="gamepage-name">{game.name}</h1>
            <h1 className="gamepage-desc">Description: {game.description}</h1>
            <h1 className="gamepage-categories">Genres: {game.category}</h1>
            <h1 className="gamepage-price">{game.price}$</h1>
            <h1 className="gamepage-creator">Creator: {game.game_author}</h1>
          </div>
        </div>
        <button className="download-game-btn" onClick={() => downloadGame()}>
          Download
        </button>

        <GameLikeDislike userData={userData} played={played} id={id} />

        <GameComments id={id} userData={userData} />
      </div>
    </div>
  );
};

export default Game;
