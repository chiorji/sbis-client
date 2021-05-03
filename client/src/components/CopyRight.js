import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box: {
    textAlign:       'center',
    fontSize:        'small',
    color:           theme.palette.primary.main,
    backgroundColor: theme.palette.dark.main,
    padding:         theme.spacing(2)
  }
}));

const CopyRight = () => {
  const {box} = useStyles();
  return(
    <Box className={box}>
      <Typography component="body2">
       &copy; {new Date().getFullYear()} all right reserved,
      success builders int&#39;l schools
      | <Link href="https://chigboguorji.netlify.app" target="_blank" rel="noopener noreferrer"><em>Site developed by Bright</em></Link>
      </Typography>
    </Box>
  );
};

export default CopyRight;
