import React, { useState, useEffect } from "react";
import "./styles.css"
import axios from "axios"
import PriceRange from "./priceRange/priceRange";
import Categories from "./categories/categories";

const GamesFilter = (props) => {
  const [minPrice, setMinPrice] = useState(props.minPriceParam)
  const [maxPrice, setMaxPrice] = useState(props.maxPriceParam)
  const [categories, setCategories] = useState(props.defaultCategories.split("-"))

  const applyFilter = () => {
    axios.post("http://localhost:3333/api/games/filter", {
      minPrice: minPrice,
      maxPrice: maxPrice,
      categories: categories
    }).then((res) => {
      console.log(res)
      if(res.data) {
        props.setGames(res.data[0])
      }
    })
  }

  useEffect(() => {
    if (categories.length) {
      props.setFiltersURL(`/games/category/${categories.join("-")}/${minPrice}/${maxPrice}`)
    } else {
      props.setFiltersURL(`/games/category/any/${minPrice}/${maxPrice}`)
    }
  }, [categories, props, maxPrice, minPrice])

  return (
    <div className="gf-container">
      <div className="gf-price-rating-container">
        <PriceRange 
          setMaxPrice={setMaxPrice} 
          setMinPrice={setMinPrice}
          applyFilter={applyFilter} />
      </div>
      <Categories
        setCategories={setCategories}
        categories={categories}
        applyFilter={applyFilter}
        category={categories}
      />
    </div>
  )
}

export default GamesFilter
