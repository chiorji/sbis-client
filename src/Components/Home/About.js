import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight:       '600px',
    display:         'flex',
    flexDirection:   'column',
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: theme.palette.common.white
  },
  paper: {
    width:           '100%',
    border:          0,
    padding:         theme.spacing(1),
    backgroundColor: 'transparent',
    textAlign:       'center',
    '& h2':          {
      fontSize:     '40px',
      color:        theme.palette.primary.main,
      fontWeight:   theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
    '& p': {
      fontSize: '18px'
    }
  }
}));

const About = () => {
  const { container, paper } = useStyles();

  return (
    <Container maxWidth="xl" className={container} id="about">
      <Grid container spacing={3} direction="row"
        justify="space-between"
      >
        <Grid item xs={12} md={7} style={{ margin: ' auto' }}>
          <Paper className={paper} elevation={0}>
            <Typography component="h2" variant="h2" gutterBottom>
              About Success Builders
            </Typography>
            <Typography component="p" paragraph>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa rem, molestias dolorem ab
            repudiandae qui nulla maxime amet porro temporibus
            nesciunt aperiam placeat ducimus harum est ratione
            illo. Ex, itaque.</Typography>
            <Typography component="p" paragraph>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa rem, molestias dolorem ab
            repudiandae qui nulla maxime amet porro temporibus
            nesciunt aperiam placeat ducimus harum est ratione
            illo. Ex, itaque.</Typography>
            <Typography component="p" paragraph>Lorem ipsum dolor sit amet consectetur
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
