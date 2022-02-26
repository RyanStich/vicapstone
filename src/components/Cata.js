import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

const Cata = () => {

  const [cata, Setcata] = useState([]);

  const [filteredData, setFilteredData] = useState([])

  // const [fuck, Setfuck] = useState(null)
  const url = useLocation()
  useEffect( () => {
    //         "categories": categories[]->title,
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
            .then((data) => Setcata(data))
      .catch(console.log("i am cata "));
  }, []);


  const categoryNames = cata.filter((item) => {
    return item.categories[0] === url.pathname;
  })

  // console.log(categoryNames)



  // console.log(categoryNames)

  // const test = categoryNames.filter((flicks) => flicks === url.pathname);

  // console.log(test)


  // useEffect(() => {
  //   const categorized = categoryNames.filter((datab) => datab.categories[0] === `/${url.pathname}`);
  //   setFilteredData(categorized);
  //   console.log(filteredData)
  // }, [cata, url]);

            {/* {categoryNames &&
             categoryNames.map((post, index) => ( */}

  
  return (
    <>
      <div className="main">
        <section>
          <div className="card-holder">
            {cata &&
             cata.map((post, index) => (
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

export default Cata;
