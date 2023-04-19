import React from "react";
import logo from "./logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Neo Brutalist E-Commerce" />
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
