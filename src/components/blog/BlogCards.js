import React, { Component } from "react";
// import { Link } from "react-router-dom";

class BlogCards extends Component {
  render() {
    return (
      <div className="container">
        <div className="blogcards--c">
          <div className="blogcards blogcard-1">
            <a
              className="blog--link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://dev.to/ayomide_bajo/pushing-an-existing-repository-to-github-1f68"
            >
              See details
            </a>
          </div>
          <div className="blogcards blogcard-2">
            <a className="blog--link" href="#">
              See details
            </a>
          </div>
        </div>

        {/* <div className="btn--container">
          <a href="#">
            <button>View all my articles</button>
          </a>
        </div> */}
      </div>
    );
  }
}

export default BlogCards;
