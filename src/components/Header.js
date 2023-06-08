import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [username, setUsername] = useState(null);

  // Check if the user is logged in
  useEffect(() => {
    fetch("http://localhost:8080/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  // Request for logout
  function logout() {
    fetch("http://localhost:8080/logout", {
      credentials: "include",
      method: "POST",
    });
  }

  return (
    <header>
      <Link to="/" className="logo">
        BlogApp
      </Link>

      {/* If user logged in */}
      <nav>
        {username && (
          <>
            <Link to="/create">Create</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}

        {/* If user does not login */}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
