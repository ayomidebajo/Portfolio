import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Img1 from "../../images/blog_one.png";

class BlogCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="blog__container">
          <div className="blog--card__container">
            <div className="blog--card">
              <img
                className="blog--image"
                width="100%"
                height="100%"
                src={Img1}
                alt="e-commerce store"
              />
            </div>
            <h3>Pushing an existing repository to Github.</h3>
            <a
              className="blog--link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/ayomide_bajo/pushing-an-existing-repository-to-github-1f68"
            >
              <button className="btn btn--black">Read article</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCards;
