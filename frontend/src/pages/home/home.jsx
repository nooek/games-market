import React from "react"
import "./styles.css"
import MonthTops from "../../components/games/month-tops/month-tops"
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <MonthTops />
      <div className="class" name="sales">
        <h2 className="class-category">Sales</h2>
        <div className="games-container"></div>
      </div>
      <div className="class" name="paid-games">
        <h2 className="class-category">Paid ones</h2>
        <div className="games-container"></div>
      </div>
      <div className="class" name="free-games">
        <h2 className="class-category">For free</h2>
        <div className="games-container"></div>
      </div>
    </div>
  );
}

export default Home;
