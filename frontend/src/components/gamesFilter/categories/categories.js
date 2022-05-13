import React, { useState, useEffect } from "react";
import CategoriesBtns from "./categoriesBtns/categoriesBtns";
import "./styles.css";

const Categories = ({ setCategories, applyFilter, categories }) => {
  const [showMore, setShowMore] = useState(false);

  const changeBtnColor = (e) => {
    if (!categories.includes(e.target.id)) {
      setCategories([e.target.id, ...categories.filter(each => each !== "any")]);
      e.target.style.backgroundColor = "rgb(199, 199, 199)";
    } else {
      const filteredCategories = categories.filter((each) => {
        return each !== e.target.id;
      })
      setCategories(filteredCategories);
      e.target.style.backgroundColor = "";
    }
  }

  const selectCategory = (e) => {
    changeBtnColor(e)
  };

  useEffect(() => {
    if (!categories.includes("any") && categories.length) {
      categories.map((category) => {
        console.log(category)
        const button = document.getElementById(category)
        if (button) return button.style.backgroundColor = "rgb(199, 199, 199)"
      })
    }
  }, [categories])

  useEffect(() => {
    if (categories.length === 0) {
      setCategories(["any"])
    }
  }, [categories, setCategories])

  return (
    <div className="gf-categories-container">
      <div className="gf-categories-options-container">
        <CategoriesBtns
          selectCategory={selectCategory}
          showMore={showMore}
        />
      </div>
      <button className="gf-show-more-btn" onClick={() => setShowMore(!showMore)}>
        { !showMore ? "Show more v" : "Show Less ^" }
      </button>
      <button className="gf-apply-btn" onClick={() => applyFilter()}>
        Apply
      </button>
    </div>
  );
};

export default Categories;
