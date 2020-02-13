import React from "react";
import BlogCards from "../blog/BlogCards";

function Blog() {
  return (
    <div className="container">
      <div className="blog--container">
        <h2>Articles</h2>
        <BlogCards />
      </div>
    </div>
  );
}

export default Blog;
