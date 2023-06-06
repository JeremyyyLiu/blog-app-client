import "../App.css";
import React from "react";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        BlogApp
      </a>

      <nav>
        <a href="/">Login</a>
        <a href="/">Register</a>
      </nav>
    </header>
  );
};

export default Header;
