import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box: {
    textAlign:       'center',
    fontSize:        'small',
    color:           theme.palette.grey[500],
    backgroundColor: theme.palette.primary.dark,
    padding:         theme.spacing(2),
    '& a':           {
      color: theme.palette.grey[500]
    }
  }
}));

const CopyRight = () => {
  const {box} = useStyles();
  return(
    <Box className={box}>
      <Typography variant="body2" component="div">
        all right reserved &copy; {new Date().getFullYear()} success
       builders int&#39;l schools
      | <Link href="https://chigboguorji.netlify.app" target="_blank" rel="noopener noreferrer"><strong>Site developed by Bright</strong></Link>
      </Typography>
    </Box>
  );
};

export default CopyRight;
