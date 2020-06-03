import React from "react";
import { Link } from "react-router-dom";


export default function Links() {
    return (
          <div>
        <header className="header">
          <nav className="header--nav">
          <Link to="/"><i class="fas fa-hiking"></i></Link>

            <h2 className="logo">
              <Link to="/">Leo's Backpacks</Link>
            </h2>
            <ul className="header--nav--ul">
              <li className="header--nav--li">
                <Link className="neon" to="/">Home</Link>
              </li>
              <li>
                <Link className="neon" to="/Products">Shop Now</Link>
              </li>
              <li className="header--nav--li">
                <Link className="neon" to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }