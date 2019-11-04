import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

class Contract extends Component {
    render() {
    const { loading = false } = this.props;
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
      ) : (
        // <CardMedia
        //   className={classes.media}
        //   image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
        //   title="Ted talk"
        // />
        <Skeleton variant="rect" height={190} />
      )}

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton height={6} />
            <Skeleton height={6} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
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