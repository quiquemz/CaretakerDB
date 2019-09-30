import React, { Component } from "react";
import { Link } from "react-router-dom";
import authReducers from "../../reducers/authReducers";

class Footer extends Component {
    render() {
      return (
        <footer class="page-footer green">
            <div class="container">
            <div class="row">
                <div class="col l6 s12">
                <h5 class="white-text">CaretakerDB</h5>
                <p class="grey-text text-lighten-4">You can receive help with your account or if you are looking for information 
                by visiting our <Link to="/" className="white-text"><strong>Contact Us</strong></Link> page.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                    <li><Link class="grey-text text-lighten-3" to="/login">Log in</Link></li>
                    <li><Link class="grey-text text-lighten-3" to="/register">Sign up</Link></li>
                </ul>
                </div>
            </div>
            </div>
            <div class="footer-copyright">
            <div class="container">
            &copy; 2019 Copyright CaretakerDB
            </div>
            </div>
        </footer>
      )}
}

export default Footer;