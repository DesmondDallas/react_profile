// for nav toggle test
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "../../components/navbar/Navbar.scss";
import pic from "../../Images/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  console.log("Hi");

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" activeClassName="active"
            onClick={click ? handleClick : null}
            className="nav-logo nav-links">
            <img src={pic} alt="logoImg"></img>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="wordpress"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Wordpress
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="services"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="contact" activeClassName="active"
              className="nav-links"
                onClick={click ? handleClick : null}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="blog" activeClassName="active"
              className="nav-links"
                onClick={click ? handleClick : null}>
                Blog
              </NavLink>
            </li>
          </ul>
          <button className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </button>
        </div>
      </nav>

      <script src="../components/navbar/Navbar.js" type="text/javascript" />
    </div>
  );
}

export default Navbar;
