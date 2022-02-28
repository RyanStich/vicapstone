import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const SinglePost = ({ postData, Setpost }) => {
  const [filterSinglePost, SetfilterSinglePost] = useState([]);

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

  return (
    <>
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
                >
                  {/* <img
                         src={post.mainImage.asset.url}
                         alt={post.mainImage.alt}
                      /> */}
                </div>
                <div className="card__body">
                  <h3>{post.title}</h3>
                  <p>{post.body[0].children[0].text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
