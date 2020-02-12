import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProperties } from "../../actions/propertyActions";
import Property from "./Property";
import { Container, Grid, Typography, Fab, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import MLink from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Location from "./img/find_house.svg";

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
    textDecoration: 'none',
  },
  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  map: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: '400px',
    width: '100%',
    margin: '0 auto',
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  };
  onMouseOver = () => this.setState({ hovered: true });
  onMouseOut = () => this.setState({ hovered: false });
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  componentDidMount() {
    if (!this.properties) {
      this.props.getProperties(this.props.auth.user.id);
    }
  };
  render() {
    const { user } = this.props.auth;
    const { properties } = this.props.properties;
    const propertiesLoaded = properties.length > 0;
    const { classes } = this.props;
    const addCardStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      maxWidth: 345,
    }
    return (
      <Container component="main" maxWidth="lg" spacing={0}>
        <Paper className={classes.paper} elevation={2}>
        {user.firstName ? <Typography variant="h3">Welcome, {user.firstName}.</Typography>
                : <Typography variant="h3">Welcome to your Dashboard!</Typography>}
              <Typography variant="body1" gutterBottom>This is the dashboard, you can find everything related to the management of your caretaking properties here.</Typography>
        </Paper>
          <Grid
            container
            spacing={3}>
              <Grid item xs={12} sm={12} height="100%">
              {propertiesLoaded ? 
                  <Map center={[properties[0].location.lat, properties[0].location.lon]} zoom={12} className={ classes.map }>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    {properties.map(function(property, i) {
                      return (<Marker position={[property.location.lat, property.location.lon]} key={i}>
                        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                      </Marker>);
                    })}
                  </Map>
                  : <div></div>}
                </Grid>
                <Grid item xs={12} sm={4} height="100%">
                  <MLink to="/new-property" className={classes.link} component={Link}>
                    <Card style={addCardStyles} raised={this.state.hovered} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                      <CardContent>
                        <Typography color="textSecondary" align="center">
                          <HomeWorkIcon fontSize="large" />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" align="center">
                          Add a new property
                        </Typography>
                        <Typography color="textSecondary" align="center">
                          <AddIcon fontSize="large" />
                        </Typography>
                      </CardContent>
                    </Card>
                  </MLink>
                </Grid>
                {propertiesLoaded ?
                  properties.map(function(property, i) {
                    return (<Grid item xs={12} sm={4} key={i}>
                      <Property property={property} />
                    </Grid>);
                  })
                  : <Grid item xs={12} sm={4}>
                    <Card style={{maxWidth: 345}} margin={2}>
                      <CardHeader avatar={<Skeleton variant="circle" width={40} height={40} action={null} />}
                        title="Example property"
                        subheader="123 Apple St" />
                      <CardContent>
                        <CardMedia>
                          <img src={Location} alt="New house" width="80%" style={{paddingLeft: "10%"}} />
                        </CardMedia>
                        <Skeleton height={6} />
                        <Skeleton height={6} width="80%" />
                        <Typography variant="body2" color="textSecondary" component="p">
                          Doesn't look like you have any properties yet. You should add one!
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                }
              </Grid>
              <Fab aria-label="Add" style={{position: 'fixed', right: 50, bottom: 50}} color="primary" to="/new-property" component={Link}>
                <AddIcon />
              </Fab>
      </Container>
    );
  }
}
Dashboard.propTypes = {
  getProperties: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  properties: state.properties
});
export default connect(
  mapStateToProps,
  { getProperties }
)(withStyles(styles)(Dashboard));