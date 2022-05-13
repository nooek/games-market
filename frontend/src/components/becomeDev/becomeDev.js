import React from "react";
import { useUserData } from "../../store/userContext";
import axios from "axios";
import "./becomeDevStyles.css";

const BecomeDev = ({ chooseNo, chooseYes }) => {
  const { userData } = useUserData();

  const becomeDev = () => {
    axios
      .post("http://localhost:3333/api/dev", {
        userId: userData.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        }
      });
    chooseYes()
  };

  return (
    <div className="become-dev-container">
      <h2 className="question">
        To publish games you have to be a dev, do you want to become one?
      </h2>
      <div className="decision-btns-container">
        <button className="decision-btns yes-decision-btn" onClick={() => becomeDev()}>
          Yes
        </button>
        <button className="decision-btns no-decision-btn" onClick={chooseNo}>
          No
        </button>
      </div>
    </div>
  );
};

export default BecomeDev;
