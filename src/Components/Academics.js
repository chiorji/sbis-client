import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  items: {
    display: 'flex'
  },
  paper: {
    minHeight:       '600px',
    padding:         '24px',
    display:         'flex',
    flexDirection:   'column',
    backgroundColor: theme.palette.grey[100],
    '&.pane-1':      {
      backgroundColor: theme.palette.primary.main,
      color:           theme.palette.common.white
    },
    '& h4': {
      fontSize:     '30px',
      fontWeight:   theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
    '& p': {
      marginBottom: theme.spacing(2)
    }
  }
}));

const Academics = () => {
  const { root, paper, items } = useStyles();
  return (
    <Container maxWidth="xl" className={root} id="academics">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom align="center">Academics</Typography>
          </Grid>

          <Grid item xs={12} md={6} className={items}>
            <Paper className={clsx(paper, 'pane-1')}>
              <Typography component="h4" variant="h5">JUNIOR <br/>SECONDARY SCHOOL</Typography>
              <Typography component="p">
                  The JS School which is now an extension of the
                  Proprietress Nursery and Primary School in Iyiowa
                  Odekpe by the Anambra State Universal Basic Education
                  Board(ASUBECB) offers the subjects leading to the award
                  of Junior Secondary School certificates. The subjects
                  are divided into Core, Vocational and Non Vocational
              </Typography>

              <Typography component="p">
                <strong>Core Subjects:</strong> Mathematics, Introductory
                Technology, EngLish, Integrated Science,
                Business Studies, Health and Physical Education, French
              </Typography>

              <Typography component="p">
                <strong>Pre-Vocational Subject:</strong> Home Economics,
                Nigeria Language and Literature in English,
                Pratical/Agricultural Science, Social Studies,
                (Religious and national value): Civic Education, C. R. S
              </Typography>

              <Typography component="p">
                <strong>Non-Vocational Subject: </strong>Computer Studies,
                At the end of 3 years, it is possible to continue in the
                Senior Secondary School go to a Technical School, or a
                Teacher Training School.
              </Typography>

              <Typography variant="body2" style={{ marginTop: 'auto' }}>
                It is important to note that all the three areas leading
                to Senior Secondary School Certificate (SSCE) equivalents
                plus a vocational certification in case of either the
                Technical or Teacher Training School.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} className={items}>
            <Paper className={paper}>
              <Typography component="h4" variant="h5">SENIOR <br/>SECONDARY SCHOOL</Typography>

              <Typography component="p">
                <strong>Core Subjects:</strong> English,
                Mathematics, Biology, Chemistry, Physics, Agricultural
                Science, Further Mathematics, Technical drawing,
                Accounting, Civic Education and Marketing, Literature
                in English, Economics, Data Processing, Commerce,
                Igbo Language, Government, C. R. S
              </Typography>

              <Typography component="p">
                <strong>Compulsory:</strong> English Language,
                Mathematics, Igbo Language
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Academics;
