import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Posts from "../components/Posts";

const Destination = () => {
  const url = useLocation();

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Destination;
