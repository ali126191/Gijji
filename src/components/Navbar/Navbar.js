import React, { Component } from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar">
        <a href="#" class="logo">
          <img className="img" src={logo} />
        </a>
        <ul class="main-nav" id="js-menu">
          <li>
            <a href="#" class="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" class="nav-links">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
