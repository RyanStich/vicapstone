import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Parks = ({ postData, Setpost }) => {
  const url = useLocation();
  const [parkData, SetParkData] = useState([]);

  
  // Park Data
  useEffect(() => {
    const waitForData = async () => {
      const dataPark = postData.filter(
        (flicks) => flicks.categories[0] === "parks"
      );
      SetParkData(dataPark);
    };
    waitForData().catch(console.error);
}, [url, postData]);

  return (
    <>
      <div className="lakes">
      <h1 className="category_title">Explore Parks</h1>
        <div className="main">
          <section className="card-holder">
            {parkData &&
              parkData.slice(0, 3).map((post, index) => (
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
                      <a href={post.link} target="_blank" className="footer__link">
                        Map View
                      </a>
                    </button>
                    <button>
                    <Link 
                        to={
                          "/explore/" +
                          post.categories[0] +
                          "/" +
                          post.slug.current
                        } className="footer__link">
                        View Destination
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </section>
        </div>
        <div className="explore-more">
        <Link to={"/explore/parks"}> 
              <button>
                <a className="footer__link">View All Parks</a>
              </button>
              </Link>
            </div>
      </div>
    </>
  );
};

export default Parks;
