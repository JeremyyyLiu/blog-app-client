import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        BlogApp
      </Link>

      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/create">Create</Link>
      </nav>
    </header>
  );
};

export default Header;
