import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import BackDrop from "./navbar/BackDrop/BackDrop";
import SideDrawer from "./navbar/SideDrawer/SideDrawer";
// import Footer from "./footer/Footer";

class index extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="db__main" style={{ marginTop: "64px" }}>
          {this.props.children}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}
export default index;
