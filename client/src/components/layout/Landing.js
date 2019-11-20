import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography, Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import MainLogo from "./main_logo.png";
import LandingLogo from "./long_logo_landing.png";
import DashboardSS from "./dashboard_ss.png";
import Contract from "../dashboard/Contract";

const exampleContracts = [];

export function Landing(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid 
        container 
        direction="column"
        justify="flex-start"
        alignItems="center">
          <Grid item>
            <img src={LandingLogo} className="landingPageLogo" width="80%" />
          </Grid>
        </Grid>
        <Grid 
        container 
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={8}>
          <Grid item xs={3} sm={3}>
            <Contract loading/>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Contract loading/>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Contract loading/>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={6}>
            <Typography component="div">
            <p className="landingPageParagraph">
              Use a simple and clear web app to manage and store your contracts of all your 
              caretaking clients. Transform how you manage your properties and simplify the process, making your and their lives easier.
            </p>
            <Button variant="contained" to="/register">
              Sign up
            </Button>
            </Typography>
          </Grid>
          <Grid item xs={6} spacing={2}>
          <img src={DashboardSS} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps,
)(withRouter(Landing));
