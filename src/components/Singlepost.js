import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SinglePost = ({ postData, Setpost }) => {
  const [filterSinglePost, SetfilterSinglePost] = useState([]);
  const [filterTitle, SetFilterTitle] = useState("");

  const url = useLocation();

  useEffect(() => {
    const awaitData = async () => {
      const category = postData.filter(
        (flicks) =>
          `/explore/${flicks.categories[0]}/${flicks.slug.current}` ===
          url.pathname
      );
      SetfilterSinglePost(category);
    };
    awaitData().catch(console.error);
  }, [postData, url]);

  useEffect(() => {
    const getData = async () => {
      const pageTitle = filterSinglePost.map((flicks) => flicks.title);
      SetFilterTitle(pageTitle);
    };
    getData().catch(console.error);
  }, [filterSinglePost, url]);

  return (
    <>
      <h1 className="single_category_title">
        Now Exploring: {filterTitle[0]}{" "}
      </h1>
      <div className="singlepost-main">
        <div className="single-card-holder">
          {filterSinglePost &&
            filterSinglePost.map((post, index) => (
              <div className="vi-card">
                <div
                  className="card__img"
                  style={{
                    backgroundImage: `url("${post.mainImage.asset.url}")`,
                  }}
                ></div>
                <div className="card__body">
                  <h3>{post.title}</h3>
                  <p>{post.body[0].children[0].text}</p>
                  <button>
                    <a href={post.link} target="_blank">
                      Map View
                    </a>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
