import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import RoomIcon from '@material-ui/icons/Room';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import makeStyles from '@material-ui/styles/makeStyles';
import { Link as RouterLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { links } from '../../request/links';
import CopyRight from './CopyRight';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.grey[50],
    paddingTop:      theme.spacing(2),
    fontWeight:      '600'
  },
  paper: {
    backgroundColor:                'transparent',
    color:                          theme.palette.grey[800],
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2)
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  grid: {
    display:        'flex',
    justifyContent: 'space-around',
    padding:        theme.spacing(2)
  },
  icons: {
    height:       '40px',
    width:        '40px',
    marginRight:  theme.spacing(2),
    borderRadius: '5px',
    color:        theme.palette.primary.dark
  },
  linksWrapper: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  link: {
    display:   'block',
    marginTop: theme.spacing(3),
    color:     theme.palette.grey[600]
  },
  footerText: {
    color: theme.palette.grey[600]
  }
}));

const Footer = () => {
  const { container, paper, grid, icons, link, footerText,
    linksWrapper } = useStyles();
  return (
    <Box component="footer" className={container} width={1} id="contacts">
      <Grid container className={grid}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper square elevation={0} className={paper}>
            <Typography variant="h3" component="h5" gutterBottom>S.B.I.S</Typography>
            <Typography component="div">
              <Link href="https://facebook.com/sbis" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className={icons} fill="currentColor"/>
              </Link>
              <Link href="https://facebook.com/sbis" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className={icons} fill="currentColor"/>
              </Link>
              <Link href="https://twitter.com/sbis" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className={icons} fill="currentColor"/>
              </Link>
              <Link href="mailto:successbuildersiyiowa@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon className={icons} fill="currentColor"/>
              </Link>
              <Link href="tel:+2348052452125">
                <PhoneEnabledIcon className={icons} fill="currentColor"/>
              </Link>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} className={linksWrapper}>
          <Paper square elevation={0} className={paper}>
            <Typography variant="h5">Important Links</Typography>
            {links.map(({ label, to }) => (
              <Link
                component= {to.indexOf('#') > -1 ? HashLink : RouterLink}
                to=        {to}
                key=       {label}
                color=     'inherit'
                style=     {{ textDecoration: 'none' }}
                className= {link}
              >{label}</Link>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper square elevation={0} className={paper}>
            <Typography variant="body1" component="div" gutterBottom style={{ display: 'flex',  alignItems: 'center' }}>
              <RoomIcon fill="currentColor"/>
              <Typography variant="h5">Our Location</Typography>
            </Typography>
            <Typography component="p" className={footerText}>
              Success Builders Street by SChool Rd., near Bethel
              Anglican Church, by Acha Str., Iyiowa Odekpe, Onitsha
              Zone, Anambra State.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <CopyRight />
    </Box>
  );
};

export default Footer;
