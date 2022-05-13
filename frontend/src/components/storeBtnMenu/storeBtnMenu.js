import React from "react";
import { Link } from "react-router-dom";
import "./index.css"
import styled from "styled-components"

const LinkToCategory = styled(Link)`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid grey;
  background-color: rgb(214, 214, 214);
  &:hover {
    background-color: rgb(168, 168, 168);
  }
`

const StoreMenu = ({ mouseEnter, mouseLeave }) => {
  const categories = [
    'action',
    'adventure',
    'puzzle',
    'horror',
    'shooter',
    'strategy'
  ];
  return (
    <div className="store-menu-container" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {
        categories.map((category, index) => {
          return (
            <LinkToCategory to={"/games/category/" + category + "/0/9999"} key={index}>
              <div>
                <h2 className="category-name">{category}</h2>
              </div>
            </LinkToCategory>
          )
        })
      }
    </div>
  )
}

export default StoreMenu
