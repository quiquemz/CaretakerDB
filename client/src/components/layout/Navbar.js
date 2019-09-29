import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
          <nav>
            <div className="nav-fixed">
            <a href="#" className="brand-logo">CaretakerDB</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/dashboard">Home</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            </div>
            {/* <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              CaretakerDB
            </Link>
          </div>
        </nav> */}
        </nav>
        
    );
  }
}
export default Navbar;