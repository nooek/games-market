import React from "react";
import "./styles.css"
import CurrencyInput from "react-currency-input-field";

const GameInfo = ({ setName, setDesc, setPrice }) => {
  return (
    <div className="info-inputs-container">
      <div className="info-input-container">
        <h1 className="info-input-category">Name</h1>
        <input
          className="info-input"
          placeholder="Game Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="info-input-container">
        <h1 className="info-input-category">Description</h1>
        <textarea
          className="info-input desc-input"
          placeholder="Game Description"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="info-input-container">
        <h1 className="info-input-category">Price (dollars)</h1>
        <CurrencyInput
          className="info-input"
          defaultValue={0}
          decimalsLimit={2}
          prefix="$"
          onValueChange={(value) => setPrice(value)}
        />
      </div>
    </div>
  );
};

export default GameInfo;
