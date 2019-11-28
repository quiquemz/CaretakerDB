import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContracts } from "../../actions/contractActions";
import Contract from "./Contract";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddIcon from '@material-ui/icons/Add';

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
    this.props.getContracts(this.props.auth.user.id);
  };
  render() {
    const { user } = this.props.auth;
    const { contracts } = this.props.contracts;
    const contractsLoaded = contracts.length > 0;
    const addCardStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      maxWidth: 345,
      minHeight: 300,
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
            <Typography variant="body1" gutterBottom>This is the dashboard, you can find everything related to the management of your caretaking contracts here.</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={3}>
                <Link href="/new-contract" underline="none">
                  <Card style={addCardStyles} margin={2} raised={this.state.hovered} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
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
              {contractsLoaded ?
                contracts.map(function(contract, i) {
                  return (<Grid item xs={6} sm={3} key={i}>
                    <Contract contract={contract} />
                  </Grid>);
                })
                : <Contract loading />
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
Dashboard.propTypes = {
  getContracts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  contracts: state.contracts
});
export default connect(
  mapStateToProps,
  { getContracts }
)(Dashboard);