import React, { Component } from "react";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Blog from "./blog/Blog";

import Layout from "../components/layouts/index";
class Home extends Component {
  render() {
    return (
      <Layout>
        <About />
        <Portfolio />
        <Contact />
        <Blog />
      </Layout>
    );
  }
}

export default Home;
