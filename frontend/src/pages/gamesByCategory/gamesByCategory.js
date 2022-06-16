import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { Navbar } from "../../components";
import GamesFilter from "../../components/gamesFilter/gamesFilter";
import happyFace from "../../assets/images/smile.png";
import sadFace from "../../assets/images/sad.png";

const GamesByCategory = ({ match }) => {
  const [games, setGames] = useState([]);
  const [filtersURL, setFiltersURL] = useState("");
  const { categories, minprice, maxprice } = match.params;

  useEffect(() => {
    axios
      .post("http://localhost:3333/api/games/filter", {
        minPrice: minprice,
        maxPrice: maxprice,
        categories: categories.split("-"),
      })
      .then((res) => {
        if (res.data) {
          setGames(res.data[0]);
          console.log(res.data);
        }
      });
  }, [categories, minprice, maxprice]);

  useEffect(() => {
    window.history.replaceState(null, null, filtersURL);
  }, [filtersURL]);

  return (
    <div className="gc-container">
      <Navbar />
      <GamesFilter
        defaultCategories={categories}
        setGames={setGames}
        minPriceParam={minprice}
        maxPriceParam={maxprice}
        setFiltersURL={setFiltersURL}
      />

      <div className="gc-games-container">
        {games.map((game) => {
          return (
            <Link to={"/game/" + game.id} key={game.id} style={{ textDecoration: "none" }}>
              <div className="gc-game-container" key={game.id}>
                <div className="gc-game-info-container">
                <div className="gc-game-thumbnail-container">
                  <img className="gc-game-thumbnail" src={game.thumbnail} alt="thumbnail" />
                </div>
                  <div className="gc-game-price-name-container">
                    <h2 className="gc-game-name">{game.name}</h2>
                    <h2 className="gc-game-price">${game.price}</h2>
                  </div>
                  <div className="gc-game-rating-container">
                    <img src={happyFace} alt="likes" className="gc-like-icon" />
                    <h2 className="gc-like-counter">{game.likes}</h2>
                    <img src={sadFace} alt="dislike" className="gc-dislike-icon" />
                    <h2 className="gc-dislike-counter">{game.dislikes}</h2>
                  </div>
                </div>
                <button className="gc-download-btn">Download</button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GamesByCategory;
