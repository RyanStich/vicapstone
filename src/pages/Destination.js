import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

const Destination = () => {
  const url = useLocation();
  console.log(url);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Destination;
