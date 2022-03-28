import React from "react";
import Posts from "./Posts";
import { Link, useLocation } from "react-router-dom";

const Hero = ({ postData, Setpost }) => {
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
          <Link to="/explore">
            <button className="main_cta">Explore</button>
          </Link>
          <Link to="/search">
            <button className="secondary_cta">Search</button>
          </Link>
        </div>
      </div>
      <Posts postData={postData} Setpost={Setpost} />
    </div>
  );
};

export default Hero;
