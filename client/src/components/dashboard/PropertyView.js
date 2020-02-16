import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { deleteExistingProperty } from "../../actions/propertyActions";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { 
    Container, 
    Grid, 
    Typography,
    Fab,
    Paper,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import TrashIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
  },
  map: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: '300px',
    margin: '0 auto',
    '@media (min-width: 1px)': {
      width: '95%',
    },
    '@media (min-width: 600px)': {
      width: '85%',
    },
    '@media (min-width: 976px)': {
      width: '75%',
    },
  },
  fabEdit: {
    position: 'fixed',
    '@media (min-width: 1px)': {
      bottom: '5px',
      right: '5px',
    },
    '@media (min-width: 600px)': {
      bottom: '20px',
      right: '20px',
    },
    '@media (min-width: 976px)': {
      bottom: '50px',
      right: '50px',
    },
  },
  fabDelete: {
    position: 'fixed',
    '@media (min-width: 1px)': {
      bottom: '5px',
      left: '5px',
    },
    '@media (min-width: 600px)': {
      bottom: '20px',
      left: '20px',
    },
    '@media (min-width: 976px)': {
      bottom: '50px',
      left: '50px',
    },
  },
});

class PropertyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      opened: false,
      propertyId: this.props.location.pathname.replace('/property/', ''),
    };
    this.deleteOnClick = this.deleteOnClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseDelete = this.handleCloseDelete.bind(this);
  };
  deleteOnClick() {
    this.setState({opened: true});
  };
  handleClose() {
    this.setState({opened: false});
  };
  handleCloseDelete() {
    this.props.deleteExistingProperty(this.state.propertyId, this.props.auth.user.id, this.props.history);
  };
  render() {
    const fabEdit = {
      color: 'primary',
      icon: <EditIcon />,
      label: 'Edit',
    };
    const fabDelete = {
      color: 'secondary',
      icon: <TrashIcon />,
      label: 'Delete',
    };
    const { classes } = this.props;
    const propertyId = this.props.location.pathname.replace('/property/', '');
    const property = this.props.properties.properties.length > 0 ? this.props.properties.properties.find(prty => propertyId === prty._id) : null;
    const position = property && property.location.lat ? [property.location.lat, property.location.lon] : [0, 0];
    return (
      <Container component="main" maxWidth="md">
        {property ?
        <Paper className={classes.paper} elevation={3}>
            <Grid
            container
            direction="column"
            spacing={3}>
            <Grid item>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} height="100%">
                  <Typography variant="h2" component="h2">
                    {property.location.street}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} height="100%">
                  <Typography gutterBottom variant="h6" component="h6">
                      Owner &mdash; {property.owner.firstName} {property.owner.lastName}
                  </Typography>
                  {property && property.location.lat ? 
                  <Map center={position} zoom={13} className={ classes.map }>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                      <Popup>{property.location.street}</Popup>
                    </Marker>
                  </Map>
                  : <div></div>}
                </Grid>
                <Grid item xs={12} sm={12} height="100%">
                  <Typography variant="h6" component="h6">
                    Location
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={12} height="100%">
                  <Typography gutterBottom variant="body" component="p">
                      {property.location.street}, {property.location.city}, {property.location.state} {property.location.zipCode}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} height="100%">
                  <Typography variant="h6" component="h6">
                    Owner
                  </Typography>
                </Grid> 
                <Grid item xs={12} sm={12} height="100%">
                  <Typography gutterBottom variant="body" component="p">
                      {property.owner.firstName} {property.owner.lastName} &mdash; {property.owner.address.street}, {property.owner.address.city}, {property.owner.address.state} {property.owner.address.zipCode}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} height="100%">
                  <Typography gutterBottom variant="body" component="p">
                      {property.owner.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Fab aria-label={fabEdit.label} className={classes.fabEdit} color={fabEdit.color} component={Link} to={"/edit/" + property._id}>
            {fabEdit.icon}
          </Fab>
          <Fab aria-label={fabDelete.label} className={classes.fabDelete} color={fabDelete.color} onClick={this.deleteOnClick}>
            {fabDelete.icon}
          </Fab>
          <Dialog
            open={this.state.opened}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Delete this property?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Are you sure you want to delete {property.location.street}, {property.location.city}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleCloseDelete} color="secondary">
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
        :
        <Grid
          container
          direction="column"
          spacing={3}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} height="100%">
                <Typography variant="h5" component="h3">
                    This property is unavailable.
                </Typography>
                <Typography component="p">
                    Welcome to the property view page where you can see all the information for a specific property!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        }
      </Container>
    );
  }
}
PropertyView.propTypes = {
  auth: PropTypes.object.isRequired,
  properties: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  properties: state.properties
});
export default connect(
  mapStateToProps,
  { deleteExistingProperty }
)(withStyles(styles)(PropertyView));