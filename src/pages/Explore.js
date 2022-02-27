import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Landing from "./Landing";
import Cata from "../components/Cata";
import Posts from "../components/Posts";

const Explore = ({postData, Setpost}) => {
  return (
    <>
      <h1>Hllo</h1>
      <Hero postData={postData} Setpost={Setpost}  />
    </>
  );
};

export default Explore;
