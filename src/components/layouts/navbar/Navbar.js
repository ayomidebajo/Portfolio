import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/Ayomide Bajo.png";

class Navbar extends Component {
  render() {
    return (
        <nav className="nav-wrapper">
          <div className="container">
            <ul className="nav--lists">
              <Link to="/" className="logo">
                <img src={Logo} width="100%" alt="Ayomide Bajo" />
              </Link>

              <li>
                <p>hello.ayomidebajo@gmail.com</p>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
