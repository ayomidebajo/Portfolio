import React from "react";
import Store from "../../images/E-commerce-store.png";
import BlogPress from "../../images/blogpress.png";

function workCards() {
  return (
    <div className="container">
      <div className="works__container">
        <div className="work--card__container">
          <div className="work__card">
            <img
              className="work--image"
              width="100%"
              src={Store}
              alt="e-commerce store"
            />
            <div className="work--card__content">
              <h3>E-store</h3>
              <p>is an e-commerce store built with react and bootstrap</p>
              <a
                title="Open in new tab"
                href="https://my-e-commerce-store.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--white">View this project</button>
              </a>
              <a
                title="Open in new tab"
                href="https://github.com/ayomidebajo/react-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--white">Source code</button>
              </a>
            </div>
          </div>

          <div className="work__card">
            <img
              className="work--image"
              width="100%"
              src={BlogPress}
              alt="BlogPress"
            />
            <div className="work--card__content">
              <h3>BlogPress</h3>
              <p>
                is a blog built with react,sass and firebase for authentication.
              </p>
              <a
                title="Open in new tab"
                href="https://blogpress.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--white">View this project</button>
              </a>
              <a
                title="Open in new tab"
                href="https://github.com/ayomidebajo/blogpress"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--white">Source code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default workCards;
