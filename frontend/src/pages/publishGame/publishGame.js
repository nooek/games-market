import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { useUserData } from "../../store/userContext";
import ListCategories from "../../components/listCategories/listCategories";
import GameInfo from "../../components/gameInfo/gameInfo";

const PublishGame = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [game, setGame] = useState("");
  const [preview, setPreview] = useState("");
  const [activeCategories, setActiveCategories] = useState([]);
  const { userData } = useUserData();
  
  const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/dl6nr4es9/upload";

  const getDevId = async () => {
    const res = await axios.get(`http://localhost:3333/api/dev/${userData.id}`);
    return res.data.dev;
  };

  const publish = async () => {
    const { id } = await getDevId();
    const files = await uploadFiles();
    axios
      .post("http://localhost:3333/api/games", {
        name: name,
        desc: desc,
        devId: id,
        thumbnail: files.thumbnail,
        game: files.game,
        price: price || 0,
        owner: userData.email,
        categories: activeCategories
      })
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          setMessage(res.data.message);
        }
        setName("")
        setDesc("")
        setPrice(0)
        setImage("")
        setPreview("")
        setGame("")
        setActiveCategories("")
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          setMessage(err.response.data.message);
        }
      });
  };

  const uploadImage = async () => {
    if (image.length > 0) {
      const imageFormData = new FormData();
      imageFormData.append("file", image[0]);
      imageFormData.append("upload_preset", "ekbock23");
      const { data } = await axios.post(CLOUDINARY_API_URL, imageFormData);
      return data;
    }
  };

  const uploadGame = async () => {
    if (game.length <= 0) return
    const gameFormData = new FormData();
    gameFormData.append("file", game[0]);
    gameFormData.append("upload_preset", "ekbock23");
    const { data } = await axios.post(CLOUDINARY_API_URL, gameFormData);
    return data;
  };

  const uploadFiles = async () => {
    const games = await uploadGame();
    const  bb = await uploadImage();
    return {
      thumbnail: bb,
      game: games,
    };
  };

  useEffect(() => {
    if (image.length) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        if (ev.target.result) {
          setPreview(ev.target.result);
        }
      };
      reader.readAsDataURL(image[0]);
    }
  }, [image]);

  return (
    <div className="publish-game-container">
      <div className="forms-container">
        <div className="game-thumbnaill-container">
          <h2 className="thumbnail-text">Game Thumbnail</h2>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files)}
            style={{ color: "white" }}
          />
          {preview ? <img className="thumbnail" src={preview} alt="preview" /> : null}
        </div>
        <GameInfo setName={setName} setDesc={setDesc} setPrice={setPrice} />
        <h1 className="info-input-category">Game</h1>
        <input type="file" onChange={(e) => setGame(e.target.files)} style={{ color: "white", marginBottom: "30px", marginTop: "30px" }} />
        <h1 className="info-input-category">Category</h1>
        <ListCategories activeCategories={activeCategories} setActiveCategories={setActiveCategories} />
        <button className="create-btn" onClick={() => publish()}>
          Create
        </button>
        <h2 style={{ color: "white" }}>{message}</h2>
      </div>
    </div>
  );
};

export default PublishGame;
