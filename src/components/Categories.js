import React from "react";
import Posts from "./Posts";
import Cata from "./Cata";

const Categories = ({ postData, Setpost}) => {
  return (
    <div className="hold-on">
      <Cata postData={postData} Setpost={Setpost} />
    </div>
  );
};

export default Categories;