import React from "react";
import { Link } from "react-router-dom";  
import Header from "../../header";
import Footer from '../../footer'
import "../../../css/pages/home/homeMain.scss";
<<<<<<< HEAD
import NewsComponent from "./NewsComponent";
import NewsFeed from "./NewsFeed";
=======
import Slider from "./Slider/Slider.tsx";
>>>>>>> d3d66e9164e1d37c483480d182263f188ec23275

function home() {
  return (
    <>
      <Header />
      <div className="homeMain">
        <Slider/>
        <div className="home_categories">
    <NewsFeed/>
    {/* <NewsComponent/>   */}
        </div> 
        <Footer/>
      </div>
    </>
  );
}

export default home;
