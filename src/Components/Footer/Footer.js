import React from "react";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
                integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://use.fontwesome.com/releases/v5.4.1/css/all.css" />
        </head>
          <footer id="footer">
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
