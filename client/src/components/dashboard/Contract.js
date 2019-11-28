import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container } from "@material-ui/core";

class Contract extends Component {
    render() {
    const { loading = false } = this.props;
    const { imageUrl } = this.props;
    const { contract } = this.props;     
    return (
      <Card style={{maxWidth: 345}} margin={2}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Skeleton variant="circle" width={40} height={40} />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={loading ? <Skeleton height={6} width="80%" /> : contract.location.street}
        subheader={loading ? <Skeleton height={6} width="40%" /> : `${contract.location.city}, ${contract.location.state}`}
      />
      {loading ? (
        <Skeleton variant="rect" height={190} />
      ) : ( imageUrl ? (
        <CardMedia
          title={contract.location.city}>
          <img src={imageUrl} alt="Apartment or property" width="100%" />
        </CardMedia>
      ) : (<Skeleton variant="rect" height={190} />))}

      <CardContent>
        {loading ? (
          <Container>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </Container>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              `${contract.location.street}, ${contract.location.city}, ${contract.location.state} ${contract.location.zipCode}`
            }
          </Typography>
        )}
      </CardContent>
    </Card>
    );
  }
}
Contract.propTypes = {
  loading: PropTypes.bool,
};
export default connect(
)(Contract);