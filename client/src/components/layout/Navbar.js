import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    return (
          <nav>
            <div className="nav-wrapper green">
                <Link to="/" className="brand-logo">CaretakerDB</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="#"><i class="material-icons">search</i></Link></li>
                    <li><Link to="/dashboard">Home</Link></li>
                    {this.props.auth.isAuthenticated ? <li><Link>{this.props.auth.user.name.split(" ")[0]}</Link></li> : <></>}
                    {!this.props.auth.isAuthenticated ? <li><Link to="/login">Log in</Link></li> : <></>}
                    {!this.props.auth.isAuthenticated ? <li><Link to="/register">Sign up</Link></li> : <></>}
                </ul>
            </div>
          </nav>
    );
  }
}
Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
)(withRouter(Navbar));