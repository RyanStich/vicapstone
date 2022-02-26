import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const Posts = () => {
  const [postData, Setpost] = useState(null);
  const [cata, Setcata] = useState(null);
  const [category, Setcategory] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      "categories": categories[]->title,
      mainImage {
          asset-> {
              _id,
              url
          },
          alt,
      }

  }`
      )
      .then((data) => Setpost(data))
      .catch(console.log("a"));
  }, []);
  return (
    <>
      <div className="main">
        <section className="card-holder">
            {postData &&
              postData.map((post, index) => (
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
        </section>
      </div>
    </>
  );
};

export default Posts;
