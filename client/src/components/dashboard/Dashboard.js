import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
    const { user } = this.props.auth;
    return (
      <Container>
          <h1>Welcome, {user.firstName}.</h1>
          <h4>This is the dashboard, you can find everything related to the management of your caretaking contracts here.</h4>
          <Skeleton />
      </Container>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);