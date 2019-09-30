import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Manage</b> all your caretaking needs in one easy to use applcation on {" "}
              <span style={{ fontFamily: "monospace" }}>CaretakerDB</span>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Use a simple and clear web app to manage and store your contracts of all your 
              caretaking clients. Transform how you manage your clients.
            </p>
            <br />
            <div className="col s12">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light green teal hoverable"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;