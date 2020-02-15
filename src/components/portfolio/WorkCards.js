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
              <p>
                is a fin-tech mobile app for the Nigeria local market which
                involves money lending with ease
              </p>
              <a
                title="Open in new tab"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn--white">View this project</button>
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
                is an on-demand delivery platform that provides easy and
                convenient delivery services for small businesses.
              </p>
              <button className="btn btn--white">View this project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default workCards;
