import React from "react"
import "./styles.css"
import MonthTops from "../../components/games/month-tops/month-tops"
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <MonthTops />
    </div>
  );
}

export default Home;
