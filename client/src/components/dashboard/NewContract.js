import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Contract from "./Contract";
import { Container, Grid } from "@material-ui/core";
import Skeleton from '@material-ui/lab/Skeleton';

class NewContract extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contracts: [],
      };
    }
    render() {
    const { user } = this.props.auth;
    const { contracts } = this.state;
    return (
      <Container>
          <h1>New property</h1>
          
      </Container>
    );
  }
}
NewContract.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(NewContract);