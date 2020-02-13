import React from "react";

function workCards() {
  return (
    <div className="container">
      <div className="workcards--c">
        <div className="workcards card-1">
          <a
            className="blog--link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://my-e-commerce-store.netlify.com/"
          >
            See details
          </a>
          <a
            className="blog--link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://my-e-commerce-store.netlify.com/"
          >
            See details
          </a>
        </div>
        <div className="workcards card-2"></div>
        <div className="workcards card-3"></div>
        <div className="workcards card-4"></div>
      </div>
      {/* <div className="btn--container">
        <a href="#">
          <button>View all works</button>
        </a>
      </div> */}
    </div>
  );
}

export default workCards;
