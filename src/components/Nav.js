import React from "react";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
          <div className="navbar-container">
          <ul className="navbar-left">
          <div className="navbar-left-logo">
            <a href="logo">SH<span style={{color:"red"}}>O</span>HAG</a>
          </div>
        </ul>
        <ul className="navbar-right">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
