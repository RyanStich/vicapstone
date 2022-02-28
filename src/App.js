import "./styles/app.scss";
import React, {useState, useEffect} from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Destination from "./pages/Destination";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Posts from "./components/Posts";
import Cata from "./components/Cata";
import sanityClient from "./client";

// Router Imports
import { Routes, Route, useLocation } from "react-router-dom";




function App() {
  // State
  const [isActive, setActive] = useState("false");
  const [postData, Setpost] = useState(null);

// Querying my sanity content management system, then taking my data and setting my state for postData
  const url = useLocation();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      link,
      "body": body[],
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
      .catch(console.log());
  }, [url.pathname]);

  console.log(postData)


  return (
    <div className="App">
      <Nav isActive={isActive} setActive={setActive} />
      <Routes>
        <Route path="/" exact element={<Landing postData={postData} Setpost={Setpost} />} />
        <Route path="/explore" exact element={<Explore postData={postData} Setpost={Setpost} />} />
        <Route path="/explore/:id" exact element={<Category postData={postData} Setpost={Setpost} />} />
        <Route path="/explore/:id/:slug" exact element={<Destination postData={postData} Setpost={Setpost} />} />
      </Routes>
    </div>
  );
}

export default App;
