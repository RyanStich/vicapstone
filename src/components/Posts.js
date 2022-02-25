import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client"

const Posts = () => {
  const [postData, Setpost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage {
            asset-> {
                _id,
                url
            },
            alt
        }

    }`
      )
      .then((data) => Setpost)
      .catch(console.log("OHNOOOOOO"));
  }, []);

  return (
    <>
      <div className="main">
        <section>
          <h1>Blogger</h1>
          <h2>this is my Postpage thanks for comin</h2>
          <div className="">
            <article>
              <Link to="/">
                <span>
                  <img />
                  <span>
                    <h3></h3>
                  </span>
                </span>
              </Link>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Posts;
