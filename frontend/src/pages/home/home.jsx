import React from "react"
import "./styles.css"
import {
  Navbar,
  FreeGames,
  BestRatedGames
} from "../../components/index";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <FreeGames />
      <BestRatedGames />
    </div>
  );
}

export default Home;
