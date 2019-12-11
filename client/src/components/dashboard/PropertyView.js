import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddIcon from '@material-ui/icons/Add';

class PropertyView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  };
  render() {
    const { user } = this.props.auth;
    const addCardStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      maxWidth: 345,
    }
    return (
      <Container fixed>
        <Grid
          container
          direction="column"
          spacing={3}>
          <Grid item>
            {user.firstName ? <Typography variant="h3">Welcome, {user.firstName}.</Typography>
              : <Typography variant="h3">Welcome to your Dashboard!</Typography>}
            <Typography variant="body1" gutterBottom>This is the dashboard, you can find everything related to the management of your caretaking properties here.</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} height="100%">
                <Link href="/new-property" underline="none">
                  <Card style={addCardStyles}>
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
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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