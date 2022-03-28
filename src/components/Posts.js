import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

const Posts = ({ postData, Setpost }) => {
  const url = useLocation();
  const [postDigit, SetPostDigit] = useState(9);

  useEffect(() => {
    SetPostDigit(9);
  }, [url]);

  return (
    <>
      <div className="title">
        <h1 className="category_title">Featured Destinations</h1>
        <div className="main">
          <section className="card-holder">
            {postData &&
              postData.slice(0, postDigit).map((post, index) => (
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
                        alt="Card Image"
                      />
                    </div>
                  </Link>
                  <div className="card__body">
                    <h3>{post.title}</h3>
                    <p>{post.body[0].children[0].text}</p>
                  </div>
                  <div className="card__footer">
                    <button className="map__view">
                      <a target="_blank"  href={post.link} className="footer__link">
                        Map View
                      </a>
                    </button>
                    <button className="view__destination">
                      <Link  to={
                      "/explore/" + post.categories[0] + "/" + post.slug.current
                    } className="footer__link">
                        View Destination
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </section>
        </div>
        <div className="add__more">
              <button onClick={() => SetPostDigit(postDigit + 9)}>
                <a className="footer__link">View More</a>
              </button>
            </div>
      </div>
    </>
  );
};

export default Posts;
