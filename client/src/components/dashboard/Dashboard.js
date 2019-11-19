import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Contract from "./Contract";
import { Container, Grid } from "@material-ui/core";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contracts: [],
    };
  }
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    componentDidMount() {
      fetch('/contracts/' + this.props.auth.user.id)
        .then(response => response.json())
        .then(data => { 
          this.setState({ contracts: data });
          console.log(data);
        });
    };
    render() {
    const { user } = this.props.auth;
    const { contracts } = this.state;
    return (
      <Container>
        { user.firstName ? 
          <h1>Welcome, {user.firstName}.</h1>
          :
          <h1>Welcome to your Dashboard!</h1>
        }
          <p>This is the dashboard, you can find everything related to the management of your caretaking contracts here.</p>
          { contracts ?
          <Grid container spacing={3}> {
          contracts.map((contract) =>
          <Grid item xs={6} sm={3}>
            <Contract contract={contract} />
            </Grid>
          )
          }
          </Grid>
          :
          <Contract loading/>
          }
          
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