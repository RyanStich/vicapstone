import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import house from "../images/house.svg";
import star from "../images/star.svg";
import chairs from "../images/chairs.svg";
import backpack from "../images/backpack.svg";
import bus from "../images/bus.svg";
import compass from "../images/compass.svg";
import search from "../images/search.svg";
import forest from "../images/forest.svg";
import kayak from "../images/kayak.svg";
import tent from "../images/tent.svg";
import signs from "../images/signs.svg";
import logo from "../images/logo.svg";
import arrow from "../images/arrow.svg";

const Nav = ({ isActive, setActive }) => {
  const [menuActive, SetMenuActive] = useState(false);
  const [navActive, SetNavActive] = useState(true);

  const toggleMe = () => {
    menuActive ? SetMenuActive(false) : SetMenuActive(true);
  };
  const toggleNav = () => {
    navActive ? SetNavActive(false) : SetNavActive(true);
  };

  console.log(navActive);
  return (
    <div className="wrap">
      <div className={`navbar ${navActive ? " " : "navbar__active"} `}>
        <div className="navbar__chunk">
          <img id="logo" src={logo} alt="ExploreVI Logo" className="logo" />
        </div>
        <div className="navbar__wrapper">
          <div className="navbar__inner">
            {/* Top Level Menu *** Home / Explore / Favorites */}
            <div className="main__menu">
              <div className="main__menu__title">
                <span>Explore</span>
              </div>
              <NavLink
                onClick={toggleNav}
                end
                to="/"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="house" alt="House Icon" src={house} />
                </div>
                <div className="link__item">Home</div>
              </NavLink>
              <NavLink
                onClick={toggleNav}
                end
                to="/explore"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={compass} alt="Compass Icon" />
                </div>
                <div className="link__item">Explore</div>
              </NavLink>
              <NavLink
                onClick={toggleNav}
                end
                to="/search"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="search" src={search} alt="Search Icon" />
                </div>
                <div className="link__item">Search</div>
              </NavLink>
              <div className="line"></div>
            </div>
            {/* Top Level Menu *** END*/}

            {/* Secondary Menu Begin *** Exploration Categories */}
            <div className="main__menu secondary-menu">
              <div className="main__menu__title">
                <span>All Categories</span>
              </div>
              <NavLink
                onClick={toggleNav}
                end
                to="/explore/lakes"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="house" src={kayak} alt="Kayak Icon" />
                </div>
                <div className="link__item">Lakes</div>
              </NavLink>

              <NavLink
                onClick={toggleNav}
                end
                to="/explore/campsites"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={tent} alt="Campsite Icon" />
                </div>
                <div className="link__item">Campsites</div>
              </NavLink>

              <NavLink
                onClick={toggleNav}
                end
                to="/explore/rv-parks"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={bus} alt="Bus Icon" />
                </div>
                <div className="link__item">RV Parks</div>
              </NavLink>
              <NavLink
                onClick={toggleNav}
                end
                to="/explore/beaches"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={signs} alt="Sign Icon" />
                </div>
                <div className="link__item">Beaches</div>
              </NavLink>
              <NavLink
                onClick={toggleNav}
                end
                to="/explore/trails"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={backpack} alt="Backpack Icon" />
                </div>
                <div className="link__item">Trails</div>
              </NavLink>
            </div>
            {/* Secondary Menu End *** END*/}
          </div>
        </div>
      </div>
      <div className="hero-nav">
        <div className="mobile-nav">
          <div class="container nav-container">
            <input
              onClick={toggleNav}
              class="checkbox"
              type="checkbox"
              id="navbox"
            />
            <label htmlFor="navbox">Menu</label>
            <div
              className={`hamburger-lines ${
                navActive ? " " : "hambugger-lines"
              } `}
            >
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </div>
          <Link to={"/"}>
            <img id="logo" src={logo} alt="ExploreVI Logo" className="logo" />
          </Link>
        </div>
        <div className="press-me" onClick={toggleMe}>
          <p>Explore Popular Categories</p>
          <img
            id="arrow"
            className={menuActive ? "clickedit" : ""}
            src={arrow}
            alt="arrow icon"
          />
        </div>

        <div className={`hideme ${menuActive ? "" : "hider"} `}>
          <Link
            className="navigation__item"
            to="/explore/lakes"
            onClick={toggleMe}
          >
            <img className="menucon" src={kayak} alt="Kayak Icon" />
            <a href="/lakes">Lakes</a>
          </Link>
          <Link
            className="navigation__item"
            to="/explore/campsites"
            onClick={toggleMe}
          >
            <img className="menucon" src={tent} alt="Campsite Icon" />
            <a href="">Campsites</a>
          </Link>
          <Link
            className="navigation__item"
            to="/explore/beaches"
            onClick={toggleMe}
          >
            <img className="menucon" src={signs} alt="Sign Icon" />
            <a href="">Beaches</a>
          </Link>
          <Link
            className="navigation__item"
            to="/explore/hiking"
            onClick={toggleMe}
          >
            <img className="menucon" src={backpack} alt="Backpack Icon" />
            <a href="">Hiking</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
