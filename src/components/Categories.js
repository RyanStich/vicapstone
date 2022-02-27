import React from "react";
import Posts from "./Posts";
import Cata from "./Cata";

const Categories = ({ postData, Setpost}) => {
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
      <Cata postData={postData} Setpost={Setpost} />
    </div>
  );
};

export default Categories;