import React, { useState } from "react";
import "./styles.css"

const PriceRange = ({ setMinPrice, setMaxPrice }) => {
  const [free, setFree] = useState(false)

  const selectFree = () => {
    setFree(!free)
    const freeBtn = document.getElementById('free-option-btn')
    if (free) {
      setMinPrice(0)
      setMaxPrice(0)
      freeBtn.style.backgroundColor = 'rgb(20, 255, 114)'
    }
    if (!free) {
      setMinPrice(0)
      setMaxPrice(9999)
      freeBtn.style.backgroundColor = 'rgb(239, 239, 239)'
    }
  }

  const setValue = (input, value) => {
    if (input === 'max') setMaxPrice(value)
    if (input === 'min') setMinPrice(value)
  }
  
  const verifyInput = (e, maxValue, minValue, input) => {
    if (e.target.value > maxValue) e.target.value = maxValue
    if (e.target.value < minValue) e.target.value = minValue
    setValue(input, e.target.value)
  }

  return (
    <div className="gf-price-range-container">
      <div className="price-range-from-container">
        <h2 className="price-range-text">Min</h2>
        <input 
          className="price-range-input" 
          type="number" 
          onChange={(e) => verifyInput(e, 9999, 0, 'min')}
          disabled={free ? true : false} />
      </div>
      <div className="price-range-to-container">
        <h2 className="price-range-text">Max</h2>
        <input 
          className="price-range-input" 
          type="number" 
          onChange={(e) => verifyInput(e, 9999, 1, 'max')}
          disabled={free ? true : false} />
      </div>
      <div className="price-range-btns-container">
        <button 
        className="price-range-free-option" 
        id="free-option-btn"
        onClick={() => selectFree()}>Free Games</button>
      </div>
    </div>
  );
}

export default PriceRange;
