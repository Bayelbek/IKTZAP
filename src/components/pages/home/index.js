import React from "react";
import { Link } from "react-router-dom";  
import Header from "../../header";
import Footer from '../../footer'
import "../../../css/pages/home/homeMain.scss";
import NewsFeed from "./NewsFeed";
import Slider from "./Slider/Slider.tsx";


function home() {
  return (
    <>
      <Header />
      <div className="homeMain">
        <Slider/>
        <div className="home_categories">
    <NewsFeed/>
        </div> 
        <Footer/>
      </div>
    </>
  );
}

export default home;
