import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop:    theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  box: {
    backgroundColor: theme.palette.primary.main,
    textAlign:       'center',
    paddingTop:      theme.spacing(5),
    paddingBottom:   theme.spacing(5)
  },
  heading: {
    fontWeight: 'medium'
  },
  grid: {
    textAlign:                      'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    }
  },
  eduLevels: {
    textAlign:      'center',
    fontWeight:     'bold',
    color:          theme.palette.secondary.light,
    marginBottom:   theme.spacing(2),
    textDecoration: 'underline'
  },
  paper: {
    padding:   theme.spacing(5),
    '&:hover': {
      backgroundColor: theme.palette.grey[300]
    }
  }
}));

const EduFacilities = () => {
  const {container, heading, box, eduLevels, grid, paper} = useStyles();
  return (
    <Box className={box}>
      <Container className={container}>
        <Typography variant="h4" className={heading}>Education and Facilities</Typography>
        <Typography>Our school is a great place for learning.
        A place for moulding future leaders of the society.
        <br /> Our cores values surrounds every life of our student,
        and makes the student a perfect tool to better human race,
          and the self</Typography>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper}>
              <Typography variant="h5" className={eduLevels}>Basic</Typography>
              <Typography>Success Builders International School
              is a well-established independent co-educational
              school with educated teachers, a rich blend of
              Nigerian and British curriculum and also having
              a reputation for equipping children for success
              at most of the country's leading and outstanding
                schools.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper}>
              <Typography variant="h5" className={eduLevels}>Primary</Typography>
              <Typography>From the very first moment a child enters
              the school, he/she benefits from an excellent
              academic education supported by highly qualified and
              experienced specialist staff and a large range of
              musical, creative, sporting and artistic opportunities
              which are essential for children&#39;s all-round education
                and development.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper}>
              <Typography variant="h5" className={eduLevels}>Secondary</Typography>
              <Typography>The college has a tradition of excellent
              teaching and learning combined with discipline
              and traditional values which are the bedrock of
              its existence. Academic results put Dream School
              amongst the top schools in the society. It is
              equally well known for its sport and also offers
                pratical experiments.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EduFacilities;
