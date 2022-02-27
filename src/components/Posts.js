import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const Posts = ({ postData, Setpost }) => {
  //   const [postData, Setpost] = useState(null);
  //   const [cata, Setcata] = useState(null);
  //   const [category, Setcategory] = useState(null);

  //   useEffect(() => {
  //     sanityClient
  //       .fetch(
  //         `*[_type == "post"]{
  //       title,
  //       slug,
  //       link,
  //       "categories": categories[]->title,
  //       mainImage {
  //           asset-> {
  //               _id,
  //               url
  //           },
  //           alt,
  //       }

  //   }`
  //       )
  //       .then((data) => Setpost(data))
  //       .catch(console.log("a"));
  //   }, []);

  console.log(postData);
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
                </div>
                <div className="card__footer">
                  <button>
                    <a href={post.link} className="footer__link">
                      Map View
                    </a>
                  </button>

                  {/* <a className="footer__link" href={post.link}>
                    <h3>Visit</h3>
                    </a> */}
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default Posts;
