import React from "react";
import "./styles.css"

const CategoriesBtns = ({ selectCategory, showMore }) => {
  const categories = [
    'Adventure',
    'Action',
    'Shooter',
    'Top Down',
    'Fantasy',
    'Puzzle',
    'Strategy',
    'Metroid Vania',
    'Sports',
    'NSFW',
    'Simulation',
    'Platform',
    'Rhythm',
    'RPG',
    'Casual',
    'Trivia',
    'Battle Royale',
    'Horror',
    'Anime',
    'Cartoon'
  ]

  const formatCategoryId = (category) => {
    return category.split(" ").join('-').toLowerCase()
  }

  return (
    categories.map((category, index) => {
      if (index < 10 || showMore ) {
        return (
            <button className="gf-categories-options" id={formatCategoryId(category)} onClick={(e) => selectCategory(e)}>
            {category}
            </button>
        )
      }
      return null
    })
  )
}

export default CategoriesBtns;
