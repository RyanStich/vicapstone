import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Beaches = ({ postData, Setpost }) => {
  const url = useLocation();

  const [beachData, SetBeachData] = useState([]);


  // Beach Data
  useEffect(() => {
    const waitForData = async () => {
      const dataBeach = postData.filter(
        (flicks) => flicks.categories[0] === "beaches"
      );
      SetBeachData(dataBeach);
    };
    waitForData().catch(console.error);
}, [url, postData]);

  return (
    <>
      <div className="lakes">
      <h1 className="category_title">Explore Beaches</h1>
        <div className="main">
          <section className="card-holder">
            {beachData &&
              beachData.slice(0, 3).map((post, index) => (
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
        </div>
        <div className="explore-more">
        <Link to={"/explore/beaches"}> 
              <button>
                <a className="footer__link">View All Beaches</a>
              </button>
              </Link>
            </div>
      </div>
    </>
  );
};

export default Beaches;
