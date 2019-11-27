import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  ListItemText,
  ListItemSecondaryAction,
  Fab,
  Grid, 
  Paper } from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import BusinessIcon from '@material-ui/icons/Business';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 768,
    minWidth: 345,
  },
}));

export function Profile(props){
    const { user } = props.auth;
    const year = new Date(user.date);
    const classes = useStyles();
    return (
      <Grid container direction="row" justify="center" spacing={3}>  
          <Paper className={classes.root}>
            <List subheader={<ListSubheader>Account</ListSubheader>}>
              <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={`${user.firstName} ${user.lastName}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary={user.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BusinessIcon />
                </ListItemIcon>
                <ListItemText primary={user.companyName} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <VerifiedUserIcon />
                </ListItemIcon>
                <ListItemText primary={user.membership} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary={`Member since ${year ? year.getFullYear() : `(Today?)`}`} />
              </ListItem>
              <ListItem>
                <ListItemSecondaryAction>
                  <Fab color="secondary" aria-label="edit" disabled>
                    <EditIcon button />
                  </Fab>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Paper>
      </Grid>
    );
}
Profile.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Profile);
