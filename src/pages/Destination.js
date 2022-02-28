import React from "react";
import { useLocation } from "react-router-dom";
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
