import React, { Component } from "react";
import Navbar from "./navbar/Navbar";

import Footer from "./footer/Footer";

class index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="db__main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
export default index;
