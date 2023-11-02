import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ logout }) {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__navLeft">
          <Link to={"/"}>
            <img
              src="https://www.evangadi.com/themes/humans//assets/images/misc/evangadi-logo-home.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__navRight">
          <Link to="/" className="Link">
            <li>Home</li>
          </Link>
          <li>How it Works</li>
          <li>
            <button onClick={logout} className="header__navBtn">
              {localStorage.getItem("auth-token") ? "LogOut" : "SIGN IN"}
            </button>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
