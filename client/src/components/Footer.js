import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import RoomIcon from '@material-ui/icons/Room';
import CopyRight from './CopyRight';
import {links} from '../request/links';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.dark.main,
    paddingTop:      theme.spacing(2),
    minHeight:       '300px'
  },
  paper: {
    backgroundColor:                'transparent',
    color:                          theme.palette.grey[300],
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(8)
    }
  },
  grid: {
    display:        'flex',
    justifyContent: 'space-around',
    padding:        theme.spacing(2)
  },
  icons: {
    height:          '40px',
    width:           '40px',
    marginRight:     theme.spacing(2),
    borderRadius:    '5px',
    padding:         theme.spacing(1),
    color:           theme.palette.primary.main,
    backgroundColor: theme.palette.grey[200]
  },
  link: {
    display:   'block',
    marginTop: theme.spacing(3),
    color:     theme.palette.grey[400]
  },
  footerText: {
    color: theme.palette.grey[400]
  }
}));

const Footer = () => {
  const {container, paper, grid, icons, link, footerText} = useStyles();
  return (
    <>
      <Box component="footer" className={container} width={1}>
        <Grid container className={grid}>
          <Grid item xs={12} md={4}>
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
                <Link href="mailto:successbuilders28@yahoo.com" target="_blank" rel="noopener noreferrer">
                  <EmailIcon className={icons} fill="currentColor"/>
                </Link>
                <Link href="tel:+2348052452125">
                  <PhoneEnabledIcon className={icons} fill="currentColor"/>
                </Link>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper square elevation={0} className={paper}>
              <Typography variant="h5">Important Links</Typography>
              {links.map(({id, label, to}) => (
                <Link {...{
                  component: RouterLink,
                  to:        to,
                  key:       id,
                  color:     'inherit',
                  style:     {textDecoration: 'none'},
                  className: link
                }}
                >{label}</Link>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper square elevation={0} className={paper}>
              <Typography variant="h5" gutterBottom style={{display: 'flex',  alignItems: 'center'}}>
                <RoomIcon fill="currentColor"/>
                <Typography variant="p">Location</Typography>
              </Typography>
              <Typography component="address" className={footerText}>
              Success Builders Street by SChool Rd., near Bethel
              Anglican Church, by Acha Str., Iyiowa Odekpe, Onitsha
              Zone, Anambra State.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <CopyRight />
    </>
  );
};

export default Footer;
