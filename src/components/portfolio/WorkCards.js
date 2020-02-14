import React from "react";

function workCards() {
  return (
    <div className="container">
      <div className="workcards--c">
        <div className="workcards card-1">
          <a
            className="link-one"
            rel="noopener noreferrer"
            target="_blank"
            href="https://my-e-commerce-store.netlify.com/"
          >
            Demo
          </a>
          <a
            className="link-two"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ayomidebajo/react-store"
          >
            Source code
          </a>
        </div>

        <div className="workcards card-2">
          <a
            className="link-one"
            rel="noopener noreferrer"
            target="_blank"
            href="https://my-e-commerce-store.netlify.com/"
          >
            Demo
          </a>
          <a
            className="link-two"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ayomidebajo/blogpress"
          >
            Source code
          </a>
        </div>

        {/* <div className="workcards card-3"></div>
        <div className="workcards card-4"></div> */}
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
