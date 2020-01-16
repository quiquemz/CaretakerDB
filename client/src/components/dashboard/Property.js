import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import Skeleton from '@material-ui/lab/Skeleton';
import Location from "./img/find_house.svg";

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  };

  onMouseOver = () => this.setState({ hovered: true });
  onMouseOut = () => this.setState({ hovered: false });
  render() {
    const { loading = false } = this.props;
    const { imageUrl } = this.props;
    const { property } = this.props;     
    return (
      <Link to={{
        pathname: property ? ("/property/" + property._id) : "#",
        property: property
        }} underline="none">
        <Card style={{maxWidth: 345}} margin={2} raised={this.state.hovered} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton variant="circle" width={40} height={40} />
            ) : (
              <Typography color="primary" align="center">
                <HomeWorkIcon fontSize="large" />
              </Typography>
            )
          }
          action={
            loading ? null : (
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            )
          }
          title={loading ? <Skeleton height={6} width="80%" /> : property.location.street}
          subheader={loading ? <Skeleton height={6} width="40%" /> : `${property.location.city}, ${property.location.state}`}
        />
        {loading ? (
          <img src={Location} alt="New house" width="80%" style={{paddingLeft: "10%"}} />
        ) : ( imageUrl ? (
          <CardMedia
            title={property.location.city}>
            <img src={imageUrl} alt="Apartment or property" width="100%" />
          </CardMedia>
        ) : (<img src={Location} alt="New house" width="80%" style={{paddingLeft: "10%"}} />))}

        
          {loading ? (
            <CardContent>
              <Skeleton height={6} />
              <Skeleton height={6} width="80%" />
            </CardContent>
          ) : (
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {`${property.location.street} ${property.location.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {
                `${property.owner.firstName} ${property.owner.lastName}`
              }
            </Typography>
            </CardContent>
          )}
      </Card>
    </Link>
    );
  }
}
Property.propTypes = {
  loading: PropTypes.bool,
};
export default connect(
)(Property);