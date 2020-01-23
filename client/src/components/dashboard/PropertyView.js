import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
    Container, 
    Grid, 
    Typography,
    Fab } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

class PropertyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  };
  render() {
    const fab = {
        color: 'primary',
        className: {
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
        },
        icon: <EditIcon />,
        label: 'Edit',
      };
    const propertyId = this.props.location.pathname.replace('/property/', '');
    const property = this.props.properties.properties.length > 0 ? this.props.properties.properties.find(prty => propertyId === prty._id) : null;
    return (
      <Container fixed>
        {property ?
          <Grid
          container
          direction="column"
          spacing={3}>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} height="100%">
                <Typography variant="h5" component="h5">
                    {property.location.street}, {property.location.city}, {property.location.state} {property.location.zipCode}
                </Typography>
                <Typography variant="h6" component="h6">
                    {property.owner.firstName} {property.owner.lastName}
                </Typography>
                <Typography component="p">
                    Welcome to the property view page where you can see all the information for a specific property!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>
        </Grid>
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
  properties: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  properties: state.properties
});
export default connect(
  mapStateToProps,
)(PropertyView);