import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useUserData } from "../../store/userContext";
import happyFace from "../../assets/images/smile.png";
import sadFace from "../../assets/images/sad.png";
import MyGamesMenu from "../../components/myGamesMenu/myGamesMenu";

const MyGames = () => {
  const { userData } = useUserData();
  const [games, setGames] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3333/api/games/dev/${userData.email}`).then((res) => {
      console.log(res.data);
      setGames(res.data[0]);
    });
  }, [userData.email]);

  return (
    <div className="my-gamess-container">
      <h2 className="my-games-title">My Games</h2>
      <div className="my-games-showcase">
        {games.map((game) => {
          console.log(game);
          return (
            <div className="my-games-container" key={game.id}>
              <Link to={"/game/" + game.id} key={game.id} style={{ textDecoration: "none" }}>
                <div className="my-games-info-container">
                  {/* <img className="my-games-thumbnail" src={game.thumbnail} alt="thumbnail" /> */}
                  <div className="my-games-price-name-container">
                    <h2 className="my-games-name">{game.name}</h2>
                    <h2 className="my-games-price">${game.price}</h2>
                  </div>
                  <div className="my-games-rating-container">
                    <img src={happyFace} alt="likes" className="my-games-like-icon" />
                    <h2 className="my-games-like-counter">{game.likes}</h2>
                    <img src={sadFace} alt="dislike" className="my-games-dislike-icon" />
                    <h2 className="my-games-dislike-counter">{game.dislikes}</h2>
                  </div>
                </div>
              </Link>
              <h2 className="my-games-options" onClick={() => setShowMenu(!showMenu)}>
                :
              </h2>
              {showMenu ? <MyGamesMenu gameId={game.id} /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyGames;
