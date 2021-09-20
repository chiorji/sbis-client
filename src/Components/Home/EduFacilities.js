import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

import schHall from '../../assets/img/5.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign:                      'center',
    paddingTop:                     theme.spacing(5),
    paddingBottom:                  theme.spacing(5),
    display:                        'flex',
    flexDirection:                  'column',
    justifyContent:                 'center',
    backgroundImage:                `url(${schHall})`,
    backgroundRepeat:               'no-repeat',
    backgroundSize:                 'cover',
    backgroundAttachment:           'scroll',
    [ theme.breakpoints.up('md') ]: {
      minHeight: '700px'
    }
  },
  heading: {
    color:           theme.palette.grey[700],
    backgroundColor: 'transparent',
    marginBottom:    theme.spacing(4),
    '& h4':          {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      color: theme.palette.grey[600]
    }
  },
  grid: {
    textAlign:                      'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    }
  },
  paper: {
    padding:         theme.spacing(5),
    textAlign:       'center',
    minHeight:       '400px',
    backgroundColor: 'rgba(255, 255, 255, 0.84)',
    '& h5':          {
      fontSize:   '30px',
      fontWeight: theme.typography.fontWeightBold,
      color:      theme.palette.primary.main
    },

    '&:hover': {
      backgroundColor: theme.palette.grey[100]
    }
  }
}));

const EduFacilities = () => {
  const { heading, root, grid, paper } = useStyles();
  return (
    <Container maxWidth='xl' className={root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0} className={heading}>
            <Typography variant="h4" gutterBottom>Education and Facilities</Typography>
            <Typography variant="body1" component="p">
              Our school is a great place for learning.
            A place for moulding future leaders <br />of the society.
            Our cores values surrounds every life of our student,<br />
            and makes the student a perfect tool to better human race,
            and the self</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper} variant="outlined">
              <Typography variant="h5" gutterBottom>Basic</Typography>
              <Typography variant="body1" component="p">Success Builders International School
              is a well-established independent co-educational
              school with educated teachers, a rich blend of
              Nigerian and British curriculum and also having
              a reputation for equipping children for success
              at most of the country's leading and outstanding
                schools.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper}  variant="outlined">
              <Typography variant="h5" gutterBottom>Primary</Typography>
              <Typography variant="body1" component="p">From the very first moment a child enters
              the school, he/she benefits from an excellent
              academic education supported by highly qualified and
              experienced specialist staff and a large range of
              musical, creative, sporting and artistic opportunities
              which are essential for children&#39;s all-round education
                and development.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={grid}>
            <Paper className={paper}  variant="outlined">
              <Typography variant="h5" gutterBottom>Secondary</Typography>
              <Typography variant="body1" component="p">
                The college has a tradition of excellent
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
    </Container>
  );
};

export default EduFacilities;
