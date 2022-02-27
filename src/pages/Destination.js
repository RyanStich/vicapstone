import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Posts from "../components/Posts";
import Singlepost from "../components/Singlepost";

const Destination = () => {
  const url = useLocation();

  return (
    <>
      <Singlepost />
    </>
  );
};

export default Destination;
