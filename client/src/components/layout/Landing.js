import React from 'react';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography, Box, Grid } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import LandingLogo from "./img/long_logo_landing.png";
import DashboardSS from "./img/dashboard_ss.png";
import Contract from "../dashboard/Contract";
import ExampleContracts from "./fixture/ExampleContracts.json";
import { makeStyles } from '@material-ui/core/styles';
import sf from "./img/sf.jpg";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
}));

export function Landing(props) {
  const classes = useStyles();
  if (props.auth.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid 
        container 
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}>
          <Grid item xs={12} sm={6} justify="center">
            <Typography variant="h1" color="secondary" align="center">
                <strong>Caretaking</strong>
            </Typography>
            <Typography variant="h1" color="secondary" align="center" gutterBottom>
                <strong>Made Easy</strong>
            </Typography>
            <Typography align="center" gutterBottom>
              Take care of all your caretaking and property management needs without worrying about billing, mailing or managing them.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={0}>
          <Grid item xs={12} justify="center">
            <Typography align="center">
              <Fab variant="contained" color="primary" className={classes.margin} aria-label="add" href="/register">
                Get started
                <SendIcon className={classes.extendedIcon} />
              </Fab>
            </Typography>
          </Grid>
          <Grid item xs={12} justify="flex-start">
            <Typography variant="caption" color="textSecondary">
              (Try free up to 3 properties)
            </Typography>
          </Grid>
        </Grid>
        <Grid 
        container 
        direction="column"
        alignItems="center"
        spacing={2}>
          <Box m={15}>
            <ExpandMoreIcon fontSize="large" color="secondary" />
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={12} spacing={2}>
            <Box boxShadow={3}>
              <img src={DashboardSS} width="100%" />
            </Box>
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
