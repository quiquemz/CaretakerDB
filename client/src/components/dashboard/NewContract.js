import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, 
  Button, 
  Typography, 
  Divider, 
  Grid, 
  makeStyles, 
  CssBaseline, 
  TextField, 
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class NewContract extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded: false,
        errors: {},
      };
      this.useStyles = makeStyles(theme => ({
        '@global': {
          body: {
            backgroundColor: theme.palette.common.white,
          },
        },
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '33.33%',
          flexShrink: 0,
        },
        secondaryHeading: {
          fontSize: theme.typography.pxToRem(15),
          color: theme.palette.text.secondary,
        },
      }));
    }
    onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = e => {
      e.preventDefault();
      console.log("NO ACTION HERE YET");
    }
    
    render() {
      const { errors } = this.state;
      const classes = this.useStyles;
      return (
        <Container fixed>
            <Grid 
              container
              direction="row"
              spacing={3}
              style={{minHeight: '70vh'}}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  New property
                </Typography>
                <Divider width="100%" />
              </Grid>
              <Grid xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                  <form className={classes.form} onSubmit={this.onSubmit} noValidate>
                  <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Owner
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                            onChange={this.onChange}
                            value={this.state.firstName}
                            error={errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            autoComplete="lname"
                            onChange={this.onChange}
                            value={this.state.lastName}
                            error={errors.lastName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="Phone"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            autoComplete="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="City"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="State"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="Zipcode"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Property
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            autoComplete="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="City"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="State"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="Zipcode"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="propertyInfo"
                            label="Property Information"
                            id="propertyInfo"
                            autoComplete="propertyInfo"
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password2"
                            label="Confirm Password"
                            type="password"
                            id="password2"
                            autoComplete="current-password"
                            onChange={this.onChange}
                            value={this.state.password2}
                            error={errors.password2}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} justify="flex-start">
                      <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add property
                        </Button>
                      </Grid>
                    </Grid>
                    </form>
                </div>
              </Grid>
            </Grid>
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