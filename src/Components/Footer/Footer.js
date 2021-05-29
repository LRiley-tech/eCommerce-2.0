import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <head>
        </head>
          <footer id="footer">
              <script src="https://use.fontawesome.com/740dccf130.js"></script>
          <div className="footer--text">
            <p>
              &copy;{" "}
              <Link className="footer--a" to="/">Leo's Backpacks</Link>
              </p>
          </div>

          <div className="footer--socialLinks">
           <a className="social" href="https://github.com/LeCoding-tech" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github"></i>
           </a>
           <a className="social" href="https://www.linkedin.com/in/leeangelo-riley/" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin"></i>
           </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
