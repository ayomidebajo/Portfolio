import React from "react";
import WorkCards from "./WorkCards";

function Portfolio() {
  return (
    <div className="container">
      <div className="works__container">
        <h2>My works</h2>
        <WorkCards />
      </div>
    </div>
  );
}

export default Portfolio;
