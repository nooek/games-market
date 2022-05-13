import React from "react";

const ListCategories = ({ activeCategories, setActiveCategories }) => {
  const changeColor = (e) => {
    if (!activeCategories.includes(e.target.id)) {
      setActiveCategories([e.target.id, ...activeCategories]);
      e.target.style.backgroundColor = "rgb(199, 199, 199)";
    } else {
      const idIndex = activeCategories.indexOf(e.target.id);
      activeCategories.splice(idIndex, 1);
      e.target.style.backgroundColor = "";
    }
    console.log(activeCategories)

  };

  return (
    <div className="choose-category">
      <button className="category-option" id="action" onClick={(e) => changeColor(e)}>
        Action
      </button>
      <button className="category-option" id="adventure" onClick={(e) => changeColor(e)}>
        Adventure
      </button>
      <button className="category-option" id="horror" onClick={(e) => changeColor(e)}>
        Horror
      </button>
      <button className="category-option" id="shooter" onClick={(e) => changeColor(e)}>
        Shooter
      </button>
      <button className="category-option" id="top-down" onClick={(e) => changeColor(e)}>
        Top-Down
      </button>
      <button className="category-option" id="metroid-vania" onClick={(e) => changeColor(e)}>
        MetroidVania
      </button>
      <button className="category-option" id="anime" onClick={(e) => changeColor(e)}>
        Anime
      </button>
      <button className="category-option" id="cartoon" onClick={(e) => changeColor(e)}>
        Cartoon
      </button>
      <button className="category-option" id="puzzle" onClick={(e) => changeColor(e)}>
        Puzzle
      </button>
      <button className="category-option" id="sports" onClick={(e) => changeColor(e)}>
        Sports
      </button>
      <button className="category-option" id="strategy" onClick={(e) => changeColor(e)}>
        Strategy
      </button>
      <button className="category-option" id="music" onClick={(e) => changeColor(e)}>
        Music
      </button>
      <button className="category-option" id="fantasy" onClick={(e) => changeColor(e)}>
        Fantasy
      </button>
      <button className="category-option" id="platform" onClick={(e) => changeColor(e)}>
        Platform
      </button>
      <button className="category-option" id="rhythm" onClick={(e) => changeColor(e)}>
        Rhythm
      </button>
      <button className="category-option" id="rpg" onClick={(e) => changeColor(e)}>
        RPG
      </button>
      <button className="category-option" id="casual" onClick={(e) => changeColor(e)}>
        Casual
      </button>
      <button className="category-option" id="trivia" onClick={(e) => changeColor(e)}>
        Trivia
      </button>
      <button className="category-option" id="battle-royale" onClick={(e) => changeColor(e)}>
        Battle Royale
      </button>
      <button className="category-option" id="simulation" onClick={(e) => changeColor(e)}>
        Simulation
      </button>
      <button className="category-option" id="nsfw" onClick={(e) => changeColor(e)}>
        NSFW
      </button>
    </div>
  );
};

export default ListCategories;
