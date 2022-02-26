import React from "react";
import mtn from "../images/vii.jpg";
import house from "../images/house.svg";
import star from "../images/star.svg";
import chairs from "../images/chairs.svg";
import backpack from "../images/backpack.svg";
import bus from "../images/bus.svg";
import compass from "../images/compass.svg";
import forest from "../images/forest.svg";
import kayak from "../images/kayak.svg";
import tent from "../images/tent.svg";
import signs from "../images/signs.svg";
import logo from "../images/logo.svg";
import Posts from "./Posts";
import Cata from "./Cata";

const Hero = () => {
  return (
    <div className="holder">
      <div className="hero-container">
        <h1>Explore</h1>
        <h1>Vancouver Island</h1>
        <p>
          ExploreVI is a digital guidebook, mapping all your favorite locations
          on Vancouver Island. built to serve you anywhere, at anytime!
        </p>
        <div className="button-group">
          <a href="/">
            <button className="main_cta">Explore</button>
          </a>
          <a href="">
            <button className="secondary_cta">View</button>
          </a>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Hero;
