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
  Checkbox,
  FormLabel,
  FormGroup,
  FormControlLabel } from "@material-ui/core";
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
                            margin="dense"
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
                            margin="dense"
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
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
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
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="address"
                            label="Street"
                            name="address"
                            autoComplete="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
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
                            margin="dense"
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
                            margin="dense"
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
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            margin="dense"
                            fullWidth
                            id="ownerPhone"
                            label="Cell Phone"
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
                            fullWidth
                            margin="dense"
                            id="ownerPhone"
                            label="Home Phone"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerPhone"
                            label="Office Phone"
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
                            fullWidth
                            margin="dense"
                            id="ownerPhone"
                            label="Other Phone"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerPhone"
                            label="Alarm Code"
                            name="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            multiline
                            rows={3}
                            rowsMax={6}
                            id="ownerPhone"
                            label="Additional"
                            name="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Representative to Notify
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerPhone"
                            margin="dense"
                            label="Name"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerPhone"
                            margin="dense"
                            label="Street"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerPhone"
                            margin="dense"
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
                            fullWidth
                            margin="dense"
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
                            fullWidth
                            id="ownerPhone"
                            margin="dense"
                            label="Zipcode"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerPhone"
                            label="Phone"
                            margin="dense"
                            name="ownerPhone"
                            autoComplete="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerPhone"
                            label="Alternate Phone"
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
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Address"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="City"
                            name="ownerPhone"
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
                            margin="dense"
                            id="ownerPhone"
                            label="State"
                            name="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="ownerPhone"
                            label="Zipcode"
                            name="ownerPhone"
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            name="propertyInfo"
                            label="Property Information"
                            id="propertyInfo"
                            multiline
                            rows={3}
                            rowsMax={6}
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Services
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Irrigation Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Irrigation Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Plumbing Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Plumbing Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Electrician Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Electrician Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Carpentry Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Carpentry Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Appliance Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Appliance Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Furnance/HVAC Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Furnance/HVAC Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Cleaning Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Cleaning Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Boats/Docks Company"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Boats/Docks Phone"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Special
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormLabel component="legend">Select all that apply</FormLabel>
                        <FormGroup row>
                          <FormControlLabel
                            control={<Checkbox checked={false} value="gilad" />}
                            label="Outside Shower"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={false} value="jason" />}
                            label="Outside Faucet"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={false} value="antoine" />
                            }
                            label="Outside Spa"
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="address"
                            label="Other"
                            name="address"
                            onChange={this.onChange}
                            value={this.state.companyName}
                            error={errors.companyName}
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