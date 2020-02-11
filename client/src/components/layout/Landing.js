import React from 'react';
import { Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { 
  Typography, 
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DashboardSS from "./img/organize.svg";
import Cloud from './img/cloud.svg';
import Vault from './img/vault.svg';
import { makeStyles } from '@material-ui/core/styles';
import SpeedIcon from '@material-ui/icons/Speed';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginLeft: theme.spacing(1),
  },
  primaryDark: {
    color: '#fff',
    backgroundColor: '#00675b',
  },
}));

export function Landing(props) {
  const classes = useStyles();
  if (props.auth.isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <Container>
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
              <Fab variant="contained" color="primary" className={classes.margin} aria-label="add" to="/register" component={Link}>
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
          spacing={8}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">
              Next level management
            </Typography>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <SpeedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Fast"
                    secondary="Putting your contracts online is quick and effecient"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <ThumbUpIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Easy"
                    secondary="Once you've uploaded your properties, you can easily manage them via the dashboard"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Free trial"
                    secondary="We have an easy to use free trial that will always be free"
                  />
                </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
              <img alt="Woman sitting on fake webpage with dashboard" src={DashboardSS} width="100%" />
          </Grid>
        </Grid>
        <Grid 
        container 
        direction="column"
        alignItems="center"
        spacing={2}>
          <Box m={10}>
            <ExpandMoreIcon fontSize="large" color="secondary" />
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item xs={12} sm={6}>
              <img alt="Woman using cloud application" src={Cloud} width="100%" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" gutterBottom>
              Simplicity
            </Typography>
            <Typography variant="body1" gutterBottom>
              Thanks to this platform being hosted online, you never have to worry about accessing your 
              properties! You can view, edit, and add new contracts from anywhere you have internet.
            </Typography>
            <Typography variant="body1" gutterBottom>
              An added benefit of working with us is that we don't bloat your experience with unnecessary 
              features or try and cover all possibilities.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We do one thing and we do it <strong>well.</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid 
        container 
        direction="column"
        alignItems="center"
        spacing={2}>
          <Box m={10}>
            <ExpandMoreIcon fontSize="large" color="secondary" />
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={8}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h2" gutterBottom>
              What's there to lose?
            </Typography>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <AttachMoneyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Free trial"
                    secondary="We said it once and we'll say it again, we'll always have a free option"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <EmojiObjectsIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="No brainer"
                    secondary="Tired of managing your properties by hand or on antiquated software?"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.primaryDark}>
                      <CloudDoneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sign up"
                    secondary="Register below to be provisioned your free trial account (no credit card necessary)"
                  />
                </ListItem>
            </List>
            <Fab variant="contained" color="primary" className={classes.margin} aria-label="add" href="/register">
                Get started
                <SendIcon className={classes.extendedIcon} />
              </Fab>
          </Grid>
          <Grid item xs={12} sm={6}>
              <img alt="Large money safe" src={Vault} width="80%" />
          </Grid>
        </Grid>
      </Container>
    </Container>
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
