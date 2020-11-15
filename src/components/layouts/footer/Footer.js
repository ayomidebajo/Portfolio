import React from "react";

function Footer() {
  return (
    <div className="footer--container">
      <h3>Follow me on</h3>
      <div className="footer--icon__container">
        <a
          rel="noopener noreferrer"
          aria-label="link to my twitter account"
          target="_blank"
          href="https://twitter.com/ayomide_bajo"
        >
          <i className="fab fa-twitter"></i>
        </a>
        {/* <a
          rel="noopener noreferrer"
          aria-label="link to my linkedin account"
          target="_blank"
          href="https://www.linkedin.com/in/ayomide-bajo-945017197"
        >
          <i className="fab fa-linkedin-in"></i>
        </a> */}
        <a
          rel="noopener noreferrer"
          aria-label="link to my instagram account"
          target="_blank"
          href="https://www.instagram.com/ayomide_bajo"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="link to my codepen account"
          target="_blank"
          href="https://codepen.io/ayomidebajo"
        >
          <i className="fab fa-codepen"></i>
        </a>
        <a
          rel="noopener noreferrer"
          aria-label="link to my github account"
          target="_blank"
          href="https://github.com/ayomidebajo"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <p>© 2020 Ayomide Bajo all rights reserved</p>
    </div>
  );
}

export default Footer;
