import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Cata = ({ postData, Setpost }) => {
  const [filteredData, setFilteredData] = useState([]);
  const url = useLocation();

  // Async function to update our state, just incase a user refreshes on my site.
  useEffect(() => {
    const waitForData = async () => {
      const category = postData.filter(
        (flicks) => `/explore/${flicks.categories[0]}` === url.pathname
      );
      setFilteredData(category);
    };
    waitForData().catch(console.error);
  }, [postData, url]);

  return (
    <>
      <div className="main">
        <section className="card-holder">
          {filteredData &&
            filteredData.map((post, index) => (
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
                  <p>{post.body[0].children[0].text}</p>
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default Cata;
