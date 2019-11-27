import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, Grid, Typography } from "@material-ui/core";

export function Profile(props){
    const { user } = props.auth;
    return (
      <Container fixed>
        <Grid
          container
          direction="column"
          spacing={3}
          alignItems="center">
          <Grid item>
            <Typography variant="body1">
              <label>Name: </label> {user.firstName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <label>Email: </label>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <label>Company Name: </label>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <label>Membership: </label>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
}
Profile.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Profile);
