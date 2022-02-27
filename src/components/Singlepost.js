import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

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
        <section>
          <div className="card-holder">
            {filterSinglePost &&
              filterSinglePost.map((post, index) => (
                <div className="vi-card">
                  <Link
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
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePost;
