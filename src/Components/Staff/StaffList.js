import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  card: {
    border:    `1px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      backgroundColor: theme.palette.grey[200]
    }
  },
  media: {
    height: 200
  },
  heading: {
    color: theme.palette.primary.dark
  },
  cardWrap: {
    margin: theme.spacing(2)
  }
}));

const StaffList = ({ avatar, name, description }) => {
  const { media, heading, cardWrap } = useStyles();
  return (
    <div className={cardWrap}>
      <Card title={name}>
        <CardActionArea>
          <CardMedia
            title={name}
            image={avatar}
            className={media}
          />
          <CardContent>
            <Typography variant="h5" className={heading}>{name}</Typography>
            <Typography variant="body2" component="p">{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StaffList;
