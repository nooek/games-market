import React from "react";
import axios from "axios";
import "./styles.css";
import { useUserData } from "../../store/userContext";

const BecomeDevMobile = ({ chooseYes, chooseNo }) => {
  const { userData } = useUserData();

  const becomeDev = () => {
    axios
      .post("http://localhost:3333/api/devv", {
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
    chooseYes();
  };

  return (
    <div className="container-bdevmobile">
      <h2 className="question-bdevmobile">
        To publish games you have to be a dev, do you want to become one?
      </h2>
      <div className="choice-container-bdevmobile">
        <button onClick={() => becomeDev()} className="choice-btns-bdevmobile">
          Yes
        </button>
        <button onClick={chooseNo} className="choice-btns-bdevmobile">
          No
        </button>
      </div>
    </div>
  );
};

export default BecomeDevMobile;
