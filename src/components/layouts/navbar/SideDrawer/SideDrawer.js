import React from "react";
import { NavLink } from "react-router-dom";

const SideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink to="/about" className="text">
            About me
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className="text" activeClassName="active">
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
        </li>

        <li className="nav--email">
          <p>hello@ayomidebajo.com</p>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
