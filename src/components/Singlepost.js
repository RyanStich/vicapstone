// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import sanityClient from "../client";
// import ImageUrlBuilder from "@sanity/image-url";
// import BlockContent from "@sanity/block-content-to-react";

// const builder = ImageUrlBuilder(sanityClient);

// function urlFor(source) {
//   return builder.image(source);
// }

// const Singlepost = () => {
//   const [singlePost, setSinglePost] = useState(null);
//   const { slug } = useParams();

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[slug.current === "${slug}"]{
//           title,
//           "categories": categories[]->title,
//           id,
//           slug,
//           mainImage {
//               asset-> {
//                   _id,
//                   url
//               }
//           },
//           body,
//       }`
//       )
//       .then((data) => setSinglePost(data[0]))
//       .catch(console.error);
//   }, [slug]);

//   return (
//     <main>
//       <article>
//         <header>
//           <div>
//             <div>
//               <h1>{singlePost.title}</h1>
//               <div>
//                 <img
//                   src={urlFor(singlePost.authorImage).url()}
//                   alt={singlePost.name}
//                 />
//               </div>
//               <p>{singlePost.name}</p>
//             </div>
//           </div>
//           <img src="" alt="" />
//         </header>
//         <div>
//           <BlockContent
//             blocks={singlePost.body}
//             projectId="ffvf77l1"
//             dataset="production"
//           />
//         </div>
//       </article>
//     </main>
//   );
// };

// export default Singlepost;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import sanityClient from "../client";

const SinglePost = ({ postData, Setpost }) => {
  const [filterSinglePost, SetfilterSinglePost] = useState([]);

  const url = useLocation();
  useEffect(() => {
    const category = postData.filter(
      (flicks) =>
        `/explore/${flicks.categories[0]}/${flicks.slug.current}` ===
        url.pathname
    );
    SetfilterSinglePost(category);
    console.log(category);
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
