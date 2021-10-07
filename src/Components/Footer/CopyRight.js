import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  box: {
    textAlign: 'center',
    fontSize:  'small',
    padding:   theme.spacing(2),
    '& a':     {
      color: theme.palette.grey[600]
    }
  }
}));

const CopyRight = () => {
  const { box } = useStyles();
  return(
    <Box className={box}>
      <Typography variant="body2" component="div">
        &copy; All Right Reserved {new Date().getFullYear()} SBIS
      | <Link href="https://github.com/chiorji/sbis-client" target="_blank" rel="noopener noreferrer">Site developed by Chigbogu</Link>
      </Typography>
    </Box>
  );
};

export default CopyRight;
