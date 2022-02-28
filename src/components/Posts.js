import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

const Posts = ({ postData, Setpost }) => {
  const url = useLocation();

  return (
    <>
      <div className="main">
        <section className="card-holder">
          {postData &&
            postData.map((post, index) => (
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
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default Posts;
