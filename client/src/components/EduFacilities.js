import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop:    theme.spacing(6*2),
    marginBottom: theme.spacing(5)
  },
  box: {
    textAlign: 'center'
  },
  heading: {
    fontWeight: 'medium'
  },
  grid: {
    textAlign: 'center',
    marginTop: theme.spacing(5)
  },
  eduLevels: {
    textAlign:  'center',
    fontWeight: 'bold',
    color:      theme.palette.secondary.light
  }
}));

const EduFacilities = () => {
  const {container, heading, box, eduLevels, grid} = useStyles();
  return (
    [<Container className={container}>
      <Box className={box}>
        <Typography variant="h4" className={heading}>Education and Facilities</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quos eos, reiciendis adipisci doloribus quae sit, repellendus ad
      debitis culpa sapiente, provident dolore asperiores unde a
        maiores nisi. Labore, numquam quas!</Typography>
      </Box>
    </Container>,
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} elevation={3} className={grid}>
          <Typography variant="h5" className={eduLevels}>Basic</Typography>
          <Typography>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fuga sit nihil, eveniet nobis
          doloribus et possimus velit? A iste, ducimus velit
          excepturi sed, minus, tempore corporis cum numquam
             illo autem.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} elevation={3} className={grid}>
          <Typography variant="h5" className={eduLevels}>Primary</Typography>
          <Typography>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fuga sit nihil, eveniet nobis
          doloribus et possimus velit? A iste, ducimus velit
          excepturi sed, minus, tempore corporis cum numquam
             illo autem.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} elevation={3} className={grid}>
          <Typography variant="h5" className={eduLevels}>Secondary</Typography>
          <Typography>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Fuga sit nihil, eveniet nobis
          doloribus et possimus velit? A iste, ducimus velit
          excepturi sed, minus, tempore corporis cum numquam
             illo autem.</Typography>
        </Grid>
      </Grid>
    </Container>
    ]
  );
};

export default EduFacilities;
