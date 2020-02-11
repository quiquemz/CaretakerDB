import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { addNewProperty } from "../../actions/propertyActions";
import { withStyles } from "@material-ui/core/styles"
import { withSnackbar } from 'notistack';
import SaveIcon from '@material-ui/icons/Save';
import { Container, 
  Button, 
  Typography, 
  Divider, 
  Grid, 
  CssBaseline, 
  TextField, 
  Checkbox,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Fab } from "@material-ui/core";

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(1),
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
});

class NewProperty extends Component {
    constructor(props) {
      super(props);
      this.state = {
        expanded: false,
        property: {
          userId: this.props.auth.user.id,
          season: '',
          price: 0,
          additionalCosts: 0,
          additionalCostsDetails: '',
          currentOwed: 0,
          dateCreated: Date.now(),
          location: {
              street: '',
              city: '',
              zipCode: '',
              state: '',
              lat: '-1',
              lon: '-1'
          },
          owner: {
              firstName: '',
              lastName: '',
              plowing: false,
              email: '',
              address: {
                  street: '',
                  city: '',
                  zipCode: '',
                  state: ''
              },
              homePhone: '',
              officePhone: '',
              otherPhone: '',
              cellPhone: '',
              repToNotify: '',
              repAddress: {
                  street: '',
                  city: '',
                  zipCode: '',
                  state: ''
              },
              repPhone: '',
              repSecondPhone: '',
              alarmCode: '',
              additional: ''
          },
          services: {
              irrigation: {
                  contact: '',
                  phone: ''
              },
              plumber: {
                  contact: '',
                  phone: ''
              },
              electrician: {
                  contact: '',
                  phone: ''
              },
              carpenter: {
                  contact: '',
                  phone: ''
              },
              appliance: {
                  contact: '',
                  phone: ''
              },
              furnace: {
                  contact: '',
                  phone: ''
              },
              cleaner: {
                  contact: '',
                  phone: ''
              },
              boatsAndDocks: {
                  contact: '',
                  phone: ''
              },
          },
          special: {
              outsideShower: false,
              outsideFaucet: false,
              outsideSpa: false,
              other: ''
          },
          terms: {
              date: Date.now(),
              signed: ''
          },
        },
        errors: {},
      };
      this.onChange = this.onChange.bind(this);
    }
    onChange (event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      let vals = name.split('.');
      if (vals.length === 1) {
        this.setState(prevState => ({
          ...prevState,
          property: {
            ...prevState.property,
            [vals[0]]: value
          }
        }));
      } else if (vals.length === 2) {
        this.setState(prevState => ({
          ...prevState,
          property: {
            ...prevState.property,
            [vals[0]]: {
              ...prevState.property[vals[0]],
              [vals[1]]: value
            }
          }
        }));
      } else if (vals.length === 3) {
        this.setState(prevState => ({
          ...prevState,
          property: {
            ...prevState.property,
            [vals[0]]: {
              ...prevState.property[vals[0]],
              [vals[1]]: {
                ...prevState.property[vals[0]][vals[1]],
                [vals[2]]: value
              }
            }
          }
        }));
      }
    }
    onSubmit = e => {
      e.preventDefault();
      this.props.addNewProperty(this.state.property, this.props.auth.user.id, this.props.history);
    }
    
    render() {
      const { errors } = this.state;
      const { classes } = this.props;
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
                            name="location.street"
                            onChange={this.onChange}
                            value={this.state.property.location.street || ''}
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
                            name="location.city"
                            onChange={this.onChange}
                            value={this.state.property.location.city || ''}
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
                            name="location.state"
                            onChange={this.onChange}
                            value={this.state.property.location.state || ''}
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
                            name="location.zipCode"
                            onChange={this.onChange}
                            value={this.state.property.location.zipCode || ''}
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
                            name="owner.firstName"
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="owner.firstName"
                            label="First Name"
                            onChange={this.onChange}
                            value={this.state.property.owner.firstName || ''}
                            error={errors.firstName}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            required
                            fullWidth
                            id="owner.lastName"
                            label="Last Name"
                            name="owner.lastName"
                            onChange={this.onChange}
                            value={this.state.property.owner.lastName || ''}
                            error={errors.lastName}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            id="owner.email"
                            label="Email Address"
                            name="owner.email"
                            onChange={this.onChange}
                            value={this.state.property.owner.email || ''}
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
                            name="owner.address.street"
                            onChange={this.onChange}
                            value={this.state.property.owner.address.street || ''}
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
                            name="owner.address.city"
                            onChange={this.onChange}
                            value={this.state.property.owner.address.city || ''}
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
                            name="owner.address.state"
                            onChange={this.onChange}
                            value={this.state.property.owner.address.state || ''}
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
                            name="owner.address.zipCode"
                            onChange={this.onChange}
                            value={this.state.property.owner.address.zipCode || ''}
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
                            name="owner.cellPhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.cellPhone || ''}
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
                            name="owner.homePhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.homePhone || ''}
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
                            name="owner.officePhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.officePhone || ''}
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
                            name="owner.otherPhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.otherPhone || ''}
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
                            name="owner.alarmCode"
                            onChange={this.onChange}
                            value={this.state.property.owner.alarmCode || ''}
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
                            name="owner.additional"
                            onChange={this.onChange}
                            value={this.state.property.owner.additional || ''}
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
                            name="owner.repToNotify"
                            onChange={this.onChange}
                            value={this.state.property.owner.repToNotify || ''}
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
                            name="owner.repAddress.street"
                            onChange={this.onChange}
                            value={this.state.property.owner.repAddress.street || ''}
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
                            name="owner.repAddress.city"
                            onChange={this.onChange}
                            value={this.state.property.owner.repAddress.city || ''}
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
                            name="owner.repAddress.state"
                            onChange={this.onChange}
                            value={this.state.property.owner.repAddress.state || ''}
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
                            name="owner.repAddress.zipCode"
                            onChange={this.onChange}
                            value={this.state.property.owner.repAddress.zipCode || ''}
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
                            name="owner.repPhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.repPhone || ''}
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
                            name="owner.repSecondPhone"
                            onChange={this.onChange}
                            value={this.state.property.owner.repSecondPhone || ''}
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
                            name="services.irrigation.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.irrigation.contact || ''}
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
                            name="services.irrigation.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.irrigation.phone || ''}
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
                            name="services.plumber.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.plumber.contact || ''}
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
                            name="services.plumber.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.plumber.phone || ''}
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
                            name="services.electrician.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.electrician.contact || ''}
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
                            name="services.electrician.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.electrician.phone || ''}
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
                            name="services.carpenter.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.carpenter.contact || ''}
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
                            name="services.carpenter.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.carpenter.phone || ''}
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
                            name="services.appliance.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.appliance.contact || ''}
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
                            name="services.appliance.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.appliance.phone || ''}
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
                            name="services.furnace.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.furnace.contact || ''}
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
                            name="services.furnace.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.furnace.phone || ''}
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
                            name="services.cleaner.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.cleaner.contact || ''}
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
                            name="services.cleaner.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.cleaner.phone || ''}
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
                            name="services.boatsAndDocks.contact"
                            onChange={this.onChange}
                            value={this.state.property.services.boatsAndDocks.contact || ''}
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
                            name="services.boatsAndDocks.phone"
                            onChange={this.onChange}
                            value={this.state.property.services.boatsAndDocks.phone || ''}
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
                            control={<Checkbox checked={this.state.property.special.outsideShower || false} 
                            name="special.outsideShower"
                            id="specialOutsideShower"
                            onChange={this.onChange} />}
                            label="Outside Shower"
                          />
                          <FormControlLabel
                            control={<Checkbox checked={this.state.property.special.outsideFaucet || false} 
                            name="special.outsideFaucet"
                            id="specialOutsideFaucet"
                            onChange={this.onChange} />}
                            label="Outside Faucet"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox checked={this.state.property.special.outsideSpa || false} 
                              name="special.outsideSpa"
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
                            name="special.other"
                            onChange={this.onChange}
                            value={this.state.property.special.other || ''}
                            error={errors.companyName}
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} justify="flex-start">
                      <Grid item xs={12} s={6} lg={3}>
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
                    <Fab aria-label="Save" style={{position: 'fixed', right: 50, bottom: 50}} color="primary" type="submit">
                      <SaveIcon />
                    </Fab>
                  </form>
                </div>
              </Grid>
            </Grid>
        </Container>
      );
  }
}
NewProperty.propTypes = {
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
)(withSnackbar(withStyles(styles)(NewProperty)));