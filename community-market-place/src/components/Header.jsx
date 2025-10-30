import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Community Marketplace</h1>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Profile</a>
      </nav>
    </header>
  );
}

export default Header;