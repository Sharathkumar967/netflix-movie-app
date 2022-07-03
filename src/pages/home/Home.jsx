import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Fetured from "../../components/fetured/Fetured";
import List from "../../components/list/List";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Fetured/>
      <List/>
      <List/>
      <List/>
    </div>
  );
};

export default Home;
