import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";
import Posts from "../components/Posts";
import Singlepost from "../components/Singlepost";

const Destination = ({postData ,Setpost}) => {
  const url = useLocation();

  return (
    <>
        <div className="hold-on">
      <Singlepost postData={postData} Setpost={Setpost} />
      </div>
    </>
  );
};

export default Destination;
