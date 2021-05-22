import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import makeStyles from '@material-ui/styles/makeStyles';
import WhyChooseUsGrid from '../utils/WhyChoseUsGrid';

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
            component: RouterLink,
            to:        '/academics',
            variant:   'contained',
            color:     'secondary',
            endIcon:   <KeyboardArrowRightIcon/>
          }}
        >Explore our academics</Button>
      </Typography>
    </Container>
  );
};

export default WhyChooseUs;
