import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, Typography, Divider, Grid, Paper } from "@material-ui/core";

class NewContract extends Component {
    constructor(props) {
      super(props);
      this.state = {
        contracts: [],
      };
    }
    render() {
      return (
        <Container fixed>
          <Paper>
            <Grid 
              container
              direction="row"
              justify="center"
              spacing={3}
              style={{minHeight: '70vh'}}>
              <Typography variant="h4">
                New property
              </Typography>
              <Divider />
            </Grid>
          </Paper>
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