/* eslint-disable */
import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  card: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  media: {
    height: 200
  },
  heading: {
    color: theme.palette.primary.dark
  }
}))

const StaffList = ({ avatar, name, description }) => {
  const {card, media, heading} = useStyles()
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={card} title={name}>
        <CardActionArea>
          <CardMedia
            title={name}
            image={avatar}
            className={media} />
          <CardContent>
            <Typography variant="h5" className={heading}>{name}</Typography>
            <Typography variant="body2" component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default StaffList;
