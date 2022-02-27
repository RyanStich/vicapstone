import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

const Cata = ({ postData, Setpost}) => {

  const [cata, Setcata] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const url = useLocation()

  useEffect(() => {
    const category = postData.filter((flicks) => `/explore/${flicks.categories[0]}` === url.pathname);
    setFilteredData(category);
    console.log(category)
  }, [cata, url]);



  return (
    <>
      <div className="main">
        <section>
          <div className="card-holder">
           {filteredData &&
             filteredData.map((post, index) => (
                <div className="vi-card">
                  <Link
                    to={"/explore/" + post.categories[0] + "/" + post.slug.current} key={post.slug.current}

                  >
                    <div className="card__img">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                      />
                    </div>
                  </Link>
                  <div className="card__body">
                    <h3>{post.title}</h3>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};



export default Cata;
