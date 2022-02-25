import "./styles/app.scss";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Destination from "./pages/Destination";
import Explore from "./pages/Explore";
import Category from "./pages/Category";
import Posts from "./components/Posts";

// Router Imports
import { Routes, Route } from "react-router-dom";

function App() {
  // State
  const [isActive, setActive] = useState("false");
  return (
    <div className="App">
      <Nav isActive={isActive} setActive={setActive} />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route path="/explore/:id" exact element={<Category />} />
        <Route path="/explore/:id/:id" exact element={<Destination />} />
      </Routes>
    </div>
  );
}

export default App;
