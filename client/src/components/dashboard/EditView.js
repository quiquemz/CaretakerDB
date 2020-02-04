import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { addNewProperty } from "../../actions/propertyActions";
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

class EditView extends Component {
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
      this.onChange = this.onChange.bind(this);
    }
    onChange (event) {
      const target = event.target;
    }
    onSubmit = e => {
      e.preventDefault();
    //   this.props.addNewProperty(this.state.property, this.props.auth.user.id, this.props.history);
    }
    
    render() {
      const { errors } = this.state;
      const classes = this.useStyles;
      const propertyId = this.props.location.pathname.replace('/edit/', '');
      const property = this.props.properties.properties.length > 0 ? this.props.properties.properties.find(prty => propertyId === prty._id) : null;
      return (
        <Container fixed>
            <Grid 
              container
              direction="row"
              spacing={3}
              style={{minHeight: '70vh'}}>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Edit property &mdash; {property ? property.location.street : "Unavailable"}
                </Typography>
                <Divider width="100%" />
              </Grid>
              <Grid item xs={12}>
              <CssBaseline />
              <div className={classes.paper}>
                  <form className={classes.form} onSubmit={this.onSubmit} noValidate>
                  <Grid container spacing={2}>
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
                            autoFocus
                            fullWidth
                            id="locationStreet"
                            label="Street"
                            name="locationStreet"
                            onChange={this.onChange}
                            value={property.location.street}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="locationCity"
                            label="City"
                            name="locationCity"
                            onChange={this.onChange}
                            value={property.location.city}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            margin="dense"
                            id="locationState"
                            label="State"
                            name="locationState"
                            onChange={this.onChange}
                            value={property.location.state}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="locationZipCode"
                            label="Zipcode"
                            name="locationZipCode"
                            onChange={this.onChange}
                            value={property.location.zipCode}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h5" gutterBottom>
                          Owner
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="ownerFirstName"
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="ownerFirstName"
                            label="First Name"
                            onChange={this.onChange}
                            value={property.owner.firstName}
                            error={errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="ownerLastName"
                            label="Last Name"
                            name="ownerLastName"
                            onChange={this.onChange}
                            value={property.owner.lastName}
                            error={errors.lastName}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="ownerEmail"
                            label="Email Address"
                            name="ownerEmail"
                            onChange={this.onChange}
                            value={property.owner.email}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="ownerStreet"
                            label="Street"
                            name="ownerStreet"
                            onChange={this.onChange}
                            value={property.owner.address.street}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            required
                            fullWidth
                            id="ownerCity"
                            label="City"
                            name="ownerCity"
                            onChange={this.onChange}
                            value={property.owner.address.city}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            margin="dense"
                            id="ownerState"
                            label="State"
                            name="ownerState"
                            onChange={this.onChange}
                            value={property.owner.address.state}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            margin="dense"
                            fullWidth
                            id="ownerZipCode"
                            label="Zipcode"
                            name="ownerZipCode"
                            onChange={this.onChange}
                            value={property.owner.address.zipCode}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            required
                            margin="dense"
                            fullWidth
                            id="ownerCellPhone"
                            label="Cell Phone"
                            name="ownerCellPhone"
                            onChange={this.onChange}
                            value={property.owner.cellPhone}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerHomePhone"
                            label="Home Phone"
                            name="ownerHomePhone"
                            onChange={this.onChange}
                            value={property.owner.homePhone}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerOfficePhone"
                            label="Office Phone"
                            name="ownerOfficePhone"
                            onChange={this.onChange}
                            value={property.owner.officePhone}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerOtherPhone"
                            label="Other Phone"
                            name="ownerOtherPhone"
                            onChange={this.onChange}
                            value={property.owner.otherPhone}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerAlarmCode"
                            label="Alarm Code"
                            name="ownerAlarmCode"
                            onChange={this.onChange}
                            value={property.owner.alarmCode}
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
                            id="ownerAdditional"
                            label="Additional"
                            name="ownerAdditional"
                            onChange={this.onChange}
                            value={property.owner.additional}
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
                            id="ownerRepToNotify"
                            margin="dense"
                            label="Name"
                            name="ownerRepToNotify"
                            onChange={this.onChange}
                            value={property.owner.repToNotify}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}></Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerRepStreet"
                            margin="dense"
                            label="Street"
                            name="ownerRepStreet"
                            onChange={this.onChange}
                            value={property.owner.repAddress.street}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerRepCity"
                            margin="dense"
                            label="City"
                            name="ownerRepCity"
                            onChange={this.onChange}
                            value={property.owner.repAddress.city}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerRepState"
                            label="State"
                            name="ownerRepState"
                            onChange={this.onChange}
                            value={property.owner.repAddress.state}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerownerRepZipCode"
                            margin="dense"
                            label="Zipcode"
                            name="ownerownerRepZipCode"
                            onChange={this.onChange}
                            value={property.owner.repAddress.zipCode}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            id="ownerRepPhone"
                            label="Phone"
                            margin="dense"
                            name="ownerRepPhone"
                            onChange={this.onChange}
                            value={property.owner.repPhone}
                            error={errors.email}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            id="ownerRepSecondPhone"
                            label="Alternate Phone"
                            name="ownerRepSecondPhone"
                            onChange={this.onChange}
                            value={property.owner.repSecondPhone}
                            error={errors.email}
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
                            id="servicesIrrigationContact"
                            label="Irrigation Company"
                            name="servicesIrrigationContact"
                            onChange={this.onChange}
                            value={property.services.irrigation.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesIrrigationPhone"
                            label="Irrigation Phone"
                            name="servicesIrrigationPhone"
                            onChange={this.onChange}
                            value={property.services.irrigation.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesPlumberContact"
                            label="Plumbing Company"
                            name="servicesPlumberContact"
                            onChange={this.onChange}
                            value={property.services.plumber.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesPlumberPhone"
                            label="Plumbing Phone"
                            name="servicesPlumberPhone"
                            onChange={this.onChange}
                            value={property.services.plumber.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesElectricianContact"
                            label="Electrician Company"
                            name="servicesElectricianContact"
                            onChange={this.onChange}
                            value={property.services.electrician.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesElectricianPhone"
                            label="Electrician Phone"
                            name="servicesElectricianPhone"
                            onChange={this.onChange}
                            value={property.services.electrician.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesCarpenterContact"
                            label="Carpentry Company"
                            name="servicesCarpenterContact"
                            onChange={this.onChange}
                            value={property.services.carpenter.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesCarpenterPhone"
                            label="Carpentry Phone"
                            name="servicesCarpenterPhone"
                            onChange={this.onChange}
                            value={property.services.carpenter.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesApplianceContact"
                            label="Appliance Company"
                            name="servicesApplianceContact"
                            onChange={this.onChange}
                            value={property.services.appliance.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesAppliancePhone"
                            label="Appliance Phone"
                            name="servicesAppliancePhone"
                            onChange={this.onChange}
                            value={property.services.appliance.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesFurnaceContact"
                            label="Furnace/HVAC Company"
                            name="servicesFurnaceContact"
                            onChange={this.onChange}
                            value={property.services.furnace.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesFurnacePhone"
                            label="Furnace/HVAC Phone"
                            name="servicesFurnacePhone"
                            onChange={this.onChange}
                            value={property.services.furnace.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesCleanerContact"
                            label="Cleaning Company"
                            name="servicesCleanerContact"
                            onChange={this.onChange}
                            value={property.services.cleaner.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesCleanerPhone"
                            label="Cleaning Phone"
                            name="servicesCleanerPhone"
                            onChange={this.onChange}
                            value={property.services.cleaner.phone}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesBoatsAndDocksContact"
                            label="Boats/Docks Company"
                            name="servicesBoatsAndDocksContact"
                            onChange={this.onChange}
                            value={property.services.boatsAndDocks.contact}
                            error={errors.companyName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="servicesBoatsAndDocksPhone"
                            label="Boats/Docks Phone"
                            name="servicesBoatsAndDocksPhone"
                            onChange={this.onChange}
                            value={property.services.boatsAndDocks.phone}
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
                            control={<Checkbox checked={property.special.outsideShower} 
                            name="specialOutsideShower"
                            id="specialOutsideShower"
                            onChange={this.onChange} />}
                            label="Outside Shower"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={property.special.outsideFaucet} 
                            name="specialOutsideFaucet"
                            id="specialOutsideFaucet"
                            onChange={this.onChange} />}
                            label="Outside Faucet"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={property.special.outsideSpa} 
                              name="specialOutsideSpa"
                              id="specialOutsideSpa"
                              onChange={this.onChange} />
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
                            id="specialOther"
                            label="Other"
                            name="specialOther"
                            onChange={this.onChange}
                            value={property.special.other}
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
EditView.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  addNewProperty: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  properties: state.properties
});
export default connect(
  mapStateToProps,
  { logoutUser, addNewProperty }
)(EditView);