import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import schHall from '../assets/img/5.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop:    theme.spacing(5*2),
    marginBottom: theme.spacing(5),
    flexGrow:     1
  },
  para: {
    marginTop: theme.spacing(2)
  },
  heading: {
    color:        theme.palette.secondary.main,
    fontWeight:   'medium',
    marginBottom: theme.spacing(3)
  },
  paper: {
    width:   '100%',
    border:  0,
    padding: theme.spacing(1)
  },
  img: {
    width:  '100%',
    height: '100%'
  }
}));

const About = () => {
  const {container, para, heading, paper, img} = useStyles();

  return (
    <Container className={container} id="about">
      <Grid container spacing={3} direction="row"
        justify="space-between"
      >
        <Grid item xs={12} md={5}>
          <Paper className={paper} elevation={0}>
            <img src={schHall} alt="Front elevation of our school building" className={img}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper className={paper} elevation={0}>
            <Typography component="h2" variant="h4" className={heading}>About SBIS</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa rem, molestias dolorem ab
            repudiandae qui nulla maxime amet porro temporibus
            nesciunt aperiam placeat ducimus harum est ratione
            illo. Ex, itaque.</Typography>
            <Typography className={para}>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa rem, molestias dolorem ab
            repudiandae qui nulla maxime amet porro temporibus
            nesciunt aperiam placeat ducimus harum est ratione
            illo. Ex, itaque.</Typography>
            <Typography className={para}>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa rem, molestias dolorem ab
            repudiandae qui nulla maxime amet porro temporibus
            nesciunt aperiam placeat ducimus harum est ratione
            illo. Ex, itaque.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
