import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../images/Ayomide Bajo.png";

class Navbar extends Component {
  render() {
    return (
      <div className="header">
        <nav className="nav-wrapper">
          <div className="container">
            <ul className="nav--lists">
              <Link to="/" className="logo left">
                <img src={Logo} alt="Ayomide Bajo" />
              </Link>
              <div className="menu-wrap">
                {/* <input type="checkbox" className="toggler" /> */}
                <div className="hamburger"></div>
                <div />
              </div>
              {/* <li>
                <NavLink to="/about" className="text">
                  About me
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/portfolio"
                  className="text"
                  activeClassName="active"
                >
                  Portfolio
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="text">
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/blog" className="text">
                  My articles
                </NavLink>
              </li> */}

              <li>
                <p>hello.ayomidebajo@gmail.com</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
