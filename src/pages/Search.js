import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Lakes from "../components/locations/Lakes";
import Hiking from "../components/locations/Hiking";
import Parks from "../components/locations/Parks";
import Trails from "../components/locations/Trails";
import Beaches from "../components/locations/Beaches";
import RV from "../components/locations/RV-Parks";
import Camp from "../components/locations/Campsites";

const Search = ({ postData, Setpost }) => {
  const [searchData, setSearchData] = useState([]);

  return (
    <>
      <div className="search-holder">
        <div className="bar-holder">
          <h1>Search For Destinations</h1>
          <input
            type="text"
            placeholder="Search Our Destinations"
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
        </div>
        <div className="search-hero-container">
          <h1>Find Your Destination</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
            illum dolor cupiditate distinctio facere tenetur eveniet molestiae,
            aspernatur enim veritatis, nesciunt quae maxime voluptatem deserunt?
            Sint possimus vel reprehenderit delectus?
          </p>
        </div>
      </div>
      <div className="search-main">
        <section className="card-holder">
          {postData &&
            postData
              .filter((val) => {
                if (searchData == "") {
                  return "";
                } else if (
                  val.title.toLowerCase().includes(searchData.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((post, index) => (
                <div className="vi-card">
                  <Link
                    className="vi__route"
                    to={
                      "/explore/" + post.categories[0] + "/" + post.slug.current
                    }
                    key={post.slug.current}
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
                    <p>{post.body[0].children[0].text}</p>
                  </div>
                  <div className="card__footer">
                    <button>
                      <a href={post.link} className="footer__link">
                        Map View
                      </a>
                    </button>
                    <button>
                      <a href={post.link} className="footer__link">
                        View Destination
                      </a>
                    </button>
                  </div>
                </div>
              ))}
        </section>
        <button></button>
      </div>
    </>
  );
};

export default Search;
