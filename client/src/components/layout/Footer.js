import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Container
  } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" component="p">
      {'Copyright © '}
      <Link color="primary" to="/">
        CaretakerDB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    // width: '100%',
    backgroundColor: 'white',
  },
}));

function StickyFooter(props) {
  const classes = useStyles();
  const loggedIn = props.auth.isAuthenticated;

  return (
      <Container className={classes.footer}>
        <Grid container spacing={0} component="div">
          <Grid item xs>
            {loggedIn ? 
            <Typography variant="body1" align="center" component="p">Welcome back, <Link to="/profile" style={{ textDecoration: 'none' }}>{props.auth.user.firstName}</Link></Typography>
            :
            <Typography variant="body1" align="center" component="p">Ready to join? <Link to="/register" style={{ textDecoration: 'none' }}>Sign up here.</Link></Typography>
            }
            <Copyright />
          </Grid>
        </Grid>
      </Container>
  );
}

StickyFooter.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
)(withRouter(StickyFooter));