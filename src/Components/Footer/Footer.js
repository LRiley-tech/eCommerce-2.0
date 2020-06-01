import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <head>
        <script src="https://kit.fontawesome.com/917d90482b.js" crossorigin="anonymous"></script>  
        </head>
          <footer id="footer">
          <div className="footer--text">
            <p>
              &copy;{" "}
              <a className="footer--a" href="index.html">
                Leo's Backpacks
              </a>
            </p>
          </div>

          <div className="footer--socialLinks">
           <a className="social" href="#">
           <i class="fab fa-github"></i>
           </a>
           <a className="social" href="#">
           <i class="fa fa-linkedin-square"></i>
           </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
