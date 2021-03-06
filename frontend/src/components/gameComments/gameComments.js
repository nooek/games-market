import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import FormatDate from "../../utils/formattedDateGen";
const moment = require("moment");

const GameComments = ({ id, userData }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3333/api/comments/${id}`).then((res) => {
      if (!res.message) {
        setComments(res.data[0]);
      }
    });
  }, [id]);

  const postComment = () => {
    axios.post("http://localhost:3333/api/comments", {
      comment: comment,
      gameId: id,
      userId: userData.id,
    });
    setComments([
      {
        comment: comment,
        date: moment().format("YYYY-MM-DD HH:mm:ss"),
        username: userData.username,
      },
      ...comments,
    ]);
    setComment("")
  };

  return (
    <div className="gcomments-container">
      <h2 className="gcomments-title">Comments</h2>
      <div className="gcomments-write-container">
        <input
          className="gcomments-write-input"
          placeholder="Write your comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className="gcomments-button-send-comment" onClick={() => postComment()}>
          Send
        </button>
      </div>
      <div className="gcomments-cards-container">
        {comments.map((comment, index) => {
          return (
            <div className="gcomments-cards" key={index}>
              <div className="gcomments-cards-header">
                <h2 className="gcomments-cards-user">{comment.username}</h2>
              </div>
              <div className="gcomments-cards-comment-container">
                <h2 className="gcomments-cards-comment">{comment.comment}</h2>
                <h2 className="gcomments-cards-comment-time">
                  {new FormatDate(comment.date).format()}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameComments;
