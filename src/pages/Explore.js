import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Lakes from "../components/locations/Lakes";
import Hiking from "../components/locations/Hiking";
import Parks from "../components/locations/Parks";
import Trails from "../components/locations/Trails";
import Beaches from "../components/locations/Beaches";
import RV from "../components/locations/RV-Parks";
import Camp from "../components/locations/Campsites";

const Explore = ({ postData, Setpost }) => {
  return (
    <>
      <div className="holder">
        <div className="explore-hero-container">
          <h1>Explore Destinations</h1>
          <p>
            Explore all the different categories we've got in store for you.
            Whether its a weekend getaway, or a day-trip, ExploreVI has got you
            covered
          </p>
        </div>
        <Lakes postData={postData} Setpost={Setpost} />
        <Camp postData={postData} Setpost={Setpost} />
        <RV postData={postData} Setpost={Setpost} />
        <Beaches postData={postData} Setpost={Setpost} />
        <Trails postData={postData} Setpost={Setpost} />
      </div>
    </>
  );
};

export default Explore;
