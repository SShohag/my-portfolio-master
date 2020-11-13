import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
          <div className="navbar-container">
          <ul className="navbar-left">
          <div className="navbar-left-logo">
            <Link to="/about">SH<span style={{color:"red"}}>O</span>HAG</Link>
          </div>
        </ul>
        <ul className="navbar-right">
          <li>
            <Link to="/home" href="#home">Home</Link>
          </li>
          <li>
            <Link to="/about" href="#about">About</Link>
          </li>
          <li>
            <Link to="/project" href="#projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog" href="#blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact" href="#contact">Contact</Link>
          </li>
        </ul>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
