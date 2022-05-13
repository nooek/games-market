import React, { useState, useEffect } from "react";
import axios from "axios";
import likeBtn from "../../assets/images/smile.png";
import dislikeBtn from "../../assets/images/sad.png";

const GameLikeDislike = ({ userData, played, id }) => {
  const [rating, setRating] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  console.log(userData)  
  useEffect(() => {
    axios.get(`http://localhost:3333/api/gamess/get-game/${id}`).then((res) => {
      console.log(res)
      setLikes(parseInt(res.data[0][0].likes));
      setDislikes(parseInt(res.data[0][0].dislikes));
    });
  }, [id]);

  useEffect(() => {
    axios.get(`http://localhost:3333/api/gamess/get-user-rating/${id}/${userData.id}`).then((res) => {
      if (!res.data.message) {
        setRating(res.data.rating)
      }
      console.log(res)
    });
  }, [id, userData.id]);

  const rate = (rating) => {
    if (played) {
      rating === "like" ? like() : dislike();
    }
  };

  const like = () => {
    axios
      .post("http://localhost:3333/api/gamess/rate", {
        userId: userData.id,
        gameId: id,
        rating: "like",
      })
      .then((res) => {
        console.log(res.data);
        setRating("like");
        if (res.data.rated.changedRating) {
          setLikes(likes + 1);
          setDislikes(dislikes - 1);
        } else {
          setLikes(likes + 1);
        }
      })
      .catch((err) => {
        if (err.response) console.log(err.response);
      });
  };

  const dislike = () => {
    axios
      .post("http://localhost:3333/api/gamess/rate", {
        userId: userData.id,
        gameId: id,
        rating: "dislike",
      })
      .then((res) => {
        console.log(res.data);

        setRating("dislike");
        if (res.data.rated.changedRating) {
          setLikes(likes - 1);
          setDislikes(dislikes + 1);
        } else {
          setDislikes(dislikes + 1);
        }
      })
      .catch((err) => {
        if (err.response.message) console.log(err.response);
      });
  };

  return (
    <div className="game-rating-container">
      <h2 className="game-rating-text">Do you like this game?</h2>
      <div className="game-rating-emojis-container">
        <div
          className="gr-emoji-container"
          style={rating === "like" ? { borderTop: "3px solid green" } : null}
        >
          <img
            src={likeBtn}
            className="rating-emoji like-emoji"
            alt="like button"
            onClick={() => rate("like")}
          />
          <h2 style={{ color: "white", marginTop: 10 }}>{likes}</h2>
        </div>
        <div
          className="gr-emoji-container"
          style={rating === "dislike" ? { borderTop: "3px solid red" } : null}
        >
          <img
            src={dislikeBtn}
            className="rating-emoji dislike-emoji"
            alt="dislike button"
            onClick={() => rate("dislike")}
          />
          <h2 style={{ color: "white", marginTop: 10 }}>{dislikes}</h2>
        </div>
      </div>
    </div>
  );
};

export default GameLikeDislike;
