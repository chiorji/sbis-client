import React, {useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width:        '100%',
    marginTop:    theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  heading: {
    fontSize:   theme.typography.pxToRem(15),
    fontWeight: 'bold',
    flexShrink: 0
  }
}));

const ControlledAccordion = () => {
  const {root, heading} = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Typography component="div" className={root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        TransitionProps={{unmountOnExit: true}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h5" className={heading}>JUNIOR SECONDARY SCHOOL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="p">
            The JS School which is now an extension of the Proprietress
            Nursery and Primary School in Iyiowa Odekpe by the Anambra
            State Universal Basic Education Board(ASUBECB) offers
            the subjects leading to the award of Junior Secondary
            School certificates.
            The subjects are divided into Core, Vocational and Non Vocational.
            <br />
            <Typography variant="h6">Core Subjects</Typography>
            <List>
              <ListItem>Mathematics</ListItem>
              <ListItem>Introductory Technology</ListItem>
              <ListItem>EngListItemsh</ListItem>
              <ListItem>Integrated Science</ListItem>
              <ListItem>Business Studies</ListItem>
              <ListItem>Health and Physical Education</ListItem>
              <ListItem>French</ListItem>
            </List>
            <br />
            <Typography variant="h6">Pre-Vocational Subject</Typography>
            <List>
              <ListItem>Home Economics</ListItem>
              <ListItem>Nigeria Language and Literature in English</ListItem>
              <ListItem>Pratical/Agricultural Science</ListItem>
              <ListItem>Social Studies</ListItem>
              <ListItem>(Religious and national value):
                Civic Education</ListItem>
              <ListItem>C. R. S</ListItem>
            </List>
            <br />
            <Typography variant="h6">Non-Vocational Subject</Typography>
            <Typography>Computer Studies</Typography>
            <List>
              <ListItem>At the end of 3 years, it is possible to
                continue in the Senior Secondary School or</ListItem>
              <ListItem>Go to a Technical School: or</ListItem>
              <ListItem>Go to a Teacher Training School</ListItem>
            </List>
            <Typography variant="p">It is important to note that all
            the three areas lead to Senior Secondary School Certificate
            (SSCE) equivalents plus a vocational certification in
            case of either the Technical or Teacher Training
              School</Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Secondary */}
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        TransitionProps={{unmountOnExit: true}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" className={heading}>SENIOR SECONDARY SCHOOL</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="p">
            The Senior Secondary School is for those who are capable of
            passing Junior Secondary Examinations at levels good
            enough to complete the 6 year curriculum.
            Students areprepared WAEC, NECO &amp; UTME
            <br />
            <Typography variant="h6">Core Subjects</Typography>
            <List>
              <ListItem>English</ListItem>
              <ListItem>Mathematics</ListItem>
              <ListItem>Biology</ListItem>
              <ListItem>Chemistry</ListItem>
              <ListItem>Physics</ListItem>
              <ListItem>Agricultural ScienceS</ListItem>
              <ListItem>Further Mathematics</ListItem>
              <ListItem>Technical drawing</ListItem>
              <ListItem>Accounting</ListItem>
              <ListItem>Civic Education and Marketing</ListItem>
              <ListItem>Literature in English</ListItem>
              <ListItem>Economics</ListItem>
              <ListItem>Data Processing</ListItem>
              <ListItem>Commerce</ListItem>
              <ListItem>Igbo Language</ListItem>
              <ListItem>Government</ListItem>
              <ListItem>C. R. S</ListItem>
            </List>
            <br />
            <Typography variant="h6">Compulsory</Typography>
            <List>
              <ListItem>English Language</ListItem>
              <ListItem>Mathematics</ListItem>
              <ListItem>Igbo Language</ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Typography>
  );
};

export default ControlledAccordion;
