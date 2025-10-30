import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Community Marketplace</h1>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Profile</a>
        <a href="#">Cart</a>
      </nav>
    </header>
  );
};

export default Header;
