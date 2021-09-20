import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import makeStyles from '@material-ui/styles/makeStyles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop:    theme.spacing(12),
    marginBottom: theme.spacing(10)
  },
  heading: {
    textAlign:    'center',
    fontWeight:   'medium',
    marginBottom: theme.spacing(10)
  },
  callToAction: {
    textAlign:    'center',
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  paper: {
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    padding:       theme.spacing(3)
  },
  head: {
    marginTop:    theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const WhyChooseUs = ({ data }) => {
  const { container, heading, callToAction } = useStyles();
  return (
    <Container className={container}>
      <Typography
        variant="h4"
        className={heading}
      >Why register your ward with us?</Typography>
      <Grid container spacing={5}>
        {data.map(item => (
          <WhyChooseUsGrid key={item.heading} {...item} />
        ))}
      </Grid>
      <Typography component="div" className={callToAction}>
        <Button
          {...{
            component:        RouterLink,
            to:               '/academics',
            variant:          'contained',
            color:            'secondary',
            size:             'large',
            endIcon:          <KeyboardArrowRightIcon/>,
            disableElevation: true
          }}
        >Explore our academics</Button>
      </Typography>
    </Container>
  );
};

function WhyChooseUsGrid({ avatar, heading, body }) {
  const { paper, head } = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={0} className={paper} variant="outlined">        <Typography variant="h6" className={head}>{heading}</Typography>
        <Typography variant="body2">{body}</Typography>
      </Paper>
    </Grid>
  );
};

export default WhyChooseUs;
