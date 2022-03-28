import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Cata = ({ postData, Setpost }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [postTitle, SetPostTitle] = useState([]);
  const [postNumber, SetPostNumber] = useState(6);
  const url = useLocation();
  let title = "test";

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

  useEffect(() => {
    const getData = async () => {
      const pageTitle = postData.map((flicks) => flicks.categories[0]);
      SetPostTitle(pageTitle);
    };
    getData().catch(console.error);
  }, [postData, url]);

  let mytitle = url.pathname.slice(9);
  const getMyTitle = postTitle.filter((item) => {
    return item === mytitle;
  });

  useEffect(() => {
    SetPostNumber(6);
  }, [url]);

  return (
    <>
      <div className="title">
        <h1 className="category_title">Currently Exploring: {getMyTitle[0]}</h1>
        <div className="main">
          <section className="card-holder">
            {filteredData &&
              filteredData.slice(0, postNumber).map((post, index) => (
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
                  <div className="card__footer">
                    <button className="map__view">
                      <a
                        href={post.link}
                        target="_blank"
                        className="footer__link"
                      >
                        Map View
                      </a>
                    </button>
                    <button className="view__destination">
                      <Link
                        to={
                          "/explore/" +
                          post.categories[0] +
                          "/" +
                          post.slug.current
                        }
                        className="footer__link"
                      >
                        View Destination
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </section>
        </div>
        <div className="add__more">
          <button onClick={() => SetPostNumber(postNumber + 9)}>
            <a className="footer__link">View More</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cata;
