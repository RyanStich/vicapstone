import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import house from "../images/house.svg";
import star from "../images/star.svg";
import chairs from "../images/chairs.svg";
import backpack from "../images/backpack.svg";
import bus from "../images/bus.svg";
import compass from "../images/compass.svg";
import forest from "../images/forest.svg";
import kayak from "../images/kayak.svg";
import tent from "../images/tent.svg";
import signs from "../images/signs.svg";
import logo from "../images/logo.svg";

const Nav = ({ isActive, setActive }) => {
  return (
    <div className="wrap">
      <div className="navbar">
        <div className="navbar__chunk">
          <img id="logo" src={logo} alt="" className="logo" />
        </div>
        <div className="navbar__wrapper">
          <div className="navbar__inner">
            {/* Top Level Menu *** Home / Explore / Favorites */}
            <div className="main__menu">
              <div className="main__menu__title">
                <span>Explore</span>
              </div>
              <NavLink
                end
                to="/"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="house" src={house} alt="" />
                </div>
                <div className="link__item">Home</div>
              </NavLink>
              <NavLink
                end
                to="/explore"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={compass} alt="" />
                </div>
                <div className="link__item">Explore</div>
              </NavLink>
              <NavLink
                end
                to="/favorites"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="house" src={star} alt="" />
                </div>
                <div className="link__item">Favorites</div>
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
                end
                to="/explore/lakes"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="house" src={kayak} alt="" />
                </div>
                <div className="link__item">Lakes</div>
              </NavLink>

              <NavLink
                end
                to="/explore/campsites"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={tent} alt="" />
                </div>
                <div className="link__item">Campsites</div>
              </NavLink>

              <NavLink
                end
                to="/explore/rv-parks"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={bus} alt="" />
                </div>
                <div className="link__item">RV Parks</div>
              </NavLink>
              <NavLink
                end
                to="/explore/beaches"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={signs} alt="" />
                </div>
                <div className="link__item">Beaches</div>
              </NavLink>
              <NavLink
                end
                to="/explore/parks"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={chairs} alt="" />
                </div>
                <div className="link__item">Parks</div>
              </NavLink>
              <NavLink
                end
                to="/explore/hiking"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={backpack} alt="" />
                </div>
                <div className="link__item">Hiking</div>
              </NavLink>
              <NavLink
                end
                to="/explore/trails"
                className={`menu__item ${(navData) =>
                  navData.isActive ? "active" : ""}`}
              >
                <div className="icon">
                  <img id="compass" src={forest} alt="" />
                </div>
                <div className="link__item">Trails</div>
              </NavLink>
            </div>
            {/* Secondary Menu End *** END*/}
          </div>
        </div>
      </div>
      <div className="hero-nav">
        <span>Locations</span>
      </div>
    </div>
  );
};

export default Nav;
