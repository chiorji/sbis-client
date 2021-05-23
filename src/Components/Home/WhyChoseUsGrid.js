import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  paper: {
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    padding:       theme.spacing(3)
  },
  img: {
    height:       '70px',
    width:        '70px',
    borderRadius: '50px'
  },
  head: {
    marginTop:    theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const WhyChooseUsGrid = ({ avatar, heading, body }) => {
  const { paper, head } = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={0} className={paper} variant="outlined">        <Typography variant="h6" className={head}>{heading}</Typography>
        <Typography variant="body2">{body}</Typography>
      </Paper>
    </Grid>
  );
};

export default WhyChooseUsGrid;
