import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Contract from "./Contract";
import { Container, Grid, Typography } from "@material-ui/core";

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
      <Container fixed>
        <Grid
          container
          direction="column"
          spacing={3}>
          <Grid item>
            {user.firstName ? <Typography variant="h3">Welcome, {user.firstName}.</Typography>
              : <Typography variant="h3">Welcome to your Dashboard!</Typography>}
            <Typography variant="body1" gutterBottom>This is the dashboard, you can find everything related to the management of your caretaking contracts here.</Typography>
          </Grid>
          <Grid item>
            {contracts ?
              <Grid container spacing={3}> {
                contracts.map(contract =>
                  <Grid item xs={6} sm={3} key={contract.id}>
                    <Contract contract={contract} key={contract.id} />
                  </Grid>
                )
              }
              </Grid> : <Contract loading />
            }
          </Grid>

        </Grid>
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